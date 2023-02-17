"""Print the glyph of a single character as a graph."""


import pcface

bitmap = pcface.make_bitmap('A', 'Px437_IBM_EGA_9x14.ttf', 16, 9, 14)
graph = pcface.make_graph(bitmap, 9, '.@', False)
print(graph)
