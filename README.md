PC Face
=======

PC Face is a collection of programmer-friendly resources that allow
drawing [CP437][CP437WIKI] characters on a graphical canvas. This
project provides bitmap arrays for all 256 glyphs from the CP437
character set rendered using various IBM PC OEM fonts. Additionally,
this project includes a [Python script][PY] to generate these bitmaps.
This script could be useful for generating similar bitmaps for other
fonts not included in this project. This project also provides a set
of [JavaScript functions][JS] that may be used to render the bitmaps
on an HTML5 canvas. This set of functions serve as a reference of how
these bitmaps could be used to render CP437 glyphs in other graphical
environments.

![CP437 characters rendered on an HTML5 canvas][CP437IMG]

[CP437WIKI]: https://en.wikipedia.org/wiki/Code_page_437
[CP437IMG]: https://susam.github.io/blob/img/pcface/pcface-0.2.0.png
[PY]: src/pcface.py
[JS]: src/pcface.js


Contents
--------

* [Resources](#resources)
* [Bitmap Format](#bitmap-format)
* [Font Details](#font-details)
* [API Documentation](#api-documentation)
* [Credit](#credit)
* [License](#license)
* [Support](#support)
* [Channels](#channels)
* [More](#more)


Resources
---------

There are a number of files available in this project. Here is a brief
description of some of the files:

- [out/fontlist.js](out/fontlist.js): Bitmap representation of all
  CP437 glyphs as a JavaScript array.
- [out/fontmap.js](out/fontmap.js): Bitmap representation of all CP437
  glyphs as a JavaScript object that maps Unicode characters that
  approximate the glyphs to their bitmaps.
- [out/glyph.txt](out/glyph.txt): All CP437 glyphs represented using
  asterisks.
- [out/graph.txt](out/graph.txt): All CP437 glyphs represented using
  the at symbol and dots. Each row of the glyph is prefixed with the
  binary code of the row represented in hexadecimal. The same binary
  codes appear in the JavaScript files mentioned above.

The bitmap array files are also available at the following CDN URLs:

- https://cdn.jsdelivr.net/npm/pcface/out/fontlist.js
- https://cdn.jsdelivr.net/npm/pcface/out/fontmap.js

You are free to use these resources or any file available in this
project under the terms of the MIT license. Perhaps you are making a
retro-style game from first principles where you decide what each
pixel should be. Perhaps you want to render CP437 glyphs using
asterisks to make a text banner. The resource files available in this
project might turn out to be useful for such activities if you are
ready to write some code to translate the available bitmaps to pixels
on screen.


Bitmap Format
-------------

The format of the bitmaps available in
[out/fontlist.js](out/fontlist.js) and
[out/fontmap.js](out/fontmap.js) is quite simple. Each glyph is
represented with a 8x16 grid of pixels, i.e., 16 rows of pixels with 8
columns in each column. The 16 rows are represented as 16 integers in
the bitmap (a list of integers) for each glyph. For example, the glyph
for the uppercase letter 'B' is represented as:

```javascript
  [
    0x00, 0x00, 0xfc, 0x66, 0x66, 0x66, 0x7c, 0x66,
    0x66, 0x66, 0x66, 0xfc, 0x00, 0x00, 0x00, 0x00
  ], // [B] (66)
```

Each integer represents the dots that must be plotted for every row of
the glyph. The integers `0x00` and `0x00` at the beginning means that
the top two rows of the glyph are blank. Then `0xfc` (binary
`1111100`) means that the first 6 pixels of the third row are plotted
with the font colour and the last two pixels are left blank. In this
manner, 16 rows of pixels must be plotted.

Here is an example Python code that reads these bitmaps and plots the
glyph on standard output using a dot (`.`) for every `0` bit and the
at symbol (`@`) for every `1` bit:

```python
bitmap = [
    0x00, 0x00, 0xfc, 0x66, 0x66, 0x66, 0x7c, 0x66,
    0x66, 0x66, 0x66, 0xfc, 0x00, 0x00, 0x00, 0x00,
]
s = ''
for row in bitmap:
    s += f'{row:#04x} ' + f'{row:08b}\n'.translate(str.maketrans('01', '.@'))
print(s)
```

Here is the output:

```
0x00 ........
0x00 ........
0xfc @@@@@@..
0x66 .@@..@@.
0x66 .@@..@@.
0x66 .@@..@@.
0x7c .@@@@@..
0x66 .@@..@@.
0x66 .@@..@@.
0x66 .@@..@@.
0x66 .@@..@@.
0xfc @@@@@@..
0x00 ........
0x00 ........
0x00 ........
0x00 ........
```

If you need more help with writing the code to translate the bitmaps
to pixels, refer to the `drawChar()` function in
[src/fontlist.html](src/fontlist.html) or
[src/fontmap.html](src/fontmap.html) to see an example of how you can
read the bitmap and plot the bitmap on a canvas. You may also refer to
the `drawLine()` function to draw a line of text or the `drawLines()`
function to draw multiple lines of text. It should be possible to
refer to these functions and write similar code for the programming
language and graphical toolkit of your choice.


Font Details
------------

The font used in this project is [Modern DOS 8x16][MDOS] version
20190101.02 developed by Jayvee Enaguas. Jayvee has made this font
available under the terms of [CC0 1.0 Universal Public Domain
Dedication][CC0]. A copy of the font is also archived in the
[src/modern-dos/](src/modern-dos/) directory of this project. A
preview of this font is available here:

- [out/preview-8x16.png](out/preview-8x16.png)
- [out/preview-16x32.png](out/preview-16x32.png)

This font is based on the [IBM VGA 8x16][VGA] and [Verite
8x16][VERITE] OEM fonts. Some glyphs in this font look exactly like
the glyphs of IBM VGA 8x16 while some others look exactly like the
glyphs of Verite 8x16. However, there are also several glyphs in this
font that match neither of the two OEM fonts. Instead they happen to
be adaptations of the glyphs found in one or both of the OEM fonts.

In my opinion, Jayvee Enaguas has done an outstanding job of picking
the best parts from both OEM fonts (IBM VGA 8x16 and Verite 8x16) and
fused them together to create this font (Modern DOS 8x16). I like that
this font has the slashed zero of Verite. I also like the more
squarish outline of the letters in Verite that has been inherited into
this font. While it inherits a lot of good design from Verite 8x16, it
also inherits some nice features from IBM VGA 8x16. For example, it
has the raised stem for the digit 2 and the curved stem for the digit
7 from IBM VGA 8x16.

In case, you prefer another PC font, say one of the fonts available at
<https://int10h.org/oldschool-pc-fonts/fontlist/>, you can generate
the resource files and bitmap arrays by running this command at the
top-level directory of this project:

```sh
make venv
venv/bin/python3 src/pcface.py PATH_TO_TTF_FILE
```

[MDOS]: https://www.dafont.com/modern-dos.font
[CC0]: https://creativecommons.org/publicdomain/zero/1.0/
[VGA]: https://int10h.org/oldschool-pc-fonts/fontlist/font?ibm_vga_8x16
[VERITE]: https://int10h.org/oldschool-pc-fonts/fontlist/font?verite_8x16


Credit
------

Thanks to Jayvee Enaguas for making *Modern DOS* available under the
terms of [CC0 1.0 Universal (CC0 1.0) Public Domain Dedication][CC0].
This project is based on the *8x16* variant of this font.


License
-------

This is free and open source software. You can use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of it,
under the terms of the MIT License. See [LICENSE.md][L] for details.

This software is provided "AS IS", WITHOUT WARRANTY OF ANY KIND,
express or implied. See [LICENSE.md][L] for details.

[L]: LICENSE.md


Support
-------

To report bugs, suggest improvements, or ask questions,
[create issues][ISSUES].

[ISSUES]: https://github.com/susam/pcface/issues


Channels
--------

The author of this project hangs out at the following places online:

- Website: [susam.net](https://susam.net)
- Twitter: [@susam](https://twitter.com/susam)
- Mastodon: [@susam@mastodon.social](https://mastodon.social/@susam)
- GitHub: [@susam](https://github.com/susam)
- Matrix: [#susam:matrix.org](https://app.element.io/#/room/#susam:matrix.org)
- IRC: [#susam:libera.chat](https://web.libera.chat/#susam)

You are welcome to subscribe to, follow, or join one or more of the
above channels to receive updates from the author or ask questions
about this project.


More
----

See [Andromeda Invaders](https://github.com/susam/invaders) where a
small subset of the bitmaps available in this project has been used to
render text on a game canvas.
