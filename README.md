# React EPAM Training
#Usage
Type **npm run webpack** to get JS bundle
Type **npm start** to start ExpressJS server
## Libraries
You can find the list of used libs in package.json file
"Webpack node externals" lib is being used to avoid including node modules in js bundle
"Babel-register" is included to run ExpressJS server with ES2015 syntax ('import' statement isn't working without it)
##Configurations
Webpack and Babel configs are listed in separate files
###Webpack
Webpack config file's name contains *babel* in it to support import statements
The only one rule inside of config file is using *es2015* and *react* presets to transpile js/jsx files from ES6 to ES5 code
In addition, all js/jsx files are getting bundles in single bundle.js file without uglifying