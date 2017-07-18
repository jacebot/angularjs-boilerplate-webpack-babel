import angular from 'angular';
import component from './button.component';

import './button.scss';

const module = angular
  .module('button', [])
  .component('button', component)
  .name;

export default module;
