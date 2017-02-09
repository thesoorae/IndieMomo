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
import UserProfileContainer from './users/user_profile_container';
import HomepageContainer from './homepage/homepage_container';
import OrderOptionsEditContainer from './order_options/order_options_edit_container';
import Results from './search/results_container';

import {fetchBatches} from '../actions/batch_actions';
import {fetchUsers, getUser} from '../actions/user_actions';

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
    store.dispatch(fetchBatches());
  };

  const _getUser = (nextState, replace, cb) =>{
    console.log("fetching User");
    console.log("next state", nextState);
    store.dispatch(getUser(nextState.params.userId)).then(cb);
  };

  const _getUsers = () => {
    console.log("fetching users");
    store.dispatch(fetchUsers());
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} store={store} >
          <IndexRoute component={HomepageContainer} onEnter={_getBatches} />
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
            <Route path="/batches" component={BatchesIndexContainer} />
            <Route path="/batches/new" component={NewBatchFormContainer} onEnter={_ensureLoggedIn} />
            <Route path="/batches/results/:search_term" component={Results} />
            <Route path="/batches/:batchId/edit" component={BatchFormContainer} onEnter={_ensureLoggedIn} />
            <Route path="/batches/:batchId" component={BatchShowContainer} onEnter={_getBatches}/>
            <Route path="/batches/:batchId/options/edit" component={OrderOptionsEditContainer} onEnter={_ensureLoggedIn} />
            <Route path="/users/:userId" onEnter = {_getUser} component={UserProfileContainer} />


        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
