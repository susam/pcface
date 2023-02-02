from PIL import Image, ImageFont, ImageDraw


def create_preview(char):
    image = Image.new('1', (100, 100))
    draw = ImageDraw.Draw(image)
    draw.font = ImageFont.truetype('src/modern-dos/ModernDOS8x16.ttf', 16)
    draw.text((0, 0), char, fill=1)
    image.save(f'out/preview-{char}.png')


if __name__ == '__main__':
    create_preview('B')
