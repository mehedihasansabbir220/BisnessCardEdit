import React, { Fragment, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
// import LoginPage from './containers/login';

import { ReactComponent as LoadIcon }
  from './assets/images/Rolling-1s-30px.svg';

import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import NormalUserRoute from './components/routing/normalUserRoute';
import Title from './components/layout/Title';
import FlowContainer from './containers/FlowContainer';

import setAuthToken from './utils/setAuthToken';
import { loadUser } from './slices/authSlice';

import { selectAuthLoading } from './slices/authSlice';
import ImageMapEditor from './editors/ImageMapEditor';

import './styles/index.scss';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

/**
 * @returns {Component} global app
 */
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <Fragment>
      <ToastContainer autoClose={5000} />
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home"></Redirect>
            </Route>
            <NormalUserRoute
              path="/home"
              component={DefaultContainer}>
            </NormalUserRoute>
          </Switch>
        </Fragment>
      </Router>
    </Fragment>
  );
}

/**
 * @returns {Component} Pages with navbar
 */
const DefaultContainer = () => {
  const loading = useSelector(selectAuthLoading);

  return (
    <Fragment>
      {loading ? (
        <Fragment>
          <div className="page-loading">
            <LoadIcon />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="rde-title">
            <Title />
          </div>
          <FlowContainer>
            <div className="rde-content">
              <ImageMapEditor />
            </div>
          </FlowContainer>
        </Fragment>
      )}
    </Fragment>
  );
};

export default App;
