import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, Store } from 'redux';
import rootReducer from './reducers/rootReducer';

// Persisting Redux Store as Next.js refresh pages and we need to maintain state...
let devtools, store: Store;
const isClient = typeof window !== 'undefined';
if (isClient) {
  const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const identity = <T>(t: T) => t;
  devtools = process.browser && composeEnhancers ? composeEnhancers() : identity; // identity function

  const { persistStore, persistReducer } = require('redux-persist');
  const storage = require('redux-persist/lib/storage').default;
  const persistConfig = {
    key: 'touku-root',
    storage,
  };

  store = createStore(persistReducer(persistConfig, rootReducer), compose(applyMiddleware(thunk), devtools));

  // store.__PERSISTOR = persistStore(store);
  const persistor = persistStore(store);
} else {
  store = createStore(rootReducer, compose(applyMiddleware(thunk)));
}

export default store;
