const PC_FACE_OLDSCHOOL_CGA_8X8_FONT_MAP = {
  ' ': [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], // [ ] (0)
  '☺': [0x7e, 0x81, 0xa5, 0x81, 0xbd, 0x99, 0x81, 0x7e], // [☺] (1)
  '☻': [0x7e, 0xff, 0xdb, 0xff, 0xc3, 0xe7, 0xff, 0x7e], // [☻] (2)
  '♥': [0x6c, 0xfe, 0xfe, 0xfe, 0x7c, 0x38, 0x10, 0x00], // [♥] (3)
  '♦': [0x10, 0x38, 0x7c, 0xfe, 0x7c, 0x38, 0x10, 0x00], // [♦] (4)
  '♣': [0x38, 0x7c, 0x38, 0xfe, 0xfe, 0xd6, 0x10, 0x38], // [♣] (5)
  '♠': [0x10, 0x10, 0x38, 0x7c, 0xfe, 0x7c, 0x10, 0x38], // [♠] (6)
  '•': [0x00, 0x00, 0x18, 0x3c, 0x3c, 0x18, 0x00, 0x00], // [•] (7)
  '◘': [0xff, 0xff, 0xe7, 0xc3, 0xc3, 0xe7, 0xff, 0xff], // [◘] (8)
  '○': [0x00, 0x3c, 0x66, 0x42, 0x42, 0x66, 0x3c, 0x00], // [○] (9)
  '◙': [0xff, 0xc3, 0x99, 0xbd, 0xbd, 0x99, 0xc3, 0xff], // [◙] (10)
  '♂': [0x0f, 0x07, 0x0f, 0x7d, 0xcc, 0xcc, 0xcc, 0x78], // [♂] (11)
  '♀': [0x3c, 0x66, 0x66, 0x66, 0x3c, 0x18, 0x7e, 0x18], // [♀] (12)
  '♪': [0x3f, 0x33, 0x3f, 0x30, 0x30, 0x70, 0xf0, 0xe0], // [♪] (13)
  '♫': [0x7f, 0x63, 0x7f, 0x63, 0x63, 0x67, 0xe6, 0xc0], // [♫] (14)
  '☼': [0x18, 0xdb, 0x3c, 0xe7, 0xe7, 0x3c, 0xdb, 0x18], // [☼] (15)
  '►': [0x80, 0xe0, 0xf8, 0xfe, 0xf8, 0xe0, 0x80, 0x00], // [►] (16)
  '◄': [0x02, 0x0e, 0x3e, 0xfe, 0x3e, 0x0e, 0x02, 0x00], // [◄] (17)
  '↕': [0x18, 0x3c, 0x7e, 0x18, 0x18, 0x7e, 0x3c, 0x18], // [↕] (18)
  '‼': [0x66, 0x66, 0x66, 0x66, 0x66, 0x00, 0x66, 0x00], // [‼] (19)
  '¶': [0x7f, 0xdb, 0xdb, 0x7b, 0x1b, 0x1b, 0x1b, 0x00], // [¶] (20)
  '§': [0x3e, 0x63, 0x38, 0x6c, 0x6c, 0x38, 0xcc, 0x78], // [§] (21)
  '▬': [0x00, 0x00, 0x00, 0x00, 0x7e, 0x7e, 0x7e, 0x00], // [▬] (22)
  '↨': [0x18, 0x3c, 0x7e, 0x18, 0x7e, 0x3c, 0x18, 0xff], // [↨] (23)
  '↑': [0x18, 0x3c, 0x7e, 0x18, 0x18, 0x18, 0x18, 0x00], // [↑] (24)
  '↓': [0x18, 0x18, 0x18, 0x18, 0x7e, 0x3c, 0x18, 0x00], // [↓] (25)
  '→': [0x00, 0x18, 0x0c, 0xfe, 0x0c, 0x18, 0x00, 0x00], // [→] (26)
  '←': [0x00, 0x30, 0x60, 0xfe, 0x60, 0x30, 0x00, 0x00], // [←] (27)
  '∟': [0x00, 0x00, 0xc0, 0xc0, 0xc0, 0xfe, 0x00, 0x00], // [∟] (28)
  '↔': [0x00, 0x24, 0x66, 0xff, 0x66, 0x24, 0x00, 0x00], // [↔] (29)
  '▲': [0x00, 0x18, 0x3c, 0x7e, 0xff, 0xff, 0x00, 0x00], // [▲] (30)
  '▼': [0x00, 0xff, 0xff, 0x7e, 0x3c, 0x18, 0x00, 0x00], // [▼] (31)
  ' ': [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], // [ ] (32)
  '!': [0x30, 0x78, 0x78, 0x30, 0x30, 0x00, 0x30, 0x00], // [!] (33)
  '"': [0x6c, 0x6c, 0x6c, 0x00, 0x00, 0x00, 0x00, 0x00], // ["] (34)
  '#': [0x6c, 0x6c, 0xfe, 0x6c, 0xfe, 0x6c, 0x6c, 0x00], // [#] (35)
  '$': [0x30, 0x7c, 0xc0, 0x78, 0x0c, 0xf8, 0x30, 0x00], // [$] (36)
  '%': [0x00, 0xc6, 0xcc, 0x18, 0x30, 0x66, 0xc6, 0x00], // [%] (37)
  '&': [0x38, 0x6c, 0x38, 0x76, 0xdc, 0xcc, 0x76, 0x00], // [&] (38)
  '\'': [0x60, 0x60, 0xc0, 0x00, 0x00, 0x00, 0x00, 0x00], // ['] (39)
  '(': [0x18, 0x30, 0x60, 0x60, 0x60, 0x30, 0x18, 0x00], // [(] (40)
  ')': [0x60, 0x30, 0x18, 0x18, 0x18, 0x30, 0x60, 0x00], // [)] (41)
  '*': [0x00, 0x66, 0x3c, 0xff, 0x3c, 0x66, 0x00, 0x00], // [*] (42)
  '+': [0x00, 0x30, 0x30, 0xfc, 0x30, 0x30, 0x00, 0x00], // [+] (43)
  ',': [0x00, 0x00, 0x00, 0x00, 0x00, 0x30, 0x30, 0x60], // [,] (44)
  '-': [0x00, 0x00, 0x00, 0xfc, 0x00, 0x00, 0x00, 0x00], // [-] (45)
  '.': [0x00, 0x00, 0x00, 0x00, 0x00, 0x30, 0x30, 0x00], // [.] (46)
  '/': [0x06, 0x0c, 0x18, 0x30, 0x60, 0xc0, 0x80, 0x00], // [/] (47)
  '0': [0x7c, 0xc6, 0xce, 0xde, 0xf6, 0xe6, 0x7c, 0x00], // [0] (48)
  '1': [0x30, 0x70, 0x30, 0x30, 0x30, 0x30, 0xfc, 0x00], // [1] (49)
  '2': [0x78, 0xcc, 0x0c, 0x38, 0x60, 0xcc, 0xfc, 0x00], // [2] (50)
  '3': [0x78, 0xcc, 0x0c, 0x38, 0x0c, 0xcc, 0x78, 0x00], // [3] (51)
  '4': [0x1c, 0x3c, 0x6c, 0xcc, 0xfe, 0x0c, 0x1e, 0x00], // [4] (52)
  '5': [0xfc, 0xc0, 0xf8, 0x0c, 0x0c, 0xcc, 0x78, 0x00], // [5] (53)
  '6': [0x38, 0x60, 0xc0, 0xf8, 0xcc, 0xcc, 0x78, 0x00], // [6] (54)
  '7': [0xfc, 0xcc, 0x0c, 0x18, 0x30, 0x30, 0x30, 0x00], // [7] (55)
  '8': [0x78, 0xcc, 0xcc, 0x78, 0xcc, 0xcc, 0x78, 0x00], // [8] (56)
  '9': [0x78, 0xcc, 0xcc, 0x7c, 0x0c, 0x18, 0x70, 0x00], // [9] (57)
  ':': [0x00, 0x30, 0x30, 0x00, 0x00, 0x30, 0x30, 0x00], // [:] (58)
  ';': [0x00, 0x30, 0x30, 0x00, 0x00, 0x30, 0x30, 0x60], // [;] (59)
  '<': [0x18, 0x30, 0x60, 0xc0, 0x60, 0x30, 0x18, 0x00], // [<] (60)
  '=': [0x00, 0x00, 0xfc, 0x00, 0x00, 0xfc, 0x00, 0x00], // [=] (61)
  '>': [0x60, 0x30, 0x18, 0x0c, 0x18, 0x30, 0x60, 0x00], // [>] (62)
  '?': [0x78, 0xcc, 0x0c, 0x18, 0x30, 0x00, 0x30, 0x00], // [?] (63)
  '@': [0x7c, 0xc6, 0xde, 0xde, 0xde, 0xc0, 0x78, 0x00], // [@] (64)
  'A': [0x30, 0x78, 0xcc, 0xcc, 0xfc, 0xcc, 0xcc, 0x00], // [A] (65)
  'B': [0xfc, 0x66, 0x66, 0x7c, 0x66, 0x66, 0xfc, 0x00], // [B] (66)
  'C': [0x3c, 0x66, 0xc0, 0xc0, 0xc0, 0x66, 0x3c, 0x00], // [C] (67)
  'D': [0xf8, 0x6c, 0x66, 0x66, 0x66, 0x6c, 0xf8, 0x00], // [D] (68)
  'E': [0xfe, 0x62, 0x68, 0x78, 0x68, 0x62, 0xfe, 0x00], // [E] (69)
  'F': [0xfe, 0x62, 0x68, 0x78, 0x68, 0x60, 0xf0, 0x00], // [F] (70)
  'G': [0x3c, 0x66, 0xc0, 0xc0, 0xce, 0x66, 0x3e, 0x00], // [G] (71)
  'H': [0xcc, 0xcc, 0xcc, 0xfc, 0xcc, 0xcc, 0xcc, 0x00], // [H] (72)
  'I': [0x78, 0x30, 0x30, 0x30, 0x30, 0x30, 0x78, 0x00], // [I] (73)
  'J': [0x1e, 0x0c, 0x0c, 0x0c, 0xcc, 0xcc, 0x78, 0x00], // [J] (74)
  'K': [0xe6, 0x66, 0x6c, 0x78, 0x6c, 0x66, 0xe6, 0x00], // [K] (75)
  'L': [0xf0, 0x60, 0x60, 0x60, 0x62, 0x66, 0xfe, 0x00], // [L] (76)
  'M': [0xc6, 0xee, 0xfe, 0xfe, 0xd6, 0xc6, 0xc6, 0x00], // [M] (77)
  'N': [0xc6, 0xe6, 0xf6, 0xde, 0xce, 0xc6, 0xc6, 0x00], // [N] (78)
  'O': [0x38, 0x6c, 0xc6, 0xc6, 0xc6, 0x6c, 0x38, 0x00], // [O] (79)
  'P': [0xfc, 0x66, 0x66, 0x7c, 0x60, 0x60, 0xf0, 0x00], // [P] (80)
  'Q': [0x78, 0xcc, 0xcc, 0xcc, 0xdc, 0x78, 0x1c, 0x00], // [Q] (81)
  'R': [0xfc, 0x66, 0x66, 0x7c, 0x6c, 0x66, 0xe6, 0x00], // [R] (82)
  'S': [0x78, 0xcc, 0x60, 0x30, 0x18, 0xcc, 0x78, 0x00], // [S] (83)
  'T': [0xfc, 0xb4, 0x30, 0x30, 0x30, 0x30, 0x78, 0x00], // [T] (84)
  'U': [0xcc, 0xcc, 0xcc, 0xcc, 0xcc, 0xcc, 0xfc, 0x00], // [U] (85)
  'V': [0xcc, 0xcc, 0xcc, 0xcc, 0xcc, 0x78, 0x30, 0x00], // [V] (86)
  'W': [0xc6, 0xc6, 0xc6, 0xd6, 0xfe, 0xee, 0xc6, 0x00], // [W] (87)
  'X': [0xc6, 0xc6, 0x6c, 0x38, 0x38, 0x6c, 0xc6, 0x00], // [X] (88)
  'Y': [0xcc, 0xcc, 0xcc, 0x78, 0x30, 0x30, 0x78, 0x00], // [Y] (89)
  'Z': [0xfe, 0xc6, 0x8c, 0x18, 0x32, 0x66, 0xfe, 0x00], // [Z] (90)
  '[': [0x78, 0x60, 0x60, 0x60, 0x60, 0x60, 0x78, 0x00], // [[] (91)
  '\\': [0xc0, 0x60, 0x30, 0x18, 0x0c, 0x06, 0x02, 0x00], // [\] (92)
  ']': [0x78, 0x18, 0x18, 0x18, 0x18, 0x18, 0x78, 0x00], // []] (93)
  '^': [0x10, 0x38, 0x6c, 0xc6, 0x00, 0x00, 0x00, 0x00], // [^] (94)
  '_': [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff], // [_] (95)
  '`': [0x30, 0x30, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00], // [`] (96)
  'a': [0x00, 0x00, 0x78, 0x0c, 0x7c, 0xcc, 0x76, 0x00], // [a] (97)
  'b': [0xe0, 0x60, 0x60, 0x7c, 0x66, 0x66, 0xdc, 0x00], // [b] (98)
  'c': [0x00, 0x00, 0x78, 0xcc, 0xc0, 0xcc, 0x78, 0x00], // [c] (99)
  'd': [0x1c, 0x0c, 0x0c, 0x7c, 0xcc, 0xcc, 0x76, 0x00], // [d] (100)
  'e': [0x00, 0x00, 0x78, 0xcc, 0xfc, 0xc0, 0x78, 0x00], // [e] (101)
  'f': [0x38, 0x6c, 0x60, 0xf0, 0x60, 0x60, 0xf0, 0x00], // [f] (102)
  'g': [0x00, 0x00, 0x76, 0xcc, 0xcc, 0x7c, 0x0c, 0xf8], // [g] (103)
  'h': [0xe0, 0x60, 0x6c, 0x76, 0x66, 0x66, 0xe6, 0x00], // [h] (104)
  'i': [0x30, 0x00, 0x70, 0x30, 0x30, 0x30, 0x78, 0x00], // [i] (105)
  'j': [0x0c, 0x00, 0x0c, 0x0c, 0x0c, 0xcc, 0xcc, 0x78], // [j] (106)
  'k': [0xe0, 0x60, 0x66, 0x6c, 0x78, 0x6c, 0xe6, 0x00], // [k] (107)
  'l': [0x70, 0x30, 0x30, 0x30, 0x30, 0x30, 0x78, 0x00], // [l] (108)
  'm': [0x00, 0x00, 0xcc, 0xfe, 0xfe, 0xd6, 0xc6, 0x00], // [m] (109)
  'n': [0x00, 0x00, 0xf8, 0xcc, 0xcc, 0xcc, 0xcc, 0x00], // [n] (110)
  'o': [0x00, 0x00, 0x78, 0xcc, 0xcc, 0xcc, 0x78, 0x00], // [o] (111)
  'p': [0x00, 0x00, 0xdc, 0x66, 0x66, 0x7c, 0x60, 0xf0], // [p] (112)
  'q': [0x00, 0x00, 0x76, 0xcc, 0xcc, 0x7c, 0x0c, 0x1e], // [q] (113)
  'r': [0x00, 0x00, 0xdc, 0x76, 0x66, 0x60, 0xf0, 0x00], // [r] (114)
  's': [0x00, 0x00, 0x7c, 0xc0, 0x78, 0x0c, 0xf8, 0x00], // [s] (115)
  't': [0x10, 0x30, 0x7c, 0x30, 0x30, 0x34, 0x18, 0x00], // [t] (116)
  'u': [0x00, 0x00, 0xcc, 0xcc, 0xcc, 0xcc, 0x76, 0x00], // [u] (117)
  'v': [0x00, 0x00, 0xcc, 0xcc, 0xcc, 0x78, 0x30, 0x00], // [v] (118)
  'w': [0x00, 0x00, 0xc6, 0xd6, 0xfe, 0xfe, 0x6c, 0x00], // [w] (119)
  'x': [0x00, 0x00, 0xc6, 0x6c, 0x38, 0x6c, 0xc6, 0x00], // [x] (120)
  'y': [0x00, 0x00, 0xcc, 0xcc, 0xcc, 0x7c, 0x0c, 0xf8], // [y] (121)
  'z': [0x00, 0x00, 0xfc, 0x98, 0x30, 0x64, 0xfc, 0x00], // [z] (122)
  '{': [0x1c, 0x30, 0x30, 0xe0, 0x30, 0x30, 0x1c, 0x00], // [{] (123)
  '|': [0x18, 0x18, 0x18, 0x00, 0x18, 0x18, 0x18, 0x00], // [|] (124)
  '}': [0xe0, 0x30, 0x30, 0x1c, 0x30, 0x30, 0xe0, 0x00], // [}] (125)
  '~': [0x76, 0xdc, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], // [~] (126)
  '⌂': [0x00, 0x10, 0x38, 0x6c, 0xc6, 0xc6, 0xfe, 0x00], // [⌂] (127)
  'Ç': [0x78, 0xcc, 0xc0, 0xcc, 0x78, 0x18, 0x0c, 0x78], // [Ç] (128)
  'ü': [0x00, 0xcc, 0x00, 0xcc, 0xcc, 0xcc, 0x7e, 0x00], // [ü] (129)
  'é': [0x1c, 0x00, 0x78, 0xcc, 0xfc, 0xc0, 0x78, 0x00], // [é] (130)
  'â': [0x7e, 0xc3, 0x3c, 0x06, 0x3e, 0x66, 0x3f, 0x00], // [â] (131)
  'ä': [0xcc, 0x00, 0x78, 0x0c, 0x7c, 0xcc, 0x7e, 0x00], // [ä] (132)
  'à': [0xe0, 0x00, 0x78, 0x0c, 0x7c, 0xcc, 0x7e, 0x00], // [à] (133)
  'å': [0x30, 0x30, 0x78, 0x0c, 0x7c, 0xcc, 0x7e, 0x00], // [å] (134)
  'ç': [0x00, 0x00, 0x78, 0xc0, 0xc0, 0x78, 0x0c, 0x38], // [ç] (135)
  'ê': [0x7e, 0xc3, 0x3c, 0x66, 0x7e, 0x60, 0x3c, 0x00], // [ê] (136)
  'ë': [0xcc, 0x00, 0x78, 0xcc, 0xfc, 0xc0, 0x78, 0x00], // [ë] (137)
  'è': [0xe0, 0x00, 0x78, 0xcc, 0xfc, 0xc0, 0x78, 0x00], // [è] (138)
  'ï': [0xcc, 0x00, 0x70, 0x30, 0x30, 0x30, 0x78, 0x00], // [ï] (139)
  'î': [0x7c, 0xc6, 0x38, 0x18, 0x18, 0x18, 0x3c, 0x00], // [î] (140)
  'ì': [0xe0, 0x00, 0x70, 0x30, 0x30, 0x30, 0x78, 0x00], // [ì] (141)
  'Ä': [0xc6, 0x38, 0x6c, 0xc6, 0xfe, 0xc6, 0xc6, 0x00], // [Ä] (142)
  'Å': [0x30, 0x30, 0x00, 0x78, 0xcc, 0xfc, 0xcc, 0x00], // [Å] (143)
  'É': [0x1c, 0x00, 0xfc, 0x60, 0x78, 0x60, 0xfc, 0x00], // [É] (144)
  'æ': [0x00, 0x00, 0x7f, 0x0c, 0x7f, 0xcc, 0x7f, 0x00], // [æ] (145)
  'Æ': [0x3e, 0x6c, 0xcc, 0xfe, 0xcc, 0xcc, 0xce, 0x00], // [Æ] (146)
  'ô': [0x78, 0xcc, 0x00, 0x78, 0xcc, 0xcc, 0x78, 0x00], // [ô] (147)
  'ö': [0x00, 0xcc, 0x00, 0x78, 0xcc, 0xcc, 0x78, 0x00], // [ö] (148)
  'ò': [0x00, 0xe0, 0x00, 0x78, 0xcc, 0xcc, 0x78, 0x00], // [ò] (149)
  'û': [0x78, 0xcc, 0x00, 0xcc, 0xcc, 0xcc, 0x7e, 0x00], // [û] (150)
  'ù': [0x00, 0xe0, 0x00, 0xcc, 0xcc, 0xcc, 0x7e, 0x00], // [ù] (151)
  'ÿ': [0x00, 0xcc, 0x00, 0xcc, 0xcc, 0x7c, 0x0c, 0xf8], // [ÿ] (152)
  'Ö': [0xc3, 0x18, 0x3c, 0x66, 0x66, 0x3c, 0x18, 0x00], // [Ö] (153)
  'Ü': [0xcc, 0x00, 0xcc, 0xcc, 0xcc, 0xcc, 0x78, 0x00], // [Ü] (154)
  '¢': [0x18, 0x18, 0x7e, 0xc0, 0xc0, 0x7e, 0x18, 0x18], // [¢] (155)
  '£': [0x38, 0x6c, 0x64, 0xf0, 0x60, 0xe6, 0xfc, 0x00], // [£] (156)
  '¥': [0xcc, 0xcc, 0x78, 0xfc, 0x30, 0xfc, 0x30, 0x30], // [¥] (157)
  '₧': [0xf8, 0xcc, 0xcc, 0xfa, 0xc6, 0xcf, 0xc6, 0xc7], // [₧] (158)
  'ƒ': [0x0e, 0x1b, 0x18, 0x3c, 0x18, 0x18, 0xd8, 0x70], // [ƒ] (159)
  'á': [0x1c, 0x00, 0x78, 0x0c, 0x7c, 0xcc, 0x7e, 0x00], // [á] (160)
  'í': [0x38, 0x00, 0x70, 0x30, 0x30, 0x30, 0x78, 0x00], // [í] (161)
  'ó': [0x00, 0x1c, 0x00, 0x78, 0xcc, 0xcc, 0x78, 0x00], // [ó] (162)
  'ú': [0x00, 0x1c, 0x00, 0xcc, 0xcc, 0xcc, 0x7e, 0x00], // [ú] (163)
  'ñ': [0x00, 0xf8, 0x00, 0xf8, 0xcc, 0xcc, 0xcc, 0x00], // [ñ] (164)
  'Ñ': [0xfc, 0x00, 0xcc, 0xec, 0xfc, 0xdc, 0xcc, 0x00], // [Ñ] (165)
  'ª': [0x3c, 0x6c, 0x6c, 0x3e, 0x00, 0x7e, 0x00, 0x00], // [ª] (166)
  'º': [0x38, 0x6c, 0x6c, 0x38, 0x00, 0x7c, 0x00, 0x00], // [º] (167)
  '¿': [0x30, 0x00, 0x30, 0x60, 0xc0, 0xcc, 0x78, 0x00], // [¿] (168)
  '⌐': [0x00, 0x00, 0x00, 0xfc, 0xc0, 0xc0, 0x00, 0x00], // [⌐] (169)
  '¬': [0x00, 0x00, 0x00, 0xfc, 0x0c, 0x0c, 0x00, 0x00], // [¬] (170)
  '½': [0xc3, 0xc6, 0xcc, 0xde, 0x33, 0x66, 0xcc, 0x0f], // [½] (171)
  '¼': [0xc3, 0xc6, 0xcc, 0xdb, 0x37, 0x6f, 0xcf, 0x03], // [¼] (172)
  '¡': [0x18, 0x18, 0x00, 0x18, 0x18, 0x18, 0x18, 0x00], // [¡] (173)
  '«': [0x00, 0x33, 0x66, 0xcc, 0x66, 0x33, 0x00, 0x00], // [«] (174)
  '»': [0x00, 0xcc, 0x66, 0x33, 0x66, 0xcc, 0x00, 0x00], // [»] (175)
  '░': [0x22, 0x88, 0x22, 0x88, 0x22, 0x88, 0x22, 0x88], // [░] (176)
  '▒': [0x55, 0xaa, 0x55, 0xaa, 0x55, 0xaa, 0x55, 0xaa], // [▒] (177)
  '▓': [0xdb, 0x77, 0xdb, 0xee, 0xdb, 0x77, 0xdb, 0xee], // [▓] (178)
  '│': [0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18], // [│] (179)
  '┤': [0x18, 0x18, 0x18, 0x18, 0xf8, 0x18, 0x18, 0x18], // [┤] (180)
  '╡': [0x18, 0x18, 0xf8, 0x18, 0xf8, 0x18, 0x18, 0x18], // [╡] (181)
  '╢': [0x36, 0x36, 0x36, 0x36, 0xf6, 0x36, 0x36, 0x36], // [╢] (182)
  '╖': [0x00, 0x00, 0x00, 0x00, 0xfe, 0x36, 0x36, 0x36], // [╖] (183)
  '╕': [0x00, 0x00, 0xf8, 0x18, 0xf8, 0x18, 0x18, 0x18], // [╕] (184)
  '╣': [0x36, 0x36, 0xf6, 0x06, 0xf6, 0x36, 0x36, 0x36], // [╣] (185)
  '║': [0x36, 0x36, 0x36, 0x36, 0x36, 0x36, 0x36, 0x36], // [║] (186)
  '╗': [0x00, 0x00, 0xfe, 0x06, 0xf6, 0x36, 0x36, 0x36], // [╗] (187)
  '╝': [0x36, 0x36, 0xf6, 0x06, 0xfe, 0x00, 0x00, 0x00], // [╝] (188)
  '╜': [0x36, 0x36, 0x36, 0x36, 0xfe, 0x00, 0x00, 0x00], // [╜] (189)
  '╛': [0x18, 0x18, 0xf8, 0x18, 0xf8, 0x00, 0x00, 0x00], // [╛] (190)
  '┐': [0x00, 0x00, 0x00, 0x00, 0xf8, 0x18, 0x18, 0x18], // [┐] (191)
  '└': [0x18, 0x18, 0x18, 0x18, 0x1f, 0x00, 0x00, 0x00], // [└] (192)
  '┴': [0x18, 0x18, 0x18, 0x18, 0xff, 0x00, 0x00, 0x00], // [┴] (193)
  '┬': [0x00, 0x00, 0x00, 0x00, 0xff, 0x18, 0x18, 0x18], // [┬] (194)
  '├': [0x18, 0x18, 0x18, 0x18, 0x1f, 0x18, 0x18, 0x18], // [├] (195)
  '─': [0x00, 0x00, 0x00, 0x00, 0xff, 0x00, 0x00, 0x00], // [─] (196)
  '┼': [0x18, 0x18, 0x18, 0x18, 0xff, 0x18, 0x18, 0x18], // [┼] (197)
  '╞': [0x18, 0x18, 0x1f, 0x18, 0x1f, 0x18, 0x18, 0x18], // [╞] (198)
  '╟': [0x36, 0x36, 0x36, 0x36, 0x37, 0x36, 0x36, 0x36], // [╟] (199)
  '╚': [0x36, 0x36, 0x37, 0x30, 0x3f, 0x00, 0x00, 0x00], // [╚] (200)
  '╔': [0x00, 0x00, 0x3f, 0x30, 0x37, 0x36, 0x36, 0x36], // [╔] (201)
  '╩': [0x36, 0x36, 0xf7, 0x00, 0xff, 0x00, 0x00, 0x00], // [╩] (202)
  '╦': [0x00, 0x00, 0xff, 0x00, 0xf7, 0x36, 0x36, 0x36], // [╦] (203)
  '╠': [0x36, 0x36, 0x37, 0x30, 0x37, 0x36, 0x36, 0x36], // [╠] (204)
  '═': [0x00, 0x00, 0xff, 0x00, 0xff, 0x00, 0x00, 0x00], // [═] (205)
  '╬': [0x36, 0x36, 0xf7, 0x00, 0xf7, 0x36, 0x36, 0x36], // [╬] (206)
  '╧': [0x18, 0x18, 0xff, 0x00, 0xff, 0x00, 0x00, 0x00], // [╧] (207)
  '╨': [0x36, 0x36, 0x36, 0x36, 0xff, 0x00, 0x00, 0x00], // [╨] (208)
  '╤': [0x00, 0x00, 0xff, 0x00, 0xff, 0x18, 0x18, 0x18], // [╤] (209)
  '╥': [0x00, 0x00, 0x00, 0x00, 0xff, 0x36, 0x36, 0x36], // [╥] (210)
  '╙': [0x36, 0x36, 0x36, 0x36, 0x3f, 0x00, 0x00, 0x00], // [╙] (211)
  '╘': [0x18, 0x18, 0x1f, 0x18, 0x1f, 0x00, 0x00, 0x00], // [╘] (212)
  '╒': [0x00, 0x00, 0x1f, 0x18, 0x1f, 0x18, 0x18, 0x18], // [╒] (213)
  '╓': [0x00, 0x00, 0x00, 0x00, 0x3f, 0x36, 0x36, 0x36], // [╓] (214)
  '╫': [0x36, 0x36, 0x36, 0x36, 0xff, 0x36, 0x36, 0x36], // [╫] (215)
  '╪': [0x18, 0x18, 0xff, 0x18, 0xff, 0x18, 0x18, 0x18], // [╪] (216)
  '┘': [0x18, 0x18, 0x18, 0x18, 0xf8, 0x00, 0x00, 0x00], // [┘] (217)
  '┌': [0x00, 0x00, 0x00, 0x00, 0x1f, 0x18, 0x18, 0x18], // [┌] (218)
  '█': [0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff], // [█] (219)
  '▄': [0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff], // [▄] (220)
  '▌': [0xf0, 0xf0, 0xf0, 0xf0, 0xf0, 0xf0, 0xf0, 0xf0], // [▌] (221)
  '▐': [0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f], // [▐] (222)
  '▀': [0xff, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x00], // [▀] (223)
  'α': [0x00, 0x00, 0x76, 0xdc, 0xc8, 0xdc, 0x76, 0x00], // [α] (224)
  'ß': [0x00, 0x78, 0xcc, 0xf8, 0xcc, 0xf8, 0xc0, 0xc0], // [ß] (225)
  'Γ': [0x00, 0xfc, 0xcc, 0xc0, 0xc0, 0xc0, 0xc0, 0x00], // [Γ] (226)
  'π': [0x00, 0xfe, 0x6c, 0x6c, 0x6c, 0x6c, 0x6c, 0x00], // [π] (227)
  'Σ': [0xfc, 0xcc, 0x60, 0x30, 0x60, 0xcc, 0xfc, 0x00], // [Σ] (228)
  'σ': [0x00, 0x00, 0x7e, 0xd8, 0xd8, 0xd8, 0x70, 0x00], // [σ] (229)
  'µ': [0x00, 0x66, 0x66, 0x66, 0x66, 0x7c, 0x60, 0xc0], // [µ] (230)
  'τ': [0x00, 0x76, 0xdc, 0x18, 0x18, 0x18, 0x18, 0x00], // [τ] (231)
  'Φ': [0xfc, 0x30, 0x78, 0xcc, 0xcc, 0x78, 0x30, 0xfc], // [Φ] (232)
  'Θ': [0x38, 0x6c, 0xc6, 0xfe, 0xc6, 0x6c, 0x38, 0x00], // [Θ] (233)
  'Ω': [0x38, 0x6c, 0xc6, 0xc6, 0x6c, 0x6c, 0xee, 0x00], // [Ω] (234)
  'δ': [0x1c, 0x30, 0x18, 0x7c, 0xcc, 0xcc, 0x78, 0x00], // [δ] (235)
  '∞': [0x00, 0x00, 0x7e, 0xdb, 0xdb, 0x7e, 0x00, 0x00], // [∞] (236)
  'φ': [0x06, 0x0c, 0x7e, 0xdb, 0xdb, 0x7e, 0x60, 0xc0], // [φ] (237)
  'ε': [0x38, 0x60, 0xc0, 0xf8, 0xc0, 0x60, 0x38, 0x00], // [ε] (238)
  '∩': [0x78, 0xcc, 0xcc, 0xcc, 0xcc, 0xcc, 0xcc, 0x00], // [∩] (239)
  '≡': [0x00, 0xfc, 0x00, 0xfc, 0x00, 0xfc, 0x00, 0x00], // [≡] (240)
  '±': [0x30, 0x30, 0xfc, 0x30, 0x30, 0x00, 0xfc, 0x00], // [±] (241)
  '≥': [0x60, 0x30, 0x18, 0x30, 0x60, 0x00, 0xfc, 0x00], // [≥] (242)
  '≤': [0x18, 0x30, 0x60, 0x30, 0x18, 0x00, 0xfc, 0x00], // [≤] (243)
  '⌠': [0x0e, 0x1b, 0x1b, 0x18, 0x18, 0x18, 0x18, 0x18], // [⌠] (244)
  '⌡': [0x18, 0x18, 0x18, 0x18, 0x18, 0xd8, 0xd8, 0x70], // [⌡] (245)
  '÷': [0x30, 0x30, 0x00, 0xfc, 0x00, 0x30, 0x30, 0x00], // [÷] (246)
  '≈': [0x00, 0x76, 0xdc, 0x00, 0x76, 0xdc, 0x00, 0x00], // [≈] (247)
  '°': [0x38, 0x6c, 0x6c, 0x38, 0x00, 0x00, 0x00, 0x00], // [°] (248)
  '∙': [0x00, 0x00, 0x00, 0x18, 0x18, 0x00, 0x00, 0x00], // [∙] (249)
  '·': [0x00, 0x00, 0x00, 0x00, 0x18, 0x00, 0x00, 0x00], // [·] (250)
  '√': [0x0f, 0x0c, 0x0c, 0x0c, 0xec, 0x6c, 0x3c, 0x1c], // [√] (251)
  'ⁿ': [0x78, 0x6c, 0x6c, 0x6c, 0x6c, 0x00, 0x00, 0x00], // [ⁿ] (252)
  '²': [0x70, 0x18, 0x30, 0x60, 0x78, 0x00, 0x00, 0x00], // [²] (253)
  '■': [0x00, 0x00, 0x3c, 0x3c, 0x3c, 0x3c, 0x00, 0x00], // [■] (254)
  ' ': [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], // [ ] (255)
}
