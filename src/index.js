// Import third party libraries
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngRedux from 'ng-redux';
import ngReduxUiRouter from 'redux-ui-router';
import ngAnimate from 'angular-animate';
import ngMessages from 'angular-messages';
import bootstrap from 'angular-ui-bootstrap';

// Import styles
import 'angular/angular-csp.css';
import './styles/index.scss';

// Import config for libraries
import reduxConfig from './reduxConfig';
import routeConfig from './routeConfig';

// Import components
import welcome from './pages/welcome';
import page2 from './pages/page2';
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

    welcome,
    page2,
    sideNav,
    topNav,
  ]);

// Enable HTML5 mode for routes
app.config(['$locationProvider', ($locationProvider) => {
  $locationProvider.hashPrefix('#');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  });
}]);

// Load config for ui-router
app.config(routeConfig(app));

// Load Redux config
app.config(reduxConfig);

export default app;
