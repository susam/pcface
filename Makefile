# Development Targets
# -------------------

pcface:
	venv/bin/python3 src/pcface.py src/font/moderndos/ModernDOS8x16.ttf out/moderndos-8x16/
	venv/bin/python3 src/pcface.py src/font/oldschool/Px437_IBM_BIOS.ttf out/oldschool-bios-8x8/
	venv/bin/python3 src/pcface.py src/font/oldschool/Px437_IBM_CGA.ttf out/oldschool-cga-8x8/
	venv/bin/python3 src/pcface.py -s 16 src/font/oldschool/Px437_IBM_MDA.ttf out/oldschool-mda-9x14/
	venv/bin/python3 src/pcface.py -s 16 src/font/oldschool/Px437_IBM_EGA_8x14.ttf out/oldschool-ega-8x14/
	venv/bin/python3 src/pcface.py src/font/oldschool/Px437_IBM_VGA_9x16.ttf out/oldschool-vga-9x16/
	venv/bin/python3 src/pcface.py -s 16 src/font/oldschool/Px437_IBM_VGA_9x14.ttf out/oldschool-vga-9x14/
	venv/bin/python3 src/pcface.py src/font/oldschool/Px437_IBM_VGA_8x16.ttf out/oldschool-vga-8x16/
	venv/bin/python3 src/pcface.py src/font/oldschool/Px437_IBM_PGC.ttf out/oldschool-pgc-8x16/
	venv/bin/python3 src/pcface.py src/font/oldschool/Px437_IBM_Model30r0.ttf out/oldschool-model30-8x16/
	venv/bin/python3 src/pcface.py src/font/oldschool/Px437_Verite_8x16.ttf out/oldschool-verite-8x16/

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
	venv/bin/sphinx-quickstart -q -p "PC Face" -a "Susam Pal" doc/sphinx
	venv/bin/sphinx-apidoc -o doc/sphinx/api src src/test
	echo "extensions.append('sphinx.ext.napoleon')" >> doc/sphinx/conf.py
	echo "extensions.append('sphinx.ext.intersphinx')" >> doc/sphinx/conf.py
	echo >> doc/sphinx/index.rst
	echo 'API' >> doc/sphinx/index.rst
	echo '---' >> doc/sphinx/index.rst
	echo '.. toctree::' >> doc/sphinx/index.rst
	echo '   api/modules' >> doc/sphinx/index.rst
	PYTHONPATH=src venv/bin/sphinx-build -b html doc/sphinx/ doc/py/
	rm -rf doc/sphinx
	echo 'Documentation available at doc/py/index.html'

jsdoc: rmdoc
	npm run doc
	echo 'Documentation available at doc/js/index.html'

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


# Publish demos and documentation
stage: doc
	rm -rf _site/ && mkdir -p _site/demo/
	touch _site/.nojekyll
	cp -R out/ _site/out/
	cp -R doc/ _site/doc/
	cp src/pcface.js _site/demo/pcface.js
	cp src/demo.html _site/demo/index.html
	cp src/minidemo.html _site/demo/minidemo.html

site: stage
	sbcl --eval '(defvar *index* "index.html")' --load src/index.lisp --quit

livesite: stage
	sbcl --load src/index.lisp --quit

live: livesite
	rm -rf /tmp/live
	mv _site /tmp/live
	REPO_DIR="$$PWD"; cd /tmp/live && make -f "$$REPO_DIR/Makefile" pushlive

pushlive:
	pwd | grep live$$ || false
	git init
	git config user.name live
	git config user.email live@localhost
	git remote add origin https://github.com/susam/pcface.git
	git checkout -b live
	git add .
	git commit -m "Publish live ($$(date -u +"%Y-%m-%d %H:%M:%S"))"
	git log
	git push -f origin live


# Distribution Targets
# --------------------

pkgreadme:
	sed -n '1,/^.CP437IMG./p' README.md > src/pypi.md
	echo >> src/pypi.md
	echo 'See <https://github.com/susam/pcface> for more details.' >> src/pypi.md
	cat src/pypi.md

dist: clean pkgreadme
	venv/bin/python3 -m build
	venv/bin/twine check dist/*
	unzip -c dist/*.whl '*/METADATA'
	unzip -t dist/*.whl

test-upload:
	venv/bin/twine upload --repository testpypi dist/*

upload:
	venv/bin/twine upload dist/*

user-venv: FORCE
	rm -rf user-venv/
	python3 -m venv user-venv/

verify-upload:
	$(MAKE) verify-sdist
	$(MAKE) verify-bdist

verify-test-upload:
	$(MAKE) verify-test-sdist
	$(MAKE) verify-test-bdist

verify-sdist:
	user-venv/bin/pip3 install --no-binary :all: mintotp

verify-bdist:
	user-venv/bin/pip3 install mintotp

verify-test-sdist: user-venv
	user-venv/bin/pip3 install \
	  --index-url https://test.pypi.org/simple/ --no-binary :all: mintotp

verify-test-bdist: user-venv
	user-venv/bin/pip3 install \
	  --index-url https://test.pypi.org/simple/ mintotp


# Font Downloads
# --------------

download-fonts: download-modern-dos download-oldschool
	du -sh src/font/*
	du -sh src/font/

download-modern-dos:
	rm -rf moderndos.zip src/font/moderndos/
	curl -o moderndos.zip 'https://dl.dafont.com/dl/?f=modern_dos'
	mkdir -p src/font/moderndos/
	cd src/font/moderndos/ && unzip ../../../moderndos.zip
	rm moderndos.zip

download-oldschool:
	rm -rf oldschool.zip tmp/ src/font/oldschool/
	curl -o oldschool.zip \
		'https://int10h.org/oldschool-pc-fonts/download/oldschool_pc_font_pack_v2.2_FULL.zip'
	mkdir -p tmp
	cd tmp/ && unzip ../oldschool.zip
	mv "tmp/ttf - Px (pixel outline)/" tmp/ttf/
	mkdir -p src/font/oldschool/
	cp tmp/*TXT src/font/oldschool/
	cp tmp/ttf/Px437_IBM_BIOS.ttf src/font/oldschool/
	cp tmp/ttf/Px437_IBM_CGA.ttf src/font/oldschool/
	cp tmp/ttf/Px437_IBM_MDA.ttf src/font/oldschool/
	cp tmp/ttf/Px437_IBM_EGA_8x14.ttf src/font/oldschool/
	cp tmp/ttf/Px437_IBM_VGA_9x16.ttf src/font/oldschool/
	cp tmp/ttf/Px437_IBM_VGA_9x14.ttf src/font/oldschool/
	cp tmp/ttf/Px437_IBM_VGA_8x16.ttf src/font/oldschool/
	cp tmp/ttf/Px437_IBM_PGC.ttf src/font/oldschool/
	cp tmp/ttf/Px437_IBM_Model30r0.ttf src/font/oldschool/
	cp tmp/ttf/Px437_Verite_8x16.ttf src/font/oldschool/
	rm -rf oldschool.zip tmp/

FORCE:
