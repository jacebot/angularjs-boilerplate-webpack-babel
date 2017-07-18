import angular from 'angular';
import component from './welcome.component';

import './welcome.scss';

const module = angular
  .module('welcome', [

  ])
  .component('welcome', component)
  .name;

export default module;
