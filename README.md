PC Face
=======

PC Face is a collection of programmer-friendly resources that allow
drawing [CP437][CP437WIKI] characters on a graphical canvas. This
project provides bitmap arrays for all 256 glyphs from the CP437
character set rendered using various free fonts that reproduce the
original IBM PC OEM fonts.

![CP437 characters rendered on an HTML5 canvas][CP437IMG]

Additionally, this project includes a [Python script][PY] to generate
these bitmaps. This script could be useful for generating similar
bitmaps for other fonts not included in this project. This project
also provides a set of [JavaScript functions][JS] that may be used to
render the bitmaps on an HTML5 canvas. This set of functions serve as
a reference for how these bitmaps could be used to render CP437 glyphs
in other graphical environments. More about this is discussed in the
sections below.

Visit [susam.github.io/pcface/demo][DEMO] to see a demo.

[CP437WIKI]: https://en.wikipedia.org/wiki/Code_page_437
[CP437IMG]: https://susam.github.io/blob/img/pcface/pcface-0.2.0.png
[PY]: src/pcface.py
[JS]: src/pcface.js
[DEMO]: https://susam.github.io/pcface/demo/


Contents
--------

* [Resources](#resources)
* [Demo](#demo)
* [Bitmap Format](#bitmap-format)
* [Font Details](#font-details)
  * [Modern DOS Font](#modern-dos-font)
  * [Oldschool PC Fonts](#oldschool-pc-fonts)
* [API Documentation](#api-documentation)
* [API Usage](#api-usage)
  * [Python API](#python-api)
  * [Python Tool](#python-tool)
  * [JavaScript API](#javascript-api)
* [License](#license)
* [Support](#support)
* [Channels](#channels)
* [More](#more)


Resources
---------

There are a number of resource files provided in the [out/](out/)
directory of this project. Visit [susam.github.io/pcface/out/][OUT] to
browse these resources. The directory at this URL contains
subdirectories for various free fonts based on the original IBM PC OEM
fonts. Each font directory contains a number of resources. Links to
modern-dos-8x16 resource files are provided below as examples while
describing these resources. Here is a brief description of the
resource files in each directory.

- [out/modern-dos-8x16/fontlist.js][]: Bitmap representation of all
  256 glyphs from the CP437 character set exposed as a JavaScript
  array of bitmap arrays. Each bitmap array represents the bitmap of a
  CP437 character.
- [out/moderndos-8x16/fontmap.js][]: Bitmap representation of all
  CP437 glyphs from the CP437 character set exposed as a JavaScript
  object that maps each CP437 character to its bitmap array.
- [out/moderndos-8x16/glyph.txt][]: All CP437 glyphs represented using
  asterisks.
- [out/moderndos-8x16/graph.txt][]: All CP437 glyphs represented using
  the at symbol (`@`) and dots (`.`). Each row of the glyph is
  prefixed with the binary code of the row represented in hexadecimal.
  The same binary codes appear as comments in the JavaScript files
  mentioned above.
- [out/moderndos-8x16/preview-8x16.png][]: A preview of the font read
  from the original font file.
- [out/moderndos-8x16/preview-16x32.png][]: A larger preview of the
  font read from the original font file.

Similar resource files are available for each such font included in
this project. Visit [susam.github.io/pcface/out/][OUT] to browse them.

[OUT]: https://susam.github.io/pcface/out/
[out/modern-dos-8x16/fontlist.js]: https://susam.github.io/pcface/out/moderndos-8x16/fontlist.js
[out/moderndos-8x16/fontmap.js]: https://susam.github.io/pcface/out/moderndos-8x16/fontmap.js
[out/moderndos-8x16/glyph.txt]: https://susam.github.io/pcface/out/moderndos-8x16/glyph.txt
[out/moderndos-8x16/graph.txt]: https://susam.github.io/pcface/out/moderndos-8x16/graph.txt
[out/moderndos-8x16/preview-16x32.png]: https://susam.github.io/pcface/out/moderndos-8x16/preview-16x32.png
[out/moderndos-8x16/preview-8x16.png]: https://susam.github.io/pcface/out/moderndos-8x16/preview-8x16.png

These resource files are also available via CDN at
<https://cdn.jsdelivr.net/npm/pcface/out/>.


Demo
----

For a quick demo of the various bitmaps available in this project,
visit the demo page at [susam.github.io/pcface/demo/][DEMO]. There is
a dropdown menu at the bottom that can be used to select bitmaps for
different fonts.

In the demo page, you would notice that each bitmap demo comes in two
variants: one with the suffix `font-list` and another with the suffix
`font-map`. The `font-list` demo loads `fontlist.js` of the chosen
font and renders the glyphs in green. The `font-map` demo loads
`fontmap.js` of the chosen font and renders the glyphs in amber. The
rendered glyphs look exactly the same in both demos because the same
bitmap arrays are used in both cases. The only difference between
`fontlist.js` and `fontmap.js` is how these bitmap arrays are exposed
in a JavaScript `const`. The former exposes an array of bitmap arrays
whereas the latter exposes an object that maps each CP437 character to
its bitmap array.


Bitmap Format
-------------

The format of the bitmaps available in this project is quite simple.
Each glyph is represented with a WxH grid of pixels where W is the
width of each glyph and H is the height of each glyph. For example,
each bitmap in [moderndos-8x16][] represents 16 rows of pixels with 8
columns in each row. These 16 rows are represented as 16 integers in
the bitmap for each glyph. For example, the glyph for the uppercase
letter 'B' rendered using this font is represented as:

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
with the font's foreground colour and the last two pixels are left
blank. In this manner, 16 rows of pixels must be plotted.

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
to pixels, refer to the `drawChar()`, `drawString()`, and
`drawStrings()` functions in [src/pcface.js](src/pcface.js). You can
also load this script in your web page using a CDN URL and use these
functions directly in your page. This is explained in more detail in
section [JavaScript API](#javascript-api).

It should be possible to refer to these functions and write similar
code in a different programming language for a graphical toolkit of
your choice.

[moderndos-8x16]: https://susam.github.io/pcface/out/moderndos-8x16


Font Details
------------

### Modern DOS Font

This project includes [Modern DOS 8x16][MDOS] font (version
20190101.02) developed by Jayvee Enaguas. This font is available under
the terms of the [CC0 1.0 Universal Public Domain Dedication][CC0]. A
copy of the font is also archived in the
[src/font/moderndos/](src/font/moderndos/) directory of this project.

This font is based on the [IBM VGA 8x16][VGA] and [Verite
8x16][VERITE] OEM fonts for IBM PCs. Some glyphs in this font look
exactly like the glyphs of IBM VGA 8x16 while some others look exactly
like the glyphs of Verite 8x16. However, there are also several glyphs
in this font that match neither of the two OEM fonts. Instead they
happen to be adaptations of the glyphs found in one or both of the OEM
fonts.

In my opinion, this font contains the best parts of both OEM fonts. I
like that this font has the slashed zero of Verite. I also like the
more squarish outline of the letters in Verite that has been inherited
into this font. While it inherits a lot of good design from Verite
8x16, it also inherits some nice features from IBM VGA 8x16. For
example, it has the raised stem for the digit 2 and the curved stem
for the digit 7 from IBM VGA 8x16.

[MDOS]: https://www.dafont.com/modern-dos.font
[CC0]: https://creativecommons.org/publicdomain/zero/1.0/
[VGA]: https://int10h.org/oldschool-pc-fonts/fontlist/font?ibm_vga_8x16
[VERITE]: https://int10h.org/oldschool-pc-fonts/fontlist/font?verite_8x16


### Oldschool PC Fonts

This project includes several [Oldschool PC][OLDSCHOOL] fonts (version
2.2) developed by VileR. These fonts are available terms of [Creative
Commons Attribution-ShareAlike 4.0 International License][CCBYSA].
Copies of these fonts are also archived in the
[src/font/oldschool/](src/font/oldschool/) directory of this project.

These fonts do an excellent job of reproducing the original IBM PC OEM
fonts as faithfully as possible. However, these fonts also differ from
the original OEM fonts in minor ways, especially, to correct minor
errors in the original fonts. See the FAQ at the [Oldschool PC
Documentation][OLDSCHOOLDOC] for more details about these corrections.

[OLDSCHOOL]: https://int10h.org/oldschool-pc-fonts/fontlist/
[OLDSCHOOLDOC]: https://int10h.org/oldschool-pc-fonts/readme/
[CCBYSA]: https://creativecommons.org/licenses/by-sa/4.0/


API Documentation
-----------------

While the primary purpose of this project is to distribute bitmap
arrays for CP437 glyphs, this project also makes some of the work that
went into generating and testing the bitmaps as Python and JavaScript
functions. The documentation for these functions can be found here:

- [Python API Documentation][PYDOC]
- [JavaScript API Documentation][JSDOC]

[PYDOC]: https://susam.github.io/pcface/doc/py/api/pcface.html
[JSDOC]: https://susam.github.io/pcface/doc/js/module-pcface.html


API Usage
---------

The subsections in this section provide a very brief introduction to
how to get started with the Python and JavaScript functions exposed by
this project. For a detailed account of what each function does, refer
to the API documentation links provided in the previous section.


### Python API

TODO


### Python Tool

TODO


### JavaScript API

TODO


License
-------

The original fonts archived in this project are available under the
terms of the orignal licenses chosen by the font developers, i.e.,

- [src/font/moderndos/](src/font/moderndos/) is available under the
  terms of the [CC0 1.0 Universal Public Domain Dedication][CC0];
- [src/font/oldschool/](src/font/oldschool/) is available under the
  terms of the [Creative Commons Attribution-ShareAlike 4.0
  International License][CCBYSA].

You may use the content of the following directory under the terms of
either the [MIT License][L] or the [CC0 1.0 Universal Public Domain
Dedication][CC0]:

- [out/out/moderndos-8x16/](out/out/moderndos-8x16/)

You may use the content of the following directory under the terms of
either the [GNU General Public License v3][GPL] or the [Creative
Commons Attribution-ShareAlike 4.0 International License][CCBYSA]:

- [out/oldschool-bios-8x8/](out/oldschool-bios-8x8/)
- [out/oldschool-cga-8x8/](out/oldschool-cga-8x8/)
- [out/oldschool-ega-8x14/](out/oldschool-ega-8x14/)
- [out/oldschool-mda-9x14/](out/oldschool-mda-9x14/)
- [out/oldschool-model30-8x16/](out/oldschool-model30-8x16/)
- [out/oldschool-pgc-8x16/](out/oldschool-pgc-8x16/)
- [out/oldschool-verite-8x16/](out/oldschool-verite-8x16/)
- [out/oldschool-vga-8x16/](out/oldschool-vga-8x16/)
- [out/oldschool-vga-9x14/](out/oldschool-vga-9x14/)
- [out/oldschool-vga-9x16/](out/oldschool-vga-9x16/)
- [src/demo.html](src/demo.html)

All other files in this project, excluding the ones listed in the
three lists above, are available under the terms of the of the MIT
License. See [LICENSE.md][L] for the complete license text.

[L]: LICENSE.md
[GPL]: https://www.gnu.org/licenses/gpl-3.0.html


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
small subset of the Modern DOS 8x16 bitmaps available in this project
has been used to render text on a game canvas.
