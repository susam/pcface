from PIL import Image, ImageDraw, ImageFont


def create_preview(text, scale):
    width, height = 8 * scale, 16 * scale
    image = Image.new('1', (256 * scale, 128 * scale))
    draw = ImageDraw.Draw(image)
    draw.font = ImageFont.truetype('src/modern-dos/ModernDOS8x16.ttf', height)
    for line in range(0, 8):
        chunk = text[32 * line:32 * (line + 1)]
        draw.text((0, 16 * line * scale), chunk, fill=1)
    image.save(f'out/preview-{width}x{height}.png')


def main():
    with open('src/cp437.txt', encoding='utf-8') as stream:
        text = stream.read().replace('\0', ' ')  # Show null character as blank
    create_preview(text, 1)
    create_preview(text, 2)


if __name__ == '__main__':
    main()
