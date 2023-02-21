"""Font preview and bitmap arrays generator."""

import argparse
import math
import os
import re
import sys

from PIL import Image, ImageDraw, ImageFont

__version__ = '0.3.0'


def make_bitmap(char, path, size, width, height):
    """Create bitmap for a given character.

    The given font file is used to internally render the given
    character in memory. Then the rendered character in memory is read
    pixel by pixel to generate its bitmap. The returned value is a
    list of integers where each integer represents the bitmap of a row
    of pixels of the rendered character. The entire list of bitmaps
    returned represents all rows of pixels of the rendered character.

    Arguments:
        char (str): Character to create bitmap for.
        path (str): Path to font file.
        size (int): Font size that creates rendered glyph of given height.
        width (int): Width of each glyph in the given font.
        height (int): Height of each glyph in the given font.

    Returns:
        list[int]: Bitmap for the given character rendered with the
        given font.
    """
    image = Image.new('1', (width, height))
    draw = ImageDraw.Draw(image)
    draw.font = ImageFont.truetype(path, size)
    draw.text((0, 0), char, fill=1)
    bitmap = []
    for row in range(height):
        row_bitmap = 0
        for col in range(width):
            pixel = image.getpixel((col, row))
            row_bitmap = (row_bitmap << 1) | pixel
        bitmap.append(row_bitmap)
    return bitmap


def make_bitmaps(chars, path, size, width, height):
    """Create bitmaps for all given characters.

    For each character in ``chars``, the bitmap of the character is
    computed as specified in docstring of :func:`make_bitmap`. A list
    of bitmaps, one bitmap for each character, is returned.

    Arguments:
        chars (str): One or more characters.
        path (str): Path to font file.
        size (int): Font size that creates rendered glyph of given height.
        width (int): Width of each glyph in the given font.
        height (int): Height of each glyph in the given font.

    Returns:
        list[list[int]]: A list of bitmaps.
    """
    return [make_bitmap(c, path, size, width, height) for c in chars]


def make_graph(bitmap, width, symbols, prefix):
    """Create ASCII graph of the given bitmap.

    The text representation of bitmap is a multiline string where each
    line represents one integer of the bitmap list. Each 0-bit of the
    bitmap is represented with the character `symbols[0]`. Similarly,
    each 1-bit of the bitmap is represented with the character
    `symbols[1]`.

    Arguments:
        bitmap (list[int]): Bitmap of a single glyph.
        width (int): Width of each glyph.
        symbols (str): Symbols to use 0 and 1 in the graph.
        prefix (bool): Whether to prefix each line of output with an
            integer that represents the bitmap value for the
            corresponding row of the glyph.

    Returns:
        str: ASCII graph of the bitmap of the given character.
    """
    translation = str.maketrans('01', symbols)
    output = ''
    for row in bitmap:
        assert width > 0 and row < (1 << width)
        if prefix:
            prefix = '0x' + f'{row:x}'.zfill(math.ceil(width / 4)) + ' '
        else:
            prefix = ''
        binary = f'{row:b}'.zfill(width)
        output += prefix + binary.translate(translation) + '\n'
    return output


def make_graphs(chars, bitmaps, width, symbols, prefix):
    """Create ASCII graphs of given bitmaps.

    The returned value is a multiline string that represents text
    representations of one or more characters specified in `chars`.
    The bitmap representation of each character consists of the string
    returned by func:`make_graph`. In the returned value, each bitmap
    representation is preceded by one line of header that shows the
    character representation and the ASCII code of the character.

    Arguments:
        chars (str): One or more characters.
        bitmaps (list[list[int]]): A list of corresponding bitmaps.
        width (int): Width of each glyph.
        symbols (str): Symbols to use 0 and 1 in the graph.
        prefix (bool): Whether to prefix each line of output with an
            integer that represents the bitmap value for the
            corresponding row of the glyph.

    Returns:
        str: A string containing the ASCII graphs of the bitmaps.
    """
    output = ''
    for index, (char, bitmap) in enumerate(zip(chars, bitmaps)):
        output += f"----- [{char}] ({index}) -----\n"
        output += make_graph(bitmap, width, symbols, prefix)
    output += '----- END -----\n'
    return output


def _make_array(bitmap):
    """Convert bitmap into a string representing an array of integers."""
    return '[' + ', '.join([f'{n:#04x}' for n in bitmap]) + ']'


def make_font_list(chars, bitmaps, const_name):
    """Create JavaScript code to represent bitmaps as an array of arrays.

    Arguments:
      chars (str): One or more characters.
      bitmaps (list[list[int]]): A list of corresponding bitmaps.
      const_name (str): JavaScript constant name to assign the array to.

    Returns:
      str: JavaScript code that represents bitmaps as an array of arrays.
    """
    output = f'const {const_name} = [\n'
    for index, (char, bitmap) in enumerate(zip(chars, bitmaps)):
        output += f"  {_make_array(bitmap)}, // [{char}] ({index})\n"
    output += ']\n'
    return output


def make_font_map(chars, bitmaps, const_name):
    """Create JavaScript code to represent bitmaps as an object.

    Arguments:
      chars (str): One or more characters.
      bitmaps (list[list[int]]): A list of corresponding bitmaps.
      const_name (str): Constant name to assign the object to.

    Returns:
      str: JavaScript code that represents bitmaps as an object that
      maps each CP437 character (represented as Unicode) to its bitmap
      (an array of integers).
    """
    output = 'const ' + const_name + ' = {\n'
    for index, (char, bitmap) in enumerate(zip(chars, bitmaps)):
        output += "  '"
        output += '\\' + char if char in ("'", '\\') else char
        output += f"': {_make_array(bitmap)}, // [{char}] ({index})\n"
    output += '}\n'
    return output


def cp437():
    """Return all CP437 characters in ascending order.

    Returns:
        str: All CP437 characters as a string.
    """
    codes = [
        0x0000, 0x263a, 0x263b, 0x2665, 0x2666, 0x2663, 0x2660, 0x2022,
        0x25d8, 0x25cb, 0x25d9, 0x2642, 0x2640, 0x266a, 0x266b, 0x263c,
        0x25ba, 0x25c4, 0x2195, 0x203c, 0x00b6, 0x00a7, 0x25ac, 0x21a8,
        0x2191, 0x2193, 0x2192, 0x2190, 0x221f, 0x2194, 0x25b2, 0x25bc,
        0x0020, 0x0021, 0x0022, 0x0023, 0x0024, 0x0025, 0x0026, 0x0027,
        0x0028, 0x0029, 0x002a, 0x002b, 0x002c, 0x002d, 0x002e, 0x002f,
        0x0030, 0x0031, 0x0032, 0x0033, 0x0034, 0x0035, 0x0036, 0x0037,
        0x0038, 0x0039, 0x003a, 0x003b, 0x003c, 0x003d, 0x003e, 0x003f,
        0x0040, 0x0041, 0x0042, 0x0043, 0x0044, 0x0045, 0x0046, 0x0047,
        0x0048, 0x0049, 0x004a, 0x004b, 0x004c, 0x004d, 0x004e, 0x004f,
        0x0050, 0x0051, 0x0052, 0x0053, 0x0054, 0x0055, 0x0056, 0x0057,
        0x0058, 0x0059, 0x005a, 0x005b, 0x005c, 0x005d, 0x005e, 0x005f,
        0x0060, 0x0061, 0x0062, 0x0063, 0x0064, 0x0065, 0x0066, 0x0067,
        0x0068, 0x0069, 0x006a, 0x006b, 0x006c, 0x006d, 0x006e, 0x006f,
        0x0070, 0x0071, 0x0072, 0x0073, 0x0074, 0x0075, 0x0076, 0x0077,
        0x0078, 0x0079, 0x007a, 0x007b, 0x007c, 0x007d, 0x007e, 0x2302,
        0x00c7, 0x00fc, 0x00e9, 0x00e2, 0x00e4, 0x00e0, 0x00e5, 0x00e7,
        0x00ea, 0x00eb, 0x00e8, 0x00ef, 0x00ee, 0x00ec, 0x00c4, 0x00c5,
        0x00c9, 0x00e6, 0x00c6, 0x00f4, 0x00f6, 0x00f2, 0x00fb, 0x00f9,
        0x00ff, 0x00d6, 0x00dc, 0x00a2, 0x00a3, 0x00a5, 0x20a7, 0x0192,
        0x00e1, 0x00ed, 0x00f3, 0x00fa, 0x00f1, 0x00d1, 0x00aa, 0x00ba,
        0x00bf, 0x2310, 0x00ac, 0x00bd, 0x00bc, 0x00a1, 0x00ab, 0x00bb,
        0x2591, 0x2592, 0x2593, 0x2502, 0x2524, 0x2561, 0x2562, 0x2556,
        0x2555, 0x2563, 0x2551, 0x2557, 0x255d, 0x255c, 0x255b, 0x2510,
        0x2514, 0x2534, 0x252c, 0x251c, 0x2500, 0x253c, 0x255e, 0x255f,
        0x255a, 0x2554, 0x2569, 0x2566, 0x2560, 0x2550, 0x256c, 0x2567,
        0x2568, 0x2564, 0x2565, 0x2559, 0x2558, 0x2552, 0x2553, 0x256b,
        0x256a, 0x2518, 0x250c, 0x2588, 0x2584, 0x258c, 0x2590, 0x2580,
        0x03b1, 0x00df, 0x0393, 0x03c0, 0x03a3, 0x03c3, 0x00b5, 0x03c4,
        0x03a6, 0x0398, 0x03a9, 0x03b4, 0x221e, 0x03c6, 0x03b5, 0x2229,
        0x2261, 0x00b1, 0x2265, 0x2264, 0x2320, 0x2321, 0x00f7, 0x2248,
        0x00b0, 0x2219, 0x00b7, 0x221a, 0x207f, 0x00b2, 0x25a0, 0x00a0,
    ]
    return ''.join([chr(code) for code in codes])


# pylint: disable-next=too-many-arguments
def make_preview(text, path, size, cols, width, height, scale):
    """Create a preview of the given text rendered with given font.

    Arguments:
        text (char): Text to create a preview image for.
        path (str): Path to font file.
        size (int): Font size that creates rendered glyph of given height.
        cols (int): Width of preview in terms of number of character columns.
        width (int): Width of each glyph in the given font.
        height (int): Height of each glyph in the given font.

    Returns:
        Image: Preview image.
    """
    rows = math.ceil(len(text) / cols)
    image = Image.new('1', (cols * width * scale, rows * height * scale))
    draw = ImageDraw.Draw(image)
    draw.font = ImageFont.truetype(path, size * scale)
    for row in range(rows):
        chunk = text[row * cols:(row + 1) * cols]
        draw.text((0, row * height * scale), chunk, fill=1)
    return image


def _parse_arguments():
    """Parse command line arguments."""
    description = """
Generate resources from a given font file. Font path must be a path to
a TTF file. The directory name specified in the output directory path
must be in LABEL-WxH format where LABEL may be any arbitrary string,
and W and H must be the width and the height of each glyph in the
given font.
"""
    parser = argparse.ArgumentParser(description=description)
    parser.add_argument('--cp437', action='store_true',
                        help='print all CP437 characters and exit')
    parser.add_argument('-s', '--font-size', type=int, default=0,
                        help='font size used to render characters'
                             ' (default: font height specified in'
                             ' output directory name)')
    parser.add_argument('-v', '--version', action='version',
                        version='%(prog)s ' + __version__)
    parser.add_argument('font_path', nargs='?',
                        help='path to font file')
    parser.add_argument('output_dir', nargs='?',
                        help='output directory in path/to/label-WxH format')
    args = parser.parse_args()
    return args


def main():
    """Generate previews, graphs, and bitmap arrays."""
    args = _parse_arguments()
    chars = cp437()

    # Print CP437 characters if requested.
    if args.cp437:
        print(chars)
        sys.exit(0)

    # Determine font label and dimensions from output directory path.
    match = re.match(r'^(?:.*/)?(.+)-(\d+)x(\d+)/?$', args.output_dir)
    if match is None:
        print('Error: Directory name must be in LABEL-WxH format')
        sys.exit(1)
    label = match.group(1)
    width = int(match.group(2))
    height = int(match.group(3))

    # Create output directory.
    os.makedirs(args.output_dir, exist_ok=True)

    # Write previews images.
    font_size = args.font_size if args.font_size > 0 else height
    text = chars.replace('\0', ' ')  # Blank glyph for null character.

    image = make_preview(text, args.font_path, font_size, 32, width, height, 1)
    path = os.path.join(args.output_dir, f'preview-{width}x{height}.png')
    image.save(path)

    image = make_preview(text, args.font_path, font_size, 32, width, height, 2)
    path = os.path.join(args.output_dir,
                        f'preview-{width * 2}x{height * 2}.png')
    image.save(path)

    # Compute bitmaps.
    bitmaps = make_bitmaps(chars, args.font_path, font_size, width, height)
    bitmaps[0] = bitmaps[32]  # Blank glyph for null character.

    # Write text graphs.
    with open(os.path.join(args.output_dir, 'graph.txt'), 'w',
              encoding='utf-8') as stream:
        stream.write(make_graphs(chars, bitmaps, width, '.@', True))

    with open(os.path.join(args.output_dir, 'glyph.txt'), 'w',
              encoding='utf-8') as stream:
        stream.write(make_graphs(chars, bitmaps, width, ' *', False))

    # Write JavaScript bitmaps.
    with open(os.path.join(args.output_dir, 'fontlist.js'), 'w',
              encoding='utf-8') as stream:
        const_name = f'PC_FACE_{label}_{width}X{height}_FONT_LIST'
        const_name = const_name.upper().replace('-', '_')
        stream.write(make_font_list(chars, bitmaps, const_name))

    with open(os.path.join(args.output_dir, 'fontmap.js'), 'w',
              encoding='utf-8') as stream:
        const_name = f'PC_FACE_{label}_{width}x{height}_FONT_MAP'
        const_name = const_name.upper().replace('-', '_')
        stream.write(make_font_map(chars, bitmaps, const_name))


if __name__ == '__main__':
    main()
