import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducers'

const rootStore = combineReducers({
  posts : rootReducer
})

// const store2 = createStore(rootStore)
// console.log("Store 2 : ", store2.getState())

const store = createStore(rootStore)
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
