// Import third party libraries
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import ngReduxUiRouter from 'redux-ui-router';
import ngAnimate from 'angular-animate';
import ngMessages from 'angular-messages';
import jquery from 'jquery';
import bootstrap from 'angular-ui-bootstrap';

// Import styles
import 'angular/angular-csp.css';
import './styles/index.scss';

// Import config for libraries
import reduxConfig from './reduxConfig';
import routeConfig from './routeConfig';

// Import components
import demoModule from './pages/demoModule';
import sideNav from './containers/side-nav';
import topNav from './containers/top-nav';

// This is our main angular application with dependencies
const app = angular
  .module('app', [
    bootstrap,
    uiRouter,
    ngRedux,
    ngReduxUiRouter,
    ngAnimate,
    ngMessages,

    demoModule,
    sideNav,
    topNav,
  ]);

// Enable HTML5 mode for routes
app.config(['$locationProvider', ($locationProvider) => {
  $locationProvider.hashPrefix('!');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  });
}])

// Load config for ui-router
app.config(routeConfig(app));

// Load Redux config
app.config(reduxConfig);

export default app;
