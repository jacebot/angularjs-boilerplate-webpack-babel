import reducers from './reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

function config ($ngReduxProvider) {
  'ngInject';

  const middlewares = [thunk];

  const logger = createLogger({
    collapsed: () => true // collapse all
  });

  middlewares.push(logger);

  $ngReduxProvider.createStoreWith(reducers, middlewares);
}

export default config;
