# Development Targets
# -------------------

pcface:
	venv/bin/python3 src/pcface.py src/font/moderndos/ModernDOS8x16.ttf out/moderndos-8x16/

deps:
	python3 -m venv venv/
	venv/bin/pip3 install -r src/requirements.txt -r src/dev-requirements.txt
	npm install

rmdeps:
	rm -rf node_modules/ venv/

cp437:
	python3 src/pcface.py --cp437 > out.txt
	diff out.txt src/cp437.txt
	rm out.txt

lint:
	! venv/bin/isort --quiet --diff . | grep .
	venv/bin/pycodestyle src/
	venv/bin/pydocstyle src/
	venv/bin/pyflakes src/
	venv/bin/pylint src/
	npm run lint

test:
	venv/bin/python3 -m unittest discover -v -t src -s src.test
	npm test

checks: cp437 lint test
	rm -f pcface*.tgz
	npm pack
	tar -tvf pcface*.tgz

doc: pydoc jsdoc

rmdoc:
	rm -rf doc

pydoc: rmdoc
	venv/bin/sphinx-quickstart -q -p "PC Face" -a "Susam Pal" doc/py
	venv/bin/sphinx-apidoc -o doc/py/api src
	echo "extensions.append('sphinx.ext.napoleon')" >> doc/py/conf.py
	echo "extensions.append('sphinx.ext.intersphinx')" >> doc/py/conf.py
	echo >> doc/py/index.rst
	echo 'API' >> doc/py/index.rst
	echo '---' >> doc/py/index.rst
	echo '.. toctree::' >> doc/py/index.rst
	echo '   api/modules' >> doc/py/index.rst
	PYTHONPATH=src venv/bin/sphinx-build -b html doc/py doc/py/html
	echo 'Documentation available at doc/py/html/index.html'

jsdoc: rmdoc
	npm run doc

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



# Font Downloads
# --------------

download-fonts: download-modern-dos

download-modern-dos:
	rm -rf moderndos.zip src/font/moderndos/
	curl -o moderndos.zip 'https://dl.dafont.com/dl/?f=modern_dos'
	mkdir -p src/font/moderndos/
	cd src/font/moderndos/ && unzip ../../../moderndos.zip
	rm moderndos.zip

FORCE:
