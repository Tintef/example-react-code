import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { initialAppState } from '../reducers/rootReducer';
import sagas from '../sagas';

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  let enhancer;
  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension ? window.devToolsExtension() : (f) => f;
    enhancer = compose(
      applyMiddleware(...middleware),
      devToolsExtension,
    );
  } else {
    enhancer = compose(
      applyMiddleware(...middleware),
    );
  }

  const store = createStore(rootReducer, initialAppState, enhancer);

  sagas.map((saga) => sagaMiddleware.run(saga));

  return store;
}

export default configureStore;
