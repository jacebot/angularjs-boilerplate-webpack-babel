import template from './<%= dashesEntityName %>.html';
import controller from './<%= dashesEntityName %>.controller';

const component = {
  restrict: 'E',
  bindings: {

  },
  template,
  controller,
  controllerAs: 'vm'
};

export default component;
