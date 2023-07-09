;;;; Recursive Index Page Generator
;;;; ==============================

;; The MIT License (MIT)
;;
;; Copyright (c) 2018-2023 Susam Pal
;;
;; Permission is hereby granted, free of charge, to any person obtaining
;; a copy of this software and associated documentation files (the
;; "Software"), to deal in the Software without restriction, including
;; without limitation the rights to use, copy, modify, merge, publish,
;; distribute, sublicense, and/or sell copies of the Software, and to
;; permit persons to whom the Software is furnished to do so, subject to
;; the following conditions:
;;
;; The above copyright notice and this permission notice shall be
;; included in all copies or substantial portions of the Software.
;;
;; THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
;; EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
;; MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
;; IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
;; CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
;; TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
;; SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

;; Note: Only this Lisp program is available under the terms of the
;; MIT License. Unless otherwise mentioned, all rights reserved for
;; all other files available in the directory that contains this
;; program.

(require "uiop")

(defun directory-basename (path)
  "Return the parent directory of the specified pathname."
  (let ((name (car (last (pathname-directory path)))))
    (namestring (make-pathname :directory (list :relative name)))))

(defun format-size (size)
  "Convert size in bytes to human-readable size."
  (let ((powers (list (cons (expt 2 30) "G")
                      (cons (expt 2 20) "M")
                      (cons (expt 2 10) "K")
                      (cons (expt 2  0) "B")))
        (chosen-power)
        (chosen-suffix))
    (dolist (entry powers)
      (setf chosen-power (car entry))
      (setf chosen-suffix (cdr entry))
      (when (<= chosen-power size)
        (return)))
    (fstr "~a&nbsp;~a" (round (/ size chosen-power)) chosen-suffix)))

(defun write-file (filename text)
  "Write text to file and close the file."
  (with-open-file (f filename :direction :output :if-exists :supersede)
    (write-sequence text f)))

(defun write-log (fmt &rest args)
  "Log message with specified arguments."
  (apply #'format t fmt args)
  (terpri))

(defun fstr (fmt &rest args)
  "Format string using specified format and arguments."
  (apply #'format nil fmt args))

(defun join-strings (strings)
  "Join strings into a single string."
  (format nil "~{~a~}" strings))

(defun string-starts-with (prefix string)
  "Test that string starts with the given prefix."
  (and (<= (length prefix) (length string))
       (string= prefix string :end2 (length prefix))))

(defun string-ends-with (suffix string)
  "Test that the string ends with the given prefix."
  (and (<= (length suffix) (length string))
       (string= suffix string :start2 (- (length string) (length suffix)))))

(defun ignored-p (url-path)
  "Return t if given path should be ignored, nil otherwise."
  (or (string-starts-with "." url-path)))

(defvar *template* "
<!DOCTYPE html>
<html lang=\"en\">
<head>
  <title>Index of ~a</title>
  <meta charset=\"UTF-8\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
  <style>
    body {color: #333; font-family: monospace,monospace; font-size: large}
    body {line-height: 1.5; margin: 0 auto; max-width: 40em; padding: 0 1em}
    h1 {margin-bottom: 0.25em}
    a:link {color: #00e}
    a:visited {color: #518}
    a:focus, a:hover {color: #03f}
    a:active {color: #e00}
    table {width: 100%}
    tr {height: 2em}
    td:last-child {text-align: right}
    hr {margin: 1em auto; border: 0; border-bottom: medium dotted #999}
    footer {text-align: center}
    @media (prefers-color-scheme: dark) {
      body {background: #111; color: #bbb}
      a:link {color: #9bf}
      a:visited{ color: #a9f}
      a:focus, a:hover {color: #9cf}
      a:active{color: #f99}
    }
  </style>
</head>
<body>
<main>
  <h1>Index of ~a</h1>
  <table>
~a  </table>
</main>
<hr>
<footer>&copy; 2018-~a Susam Pal</footer>
</body>
</html>
")

(defun make-html-row (path size)
  (with-output-to-string (s)
    (let ((href (if (string-ends-with "/" path) (fstr "~a~a" path *index*) path)))
      (format s "    <tr>~%")
      (format s "      <td><a href=\"~a\">~a</a></td>~%" href path)
      (format s "      <td>~a</td>~%" size)
      (format s "    </tr>~%"))))

(defun make-directory-index (title current-pathname paths-and-sizes)
  "Render index pages for the given current directory."
  (let ((html (join-strings (loop for (path . size) in paths-and-sizes
                                  collect (make-html-row path size))))
        (path))
    (setf html (fstr *template* title title html 2023))
    (dolist (filename '("index.html" "ls.html"))
      (setq path (enough-namestring (merge-pathnames filename current-pathname)))
      (unless (probe-file path)
        (write-log "Writing ~a ..." path)              
        (write-file path html)))))

(defun visit-directory (apex-pathname current-pathname)
  "Make index pages for the given current directory and its subdirectories."
  (let ((title "PC Face")
        (total-size 0)
        (paths-and-sizes)
        (size))
    ;; Collect subdirectories.
    (dolist (path (uiop:subdirectories current-pathname))
      (unless (ignored-p (enough-namestring path apex-pathname))
        (setf size (visit-directory apex-pathname path))
        (push (cons (directory-basename path) (format-size size)) paths-and-sizes)
        (incf total-size size)))
    ;; Collect files.
    (dolist (path (uiop:directory-files current-pathname))
      (unless (ignored-p (enough-namestring path apex-pathname))
        (setf size (with-open-file (stream path) (file-length stream)))
        (push (cons (file-namestring path) (format-size size)) paths-and-sizes)
        (incf total-size size)))
    ;; Navigation links.
    (unless (equal apex-pathname current-pathname)
      (push (cons "../" "-") paths-and-sizes)
      (setf title (enough-namestring current-pathname apex-pathname)))
    ;; Sort paths collected by path names.
    (setf paths-and-sizes
          (sort paths-and-sizes (lambda (x y) (string< (car x) (car y)))))
    ;; Render index page.
    (make-directory-index title current-pathname paths-and-sizes)
    ;; Return total size of current directory tree to caller.
    total-size))

(defvar *index* ""
  "Filename to be used as path suffix in links to directories.")

(visit-directory (truename "_site/") (truename "_site/"))
