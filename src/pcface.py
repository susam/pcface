import sys

from PIL import Image, ImageDraw, ImageFont


def make_bitmap(char, font_path):
    image = Image.new('1', (8, 16))
    draw = ImageDraw.Draw(image)
    draw.font = ImageFont.truetype(font_path, 16)
    draw.text((0, 0), char, fill=1)
    bitmap = []
    for row in range(16):
        row_bitmap = 0
        for col in range(8):
            pixel = image.getpixel((col, row))
            row_bitmap = (row_bitmap << 1) | pixel
        bitmap.append(row_bitmap)
    return bitmap


def make_bitmaps(chars, font_path):
    return [make_bitmap(c, font_path) for c in chars]


def make_graphs(chars, bitmaps):
    output = ''
    for index, (char, bitmap) in enumerate(zip(chars, bitmaps)):
        output += f"----- [{char}] ({index}) -----\n"
        for row in bitmap:
            output += f'{row:08b}\n'.translate(str.maketrans('01', ' *'))
    output += 'END\n'
    return output


def make_verbose_graphs(chars, bitmaps):
    output = ''
    for index, (char, bitmap) in enumerate(zip(chars, bitmaps)):
        output += f"----- [{char}] ({index}) -----\n"
        for row in bitmap:
            output += f'{row:#04x} '
            output += f'{row:08b}\n'.translate(str.maketrans('01', '.@'))
    output += '----- END -----\n'
    return output


def make_vector(bitmap):
    return ', '.join([f'{n:#04x}' for n in bitmap])


def make_font_list(chars, bitmaps):
    output = 'const PC_FACE_LIST = [\n'
    for index, (char, bitmap) in enumerate(zip(chars, bitmaps)):
        output += f"  [{make_vector(bitmap)}], // [{char}] ({index})\n"
    output += ']\n'
    return output


def make_font_map(chars, bitmaps):
    output = 'const PC_FACE_MAP = {\n'
    for index, (char, bitmap) in enumerate(zip(chars, bitmaps)):
        output += "  '"
        output += '\\' + char if char in ("'", '\\') else char
        output += f"': [{make_vector(bitmap)}], // [{char}] ({index})\n"
    output += '}\n'
    return output


def main():
    with open('src/cp437.txt', encoding='utf-8') as stream:
        chars = stream.read()[:256]
    bitmaps = make_bitmaps(chars, sys.argv[1])
    bitmaps[0] = bitmaps[32]  # Use a blank bitmap for null character.
    with open('out/glyph.txt', 'w', encoding='utf-8') as stream:
        stream.write(make_graphs(chars, bitmaps))
    with open('out/graph.txt', 'w', encoding='utf-8') as stream:
        stream.write(make_verbose_graphs(chars, bitmaps))
    with open('out/fontlist.js', 'w', encoding='utf-8') as stream:
        stream.write(make_font_list(chars, bitmaps))
    with open('out/fontmap.js', 'w', encoding='utf-8') as stream:
        stream.write(make_font_map(chars, bitmaps))


if __name__ == '__main__':
    main()
