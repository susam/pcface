# Development Targets
# -------------------

venv:
	python3 -m venv venv/
	venv/bin/pip3 install pillow
	venv/bin/pip3 install pylint pycodestyle pydocstyle pyflakes isort
	venv/bin/pip3 install build twine

pcface:
	venv/bin/python3 src/pcface.py src/modern-dos/ModernDOS8x16.ttf

lint:
	npm run lint
	! venv/bin/isort --quiet --diff . | grep .
	venv/bin/pycodestyle src/
	venv/bin/pyflakes src/
	venv/bin/pylint -d C0114,C0116 src/

checks: lint
	rm -f pcface*.tgz
	npm pack
	tar -tvf pcface*.tgz

clean:
	rm -rf *.pyc __pycache__
	rm -rf .coverage htmlcov
	rm -rf dist/ src/pcface.egg-info/

preview-all:
	venv/bin/python3 src/preview.py
	xdg-open out/preview-8x16.png || open out/preview-8x16.png
	xdg-open out/preview-16x32.png || open out/preview-16x32.png

preview-char:
	venv/bin/python3 src/preview-char.py
	xdg-open out/preview-B.png || open out/preview-B.png


# Distribution Targets
# --------------------

dist: clean
	venv/bin/python3 -m build
	venv/bin/twine check dist/*
	unzip -c dist/*.whl '*/METADATA'
	unzip -t dist/*.whl

test-upload:
	venv/bin/twine upload --repository testpypi dist/*

upload:
	venv/bin/twine upload dist/*



# Project Setup
# -------------

download-font:
	mkdir -p src/modern-dos/
	cd src/modern-dos/ && curl -OJ 'https://dl.dafont.com/dl/?f=modern_dos'
	cd src/modern-dos/ && unzip modern_dos.zip
	rm src/modern-dos/modern_dos.zip
