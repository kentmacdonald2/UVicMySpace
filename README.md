# MyUVic

[![Travis](https://img.shields.io/travis/bitHero/UVicMySpace.svg)](https://travis-ci.org/bitHero/UVicMySpace)

## Project Structure

### Templates

The project uses [Handlebars](http://handlebarsjs.com/) and Grunt to generate static HTML pages from templates and JSON. The templates are stored in `templates/` and are compiled into `out/<user>`. For example the index template is stored in `templates/index.hbs` and with Amy's data would compile to `out/amy/index.html`.

Partial templates are stored in `templates/partials` and are included into page templates.

### Data

Data for different users is stored in `data/` and is compiled into templates.

### Styles

The project uses SASS in the form of SCSS for styles. Source SCSS is stored in `assets/sass` and compiles then minifies to `assets/css`. The assets are copied to `out/assets` for use by compiled pages.

## Getting Started

### Requirements

To build this project you will need:

* [Node.js](https://nodejs.org/en/)
* [Grunt](http://gruntjs.com/)
* [SASS](http://sass-lang.com/)
* [Python*](https://www.python.org/) 

*Optional


### Set Up

To set up the project, begin by cloning the repository,

```bash
git clone https://github.com/bitHero/UVicMySpace
cd UVicMySpace
```

Install dependancies with the Node Package Manager (NPM),

```bash
npm install
```

Assuming all dependancies installed correctly you can build the styles and pages with Grunt,

```bash
grunt build
```

If you have issues with the previous command make sure you have the Grunt Command-Line Interface (CLI) installed globally (`npm install -g grunt-cli`).

### Working with Source Files

Grunt will watch the files you're working on and automatically build any data, template or style changes just by running,

```
grunt
```

in the root of the project. This will build all the output files then watch for source file changes. In IntelliJ you can make this a Configuration after installing the Grunt plugin.

### Debugging the Site

When developing the website locally it's best to run a simple a local server and view/inspect the website in a web browser (Google Chrome has great debugging tools for this). To run the server we have many options, we'll discuss two, using JetBrains IntelliJ's Javascript Debug and using Python's Simple HTTP Server.

#### With IntelliJ

The IntelliJ method involves creating a JavaScript Debug Configuration in IntelliJ. IntelliJ will host your files with a basic server so you can debug the site in a browser.

1. Import the project into IntelliJ, `File > Open...`
2. Open a Configurations, `Run > Edit Configurations...`
3. Create a new Configuration, `PLUS > JavaScript Debug`
4. Give it a name and point it to an "URL", e.g., `http://localhost:63342/UVicMySpace/out/amy/`
5. Hit `OK` and run your Configuration (top right)

#### With Python

Python includes a module that can be used to run a server out of any local directory. To use this module you must have Python installed.

1. Open a Terminal
2. `cd` to the directory you want to host, e.g., `out/amy/`
3. Run `python -m SimpleHTTPServer`








