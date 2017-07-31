import angular from 'angular';
import component from './page2.component';

import './page2.scss';

const module = angular
  .module('page2', [])
  .component('page2', component)
  .name;

export default module;
