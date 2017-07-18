import angular from 'angular';
import component from './<%= dashesEntityName %>.component';

import './<%= dashesEntityName %>.scss';

const module = angular
  .module('<%= camelEntityName %>', [])
  .component('<%= camelEntityName %>', component)
  .name;

export default module;
