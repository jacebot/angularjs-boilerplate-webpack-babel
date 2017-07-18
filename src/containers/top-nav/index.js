import angular from 'angular';
import component from './top-nav.component';

import './top-nav.scss';

import navItem from '../../components/nav-item';

// import {
//  newService,
// } from '../../services';

const module = angular
  .module('topNav', [
    navItem,
  ])
  .component('topNav', component)
  .name;

export default module;
