import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import Header from './header/header';
import BatchesIndexContainer from './batches/batch_index_container';
import BatchShowContainer from './batches/batch_show_container';
import BatchFormContainer from './batches/batch_form_container';
import NewBatchFormContainer from './batches/new_batch_form_container';



import {fetchBatches} from '../actions/batch_actions';


const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    console.log("ensure login");
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    console.log("redirecting for login");
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };


  const _getBatches = () => {
    console.log("fetching batches");
    store.dispatch(fetchBatches());
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={_getBatches}>
          <IndexRoute component={BatchesIndexContainer} />
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
            <Route path="/batches" component={BatchesIndexContainer} />
            <Route path="/batches/new" component={NewBatchFormContainer} />
            <Route path="/batches/:batchId/edit" component={BatchFormContainer} />
            <Route path="/batches/:batchId" component={BatchShowContainer}>
            </Route>

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
