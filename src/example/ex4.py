"""Create a JavaScript consts containing bitmap arrays."""


import pcface

CHARS = "ABCD"
BITMAPS = pcface.make_bitmaps(CHARS, 'Px437_IBM_EGA_9x14.ttf', 16, 9, 14)
print(pcface.make_font_list(CHARS, BITMAPS, 'FONT_LIST'))
print(pcface.make_font_map(CHARS, BITMAPS, 'FONT_MAP'))
