import angular from 'angular';

class TopNavController {
  constructor ($window) {
    'ngInject';

    angular.element($window).bind('scroll', () => {
      if ($window.pageYOffset > 50) {
        angular.element(document.getElementsByClassName('navbar-trans')).addClass('afterscroll');
      } else {
        angular.element(document.getElementsByClassName('navbar-trans')).removeClass('afterscroll');
      }
    });
  }
}
export default TopNavController;
