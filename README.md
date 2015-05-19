# SASS Grunt Kit
This is a basic-package for rapid website-prototyping based on **SASS** and **Grunt** with **BrowserSync**.

The following components are included.
* SASS
* Grunt
 * grunt-browser-sync
 * grunt-contrib-copy
 * grunt-contrib-sass
 * grunt-contrib-uglify
 * grunt-contrib-watch
* CSS Tools/Framework
 * https://github.com/matthieua/sass-css3-mixins
* JS Lib
 * https://github.com/madrobby/zepto

## Requirements
* npm

## Installation

```sh
git clone https://github.com/tonitone/sasskit
cd sasskit
npm install
grunt watch-dev
```
## How to start
Your working directory is **app/** and your build will be generated in the **dist/**-folder.

###Grunt commands
watch and compile your files in the **app/-folder 
```sh
grunt watch-dev 
```
start a server and sync every change in your **app/-folder** and compile them to your **dist/**-folder.
```sh
grunt watch-live
```
generate a build
```sh
grunt build
```

### You need more SASS sources?
Put your external SASS-Files in the **app/scss/libs/**-folder and include them in **all/scss/includes.scss**

## Todo
Help me to improve
... any ideas?

## License
GPL3

**freiheit**