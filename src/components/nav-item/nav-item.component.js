import template from './nav-item.html';
import controller from './nav-item.controller';

const component = {
  restrict: 'E',
  bindings: {
    title: '@',
  },
  template,
  controller,
  controllerAs: 'vm',
};

export default component;
