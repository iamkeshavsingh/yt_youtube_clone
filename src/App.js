import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/HomePage/Home.page';
import SearchPage from './pages/SearchPage/Search.page';
import ExplorePage from './pages/Explore/Explore.page';
import SubscriptionPage from './pages/Subscription/Subscription.page'
import { signIn } from './store/actions/user.action';
import { auth } from './config/firebase.config';

function App({ signIn }) {

  useEffect(() => {
    auth.onAuthStateChanged(function (data) {
      if (data) {
        var { displayName, email, uid } = data;
        signIn({
          user: {
            name: displayName,
            email,
            uid
          }
        });
      }
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/results' component={SearchPage} />
        <Route path='/explore' component={ExplorePage} />
        <Route path='/subscription' component={SubscriptionPage} />
      </Switch>
    </Router>
  );
}

var mapDispatchToProps = (dispatch) => ({
  signIn: (user) => dispatch(signIn(user))
});

export default connect(null, mapDispatchToProps)(App);
