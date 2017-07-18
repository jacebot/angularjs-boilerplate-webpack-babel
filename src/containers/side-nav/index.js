import angular from 'angular';
import component from './side-nav.component';

import './side-nav.scss';

import navItem from '../../components/nav-item';

// import {
//  newService,
// } from '../../services';

const module = angular
  .module('sideNav', [
    navItem,
  ])
  .component('sideNav', component)
  .name;

export default module;
