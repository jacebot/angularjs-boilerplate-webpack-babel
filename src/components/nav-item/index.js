import angular from 'angular';
import component from './nav-item.component';

import './nav-item.scss';

const module = angular
  .module('navItem', [])
  .component('navItem', component)
  .name;

export default module;
