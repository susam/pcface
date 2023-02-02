bitmap:
	venv/bin/python3 src/bitmap.py src/modern-dos/ModernDOS8x16.ttf

checks:
	npm run lint
	rm -f pcface*.tgz
	npm pack
	tar -tvf pcface*.tgz

preview-all:
	venv/bin/python3 src/preview.py
	xdg-open out/preview-8x16.png || open out/preview-8x16.png
	xdg-open out/preview-16x32.png || open out/preview-16x32.png

preview-char:
	venv/bin/python3 src/preview-char.py
	xdg-open out/preview-B.png || open out/preview-B.png

lines:
	python3 lines.py

venv:
	python3 -m venv venv/
	venv/bin/pip3 install pillow

glyphs:
	venv/bin/python3 glyphs.py

download-font:
	mkdir -p src/modern-dos/
	cd src/modern-dos/ && curl -OJ 'https://dl.dafont.com/dl/?f=modern_dos'
	cd src/modern-dos/ && unzip modern_dos.zip
	rm src/modern-dos/modern_dos.zip

