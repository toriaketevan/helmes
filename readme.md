Documentation
-------------

In order to build the project with module builder:
* open a command window
* navigate to project folder
* run "gulp" command.

It can fail because of missing dependencies, you can get information about dependencies in gulpfile.js.

If it runs successfully Browsersync will fire the app itself in the browser. 
You can use that link to test the web page in all browsers at the same time.
To test the website of other devices please use another IP (you can get them in command window)

Main project files are located in app folder (including index.html)


•	HTML integration (conversion of design into HTML)
•	Latest front-end languages (HTML 5, CSS 3 and JS)
•	Latest front-end practices and technologies (responsive design)
•	Professional development practices (code versioning, testing and building)


•	Responsive design
•	Compatible with IE 9+, FF and Chrome on desktop
•	SASS as CSS preprocessor
•	Gulp tasks that can:
		Convert all CSS preprocessor files to CSS
		Assemble and minify CSS files to one file
		Assemble and minify JS files to one file

Depencences:
{
  "name": "HelmesApp",
  "version": "1.0.0",
  "description": "",
  "main": "gulpfile.js",
  "dependencies": {
    "gulp": "^3.9.1",
    "gulp-install": "^1.1.0",
    "ruby": "^0.6.1"
  },
  "devDependencies": {
    "browser-sync": "^2.18.8",
    "concat": "^1.0.3",
    "gulp": "^3.9.1",
    "gulp-browserify": "^0.5.1",
    "gulp-compass": "^2.1.0",
    "gulp-concat": "^2.6.1",
    "gulp-install": "^1.1.0",
    "gulp-minify-css": "^1.2.4",
    "gulp-plumber": "^1.1.0",
    "gulp-rename": "^1.2.2",
    "gulp-uglify": "^1.5.4",
    "main-bower-files": "^2.13.1"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Amelie",
  "license": "ISC"
}

Libraries used:
{
  "name": "HelmesApp",
  "description": "Test Website",
  "main": "",
  "moduleType": [],
  "authors": [
    "KetevanToria"
  ],
  "license": "MIT",
  "homepage": "",
  "private": true,
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
  ],
  "dependencies": {
    "angular": "^1.6.4",
    "bootstrap": "3.3.7"
  }
}