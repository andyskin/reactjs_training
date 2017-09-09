# React EPAM Training
- [Usage](#usage)
    - [Libraries](#libraries)
    - [Configurations](#configurations)
        - [Webpack](#webpack)


# Usage
- Type **npm start** to start ExpressJS server
- Type **npm run clean** to remove previous build from *dist* folder
- Type **npm run build** to get all production-ready components compiled. Once it's done, *Clean* command will be executed to erase previous files. After this new build will be created in *dist* folder with *index.html* as entry point. There're two minified *js* files are defined in index file:
    1) *vendor.js* that contains the code of *react* and *react-dom* libraries
    2) *app.js* with application code itself

## Libraries
You can find the list of used libs in package.json file<br>
- **Webpack-express-middleware** allows to reload express server automatically once any change is made. It replaces *nodemon* and easier to be confgirued in comparison with *webpack-dev-middleware*. Please note there's no hot reloading is configured for this project, cause it kinda annoying from my point of view
- **Rimraf** lib is being used to clean *dist* folder before new build
- **Cross-env** helps to define *NODE_ENV* variable for any target OS

## Configurations
Webpack and Babel configs are listed in separate files
### Webpack
There're four rules defined:
- All *js* files are going through **babel** loader and getting combined into two bundles (*app.js* and *vendor.js*), that are minified for production
- All *images* are being processed by **url-loader**
- Two loader are in use for *styles* processing: **style-loader** and **css-loader**. Please note that there's no CSS preprocessors in project
- The **html-loader** transforms *html* template in *index.html* production file