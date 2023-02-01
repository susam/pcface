import sys
from PIL import Image, ImageDraw, ImageFont


def make_bitmap(char, font_path):
    image = Image.new('1', (8, 16))
    draw = ImageDraw.Draw(image)
    draw.font = ImageFont.truetype(font_path, 16)
    draw.text((0, 0), char, fill=1)
    bitmap = []
    for y in range(16):
        row_bitmap = 0
        for x in range(8):
            pixel = image.getpixel((x, y))
            row_bitmap = (row_bitmap << 1) | pixel
        bitmap.append(row_bitmap)
    return bitmap

    
def make_bitmaps(chars, font_path):
    return [make_bitmap(c, font_path) for c in chars]


def make_graphs(chars, bitmaps):
    s = ''
    for index, (char, bitmap) in enumerate(zip(chars, bitmaps)):
        s += f"----- [{char}] ({index}) -----\n"
        for row in bitmap:
            s += f'{row:08b}\n'.translate(str.maketrans('01', ' *'))
    s += 'END\n'
    return s


def make_verbose_graphs(chars, bitmaps):
    s = ''
    for index, (char, bitmap) in enumerate(zip(chars, bitmaps)):
        s += f"----- [{char}] ({index}) -----\n"
        for row in bitmap:
            s += f'{row:#04x} '
            s += f'{row:08b}\n'.translate(str.maketrans('01', '.@'))
    s += '----- END -----\n'
    return s


def make_vector(bitmap):
    return ', '.join([f'{n:#04x}' for n in bitmap])


def make_font_list(chars, bitmaps):
    s = 'const PC_FACE_LIST = [\n'
    for index, (char, bitmap) in enumerate(zip(chars, bitmaps)):
        s += f"  [{make_vector(bitmap)}], // [{char}] ({index})\n"
    s += ']\n'
    return s
    
    
def make_font_map(chars, bitmaps):
    s = 'const PC_FACE_MAP = {\n'
    for index, (char, bitmap) in enumerate(zip(chars, bitmaps)):
        c = '\\' + char if char in ("'", '\\') else char
        s += f"  '{c}': [{make_vector(bitmap)}], // [{char}] ({index})\n"
    s += '}\n'
    return s


def main():
    chars = open('src/cp437.txt').read()[:256]
    bitmaps = make_bitmaps(chars, sys.argv[1])
    bitmaps[0] = bitmaps[32]  # Use a blank bitmap for null character.
    open('glyph.txt', 'w').write(make_graphs(chars, bitmaps))
    open('graph.txt', 'w').write(make_verbose_graphs(chars, bitmaps))
    open('fontlist.js', 'w').write(make_font_list(chars, bitmaps))
    open('fontmap.js', 'w').write(make_font_map(chars, bitmaps))


if __name__ == '__main__':
    main()
