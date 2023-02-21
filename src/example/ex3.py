"""Look up bitmap of any CP437 character by index and print graph."""


import pcface

ALL_CHARS = pcface.cp437()
BITMAPS = pcface.make_bitmaps(ALL_CHARS, 'Px437_IBM_EGA_9x14.ttf', 16, 9, 14)

print(pcface.make_graph(BITMAPS[1], 9, '.@', False))
print(pcface.make_graph(BITMAPS[2], 9, '.@', False))
print(pcface.make_graph(BITMAPS[65], 9, '.@', False))
print(pcface.make_graph(BITMAPS[66], 9, '.@', False))
