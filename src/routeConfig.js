/**
 * Add a few basic routes to ui-router for our components
 */
export default function () {
  RouterConfig.$inject = ['$stateProvider'];

  function RouterConfig ($stateProvider) {
    $stateProvider

      .state('index', {
        abstract: true,
        views: {
          main: {
            template: '<ui-view></ui-view>'
          },
        },
      })

      .state('index.home', {
        url: '/',
        template: '<welcome></welcome>',
      });
  }

  return RouterConfig;
}
