import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import configureStore from './store/store';
import * as SessionActions from './actions/session_actions';
import * as BatchActions from './actions/batch_actions';
import * as UserActions from './actions/user_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if(window.currentUser){
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else{
    store = configureStore();
  }
  window.store = store;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

window.login = SessionActions.login;
window.logout = SessionActions.logout;
window.signup = SessionActions.signup;
window.fetchBatches = BatchActions.fetchBatches;
window.fetchBatch = BatchActions.fetchBatch;
window.createBatch = BatchActions.createBatch;
window.updateBatch = BatchActions.updateBatch;
window.deleteBatch = BatchActions.deleteBatch;
window.fetchUsers = UserActions.fetchUsers;
