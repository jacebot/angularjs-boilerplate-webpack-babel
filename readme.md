# Modern SPA Boilerplate for AngularJS (1.x)

TODO: Add coverage stats some day.

It is quite opinionated, so feel free - to make suggestions to improve it.

## Special Thanks

Just a quick special thanks to the following for motivating me to do this.
 - :clap: My self of course :wink: ,
 - :clap: [Mario Tacke](https://mariotacke.io) ,
 - :clap: [Bogdan Savluk](https://github.com/zxbodya) ,
 - :clap: [Fábio Miranda](http://fabiomiranda.me)

Includes following:

 - [Webpack 2](https://webpack.js.org/) (modules, assets bundling)
 - [babel](http://babeljs.io/) (ES2015 support)
 - [ng-annotate](https://github.com/olov/ng-annotate)
 - [node-sass](https://github.com/sass/node-sass) for styles + AutoPrefixer
 - karma test runner configuration with code coverage reports
 - Bootstrap 4, because... you know why.
 - Angular-UI-Bootstrap, sure, why not add one more commonly used plugin too.
 - (TESTING) GitHub Actions

Requirements:

- NodeJS 6+ is required.
- [Yarn](https://yarnpkg.com) is optional to use, but I recommend using it. (if no - npm is ok).
- Windows requires Python2 for node-sass
- Chocolatey is recommended to use on Windows for package management
- Recommended to use yarn `npm -g i yarn` `choco install yarn`
- Redux-CLI for generating component. Install globally `npm i redux-cli -g`
  - then use `redux g component SimpleButton` for blueprinting

### Usage

1. Install dependencies `yarn install`
2. Start dev server `yarn dev` open [http://localhost:2992](http://localhost:2992)
3. Lint your code `yarn run lint`
4. Run unit tests `yarn run test`
5. Create build for deployment `yarn run build` for production build, or `yarn run build-dev` for development build

To analyze your bundle size - Recommend using [Webpack Bundle Analyzer](https://github.com/th0r/webpack-bundle-analyzer)

Currently dev stats for the Webpack console output is minimized in the `webpack-dev-server.config.js` file. Change it as one see's fit.

---

## Reading Materials

[Angular Guide](https://docs.angularjs.org/guide)

At first be sure that you are familiar with ES2015, some other useful materials:

 - [tutorial from BabelJS](http://babeljs.io/docs/learn-es2015/)
 - [Exploring ES6: Upgrade to the next version of JavaScript by Dr. Axel Rauschmayer](http://exploringjs.com/)

Read [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) - it is important to know, what is good and what is not, and why.

At least briefly read [webpack documentation](http://webpack.github.io/docs/) it is crucial to understand how it works in general.

It also recommended you understand a little about state management and Redux since this employs those paradigms.

- Managing state with redux:
    - [Grossman.io](http://blog.grossman.io/angular-1-using-redux-architecture/)
    - [Rangle.io](http://blog.rangle.io/managing-state-redux-angular/)
    - [Redux Ducks](https://github.com/erikras/ducks-modular-redux/)

- One Way data binding
  - [Todd Moto](https://toddmotto.com/one-way-data-binding-in-angular-1-5/)

- Lifecycle
  - [Todd Moto](https://toddmotto.com/angular-1-5-lifecycle-hooks)

---

## Usage advice

### Directory layout

    ├── build              # build stats
    ├── public             # public folder (webroot for dev server)
    │   ├── _assets        # build results - assets packed by webpack
    │   └── index.html     # one of app entry points, for dev server
    └── src                # app sources
        ├── components     # dumb components (Reusable pieces the containers boss around.)
        ├── containers     # smart containers (Controller / ViewModel logic.)
        ├── pages          # ui-view content (Pages are where the C and C come together.)
        ├── reducers       # redux state machine ([re]Ducks format - actions, constants and reducers in one. Oh my!)
        ├── services       # services to talk to an API
        ├── styles         # styles entry point
        │     ├── index.scss     # main style entry point
        │     ├── imports.scss   # main import file for your sass
        ├── index.js       # app entry module
        └── index.test.js  # entry point for test karma

### Styleguide

Except my notes below(which could be incomplete and outdated, and again shamelessly opinionated), I highly encourage you to check out:

- Influenced by [Angular 1.x styleguide, by Todd Motto](https://github.com/toddmotto/angular-styleguide)

..." but what about Jon Papa, or Dan Wahlin?!"

Did I mention this was opinionated?

---

### Angular specific conventions

Application organization rules:

1. Split app into angular "Containers and Components that live inside of pages."
    - every C or C should have its own folder, and should be defined in one file which will require all module components and will export module name
    - containers can have nested components
    - module can require other modules which are direct siblings of it or parent modules, or modules nested in it (if you need to require module that is nested in "sibling" - you you should move it up by hierarchy before requiring it)
2. Keep components small - if a components is too big, maybe it should be a few components (Code smell ?)
3. Every C and C should have:
    - index
    - named_thingy.component
    - named_thingy.controller
    - named_thingy.html
    - named_thingy.scss
    - img folder for images if any
4. Group related resources by folders
5. Name files with suffixes `Component`, `Controller`, `Service`
6. Use `.test` suffix for test file names
7. Use SASS/SCSS for styles

### Components

1. Prefer to use isolated scopes
2. Use controllerAs syntax (vm is preferred)
3. Controller should act as ViewModel, use $scope only if you need it
4. All model layer (data fetching, business logic) should be in services
