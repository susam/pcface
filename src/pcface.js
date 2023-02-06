(function () {
  'use strict'

  /**
   * Exported module of PC Face.
   *
   * @exports pcface
   */
  const pcface = {}

  /**
   * Draw a single character on a canvas using the given canvas
   * context. The (x, y) coordinates represent the top-left corner of
   * the glyph. The x-coordinate represents the column index the
   * leftmost edge of the glyph. Similarly, the y-coordinate
   * represents the row index of the topmost edge of the glyph. The
   * character `c` may either be an integer ASCII code of a CP437
   * character or a string containing a single Unicode character that
   * represents a CP437 character.
   *
   * If `c` is an ASCII code, then `bitmaps` must be an array of
   * bitmaps. If `s` is a string containing a single Unicode
   * character, then `bitmaps` must be an object that maps each
   * Unicode character that represents a CP437 character to its
   * bitmap array.
   *
   * @param {Array|Object} bitmaps - An array/object containing bitmap arrays.
   * @param {CanvasRenderingContext2D} ctx - Canvas context.
   * @param {number|string} c - Character to draw on canvas.
   * @param {number} x - X coordinate of the leftmost edge of the glyph.
   * @param {number} y - Y coordinate of the topmost edge of the glyph.
   * @param {number} scale - Scale multiplier.
   */
  pcface.drawChar = function (bitmaps, ctx, w, c, x, y, scale) {
    const bitmap = bitmaps[c]
    for (let i = 0; i < bitmap.length; i++) {
      for (let j = 0; j < w; j++) {
        const mask = 1 << (w - 1 - j)
        if ((bitmap[i] & mask) !== 0) {
          ctx.fillRect(x + scale * j, y + scale * i, scale, scale)
        }
      }
    }
  }

  /**
   * Draw a single string with its top-left corner placed at
   * coordinate (x, y). The string `s` may either be an array of
   * integers where each integer is an ASCII code of a CP437 character
   * of it may be a string of Unicode characters where each Unicode
   * character represents a CP437 character.
   *
   * If `s` is an array of ASCII codes, then `bitmaps` must be an
   * array of bitmaps. If `s` is a string of Unicode characters, then
   * `bitmaps` must be an object that maps each Unicode character that
   * represents a CP437 character to its bitmap array.
   *
   * @param {Array|Object} bitmaps - An array/object containing bitmap arrays.
   * @param {CanvasRenderingContext2D} ctx - Canvas context.
   * @param {Array|Object} bitmaps - An array or an object of bitmap arrays.
   * @param {number} w - Horizontal width to allocate for each glyph.
   * @param {Array|string} s - Characers to draw on canvas.
   * @param {number} x - X coordinate of the leftmost edge of the glyphs.
   * @param {number} y - Y coordinate of the topmost edge of the glyphs.
   * @param {number} scale - Scale multiplier (should be a positive integer).
   */
  pcface.drawString = function (bitmaps, ctx, w, s, x, y, scale) {
    for (let i = 0; i < s.length; i++) {
      pcface.drawChar(bitmaps, ctx, w, s[i], x + i * scale * w, y, scale)
    }
  }

  /**
   * Draw multiple strings with the top-left corner of the first
   * string placed at coordinate (x, y). Each subsequent string is
   * placed below the previous one. The height `h` specifies the
   * distance between the top edge of one string and the top edge of
   * the next one. The width `w` specifies the distance between the
   * left edge of one glyph and the left edge of the next one.
   *
   * The string `s` may either be an array of array of integers where
   * each integer is an ASCII code of a CP437 character of it may be
   * an array of strings of Unicode characters where each Unicode
   * character represents a CP437 character.
   *
   * If `s` is an array of array of ASCII codes, then `bitmaps` must
   * be an array of bitmaps. If `s` is an array of strings of Unicode
   * characters, then `bitmaps` must be an object that maps each
   * Unicode character that represents a CP437 character to its
   * bitmap.
   *
   * @param {CanvasRenderingContext2D} ctx - Canvas context.
   * @param {Array|Object} bitmaps - An array or an object of bitmap arrays.
   * @param {number} w - Horizontal width to allocate for each glyph.
   * @param {number} h - Horizontal height to allocate for each glyph.
   * @param {Array} ss - An array of array of integers or an array of strings.
   * @param {number} x - X coordinate of the leftmost edge of the glyphs.
   * @param {number} y - Y coordinate of the topmost edge of the glyphs.
   * @param {number} scale - Scale multiplier (should be a positive integer).
   */
  pcface.drawStrings = function (bitmaps, ctx, w, h, ss, x, y, scale) {
    for (let i = 0; i < ss.length; i++) {
      pcface.drawString(bitmaps, ctx, w, ss[i], x, y + i * scale * h, scale)
    }
  }

  /**
   * Create an array of consecutive integers with `start` as the first
   * integer and `stop - 1` as the last integer in the array. This
   * function may be useful for creating a range of CP437 character
   * codes for demos. For example, calling `pcface.range(65, 70)`
   * returns `[65, 66, 67, 68, 69]` which can then be passed to
   * {@linkcode module:pcface.drawString} to draw the glyphs
   * represented by these integers.
   *
   * @param {number} start - Start integer.
   * @param {number} stop - Stop integer.
   */
  pcface.range = function (start, stop) {
    const result = []
    for (let i = start; i < stop; i++) {
      result.push(i)
    }
    return result
  }

  /**
   * Return an array of arrays of integers. All nested arrays together
   * contain consecutive integers from `start` to `stop - 1`. These
   * integers are split into multiple nested arrays such that each
   * nested array contains no more than `chunk` number of integers.
   * For example, calling `pcface.range(65, 78, 5)` returns `[[65, 66,
   * 67, 68, 69], [70, 71, 72, 73, 74], [75, 76, 77]]`. This array of
   * arrays can then be passed to {@linkCode
   * module:pcface.drawStrings} to draw the glyphs represented by
   * these integers.
   *
   * @param {number} start - Start integer.
   * @param {number} stop - Stop integer.
   * @param {number} chunk - Maximum length of each nested array.
   */
  pcface.ranges = function (start, stop, chunk) {
    const result = []
    for (let chunkStart = start; chunkStart < stop; chunkStart += chunk) {
      result.push(pcface.range(chunkStart, Math.min(stop, chunkStart + chunk)))
    }
    return result
  }

  if (typeof window !== 'undefined') {
    window.pcface = pcface
  } else {
    module.exports = pcface
  }
})()
