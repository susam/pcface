from PIL import Image, ImageDraw, ImageFont


def create_preview(chars, scale):
    width, height = 8 * scale, 16 * scale
    image = Image.new('1', (256 * scale, 128 * scale))
    draw = ImageDraw.Draw(image)
    draw.font = ImageFont.truetype('src/modern-dos/ModernDOS8x16.ttf', height)
    for line in range(0, 8):
        text = chars[32 * line:32 * (line + 1)]
        draw.text((0, 16 * line * scale), text, fill=1)
    image.save(f'meta/preview-{width}x{height}.png')


if __name__ == '__main__':
    chars = open('src/cp437.txt').read()
    chars = chars.replace('\0', ' ')  # Render null character as blank
    create_preview(chars, 1)
    create_preview(chars, 2)
