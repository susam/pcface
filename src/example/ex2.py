"""Print glyph of multiple characters as graphs."""


import pcface

bitmaps = pcface.make_bitmaps('ABCD', 'Px437_IBM_EGA_9x14.ttf', 16, 9, 14)

print(pcface.make_graph(bitmaps[0], 9, '.@', False))
print(pcface.make_graph(bitmaps[1], 9, '.@', False))
print(pcface.make_graph(bitmaps[2], 9, '.@', False))
print(pcface.make_graph(bitmaps[3], 9, '.@', False))
