Developer Notes
===============


Setup
-----

 1. To set up development environment, enter:

    ```sh
    make deps
    ```

 2. Then enter:

    ```sh
    make pcface
    ```


Release Checklist
-----------------

Perform the following tasks for every release:

  - Update version in package.json.
  - Update version in src/pcface.py
  - Update copyright notice in LICENSE.md
  - Update CHANGES.md
  - Optional: Update screenshot in README.md
  - Run checks:

    ```sh
    make checks
    make dist
    make npmdist
    make test-upload
    make verify-test-upload
    ```

  - Optional: Update screenshot of `meta/demo.html` in README.
  - Publish documentation:

    ```sh
    make live
    ```

  - Commit changes:

    ```sh
    git status
    git add -p
    git commit
    git push
    ```

  - Tag the release:

    ```sh
    VERSION=<VERSION>

    git commit -em "Set version to $VERSION"
    git tag $VERSION -m "PC Face $VERSION"
    git push origin main $VERSION
    ```

  - Publish Python package.

    ```sh
    make upload
    make verify-upload
    ```

  - Publish JavaScript package.

    ```sh
    npm login
    npm publish
    ```

  - Make a release on GitHub.


Post-Release Checklist
----------------------

Perform the following tasks after every release:

  - Update version in package.json to the next dev version (`X.Y.Z-dev` format).

  - Commit.

    ```
    git add -p
    git status

    VERSION=$(sed -n 's/.*version.*: "\(.*\)",/\1/p' package.json)
    echo VERSION: $VERSION

    git add -p
    git commit -em "Set version to $VERSION"
    git push origin main
    ```
