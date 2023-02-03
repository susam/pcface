Developer Notes
===============


Setup
-----

 1. To set up development environment, enter:
  
    ```sh
    make venv
    ```
     
 2. Then enter:
 
    ```sh
    make bitmap
    ```


Release Checklist
-----------------

Perform the following tasks for every release:

  - Update version in README.md
  - Update version in package.json.
  - Update copyright notice in LICENSE.md
  - Update CHANGES.md
  - Run checks:
  
        make checks

  - Optional: Update screenshot of `meta/demo.html` in README.
  - Commit changes:

        git status; git add -p

  - Tag the release:
  
        VERSION=<VERSION>

        git commit -em "Set version to $VERSION"
        git tag $VERSION -m "PC Face $VERSION"
        git push origin main $VERSION
        
  - Publish package.

        npm login
        npm publish
        make dist
        make test-upload
        make upload
        

Post-Release Checklist
----------------------

Perform the following tasks after every release:

  - Update version in package.json to the next dev version (`X.Y.Z-dev` format).

  - Commit.

        git add -p
        git status

        VERSION=$(sed -n 's/.*version.*: "\(.*\)",/\1/p' package.json)
        echo VERSION: $VERSION

        git add -p
        git commit -em "Set version to $VERSION"
        git push origin main

