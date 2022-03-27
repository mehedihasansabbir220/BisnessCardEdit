import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectAuthenticationState, selectUser } from '../../slices/authSlice';

/**
 * Privated routes use for authenticated users
 * If roles is specified, only this type of user can access this route
 * If roles is not specified, any type of user can access this route
 *
 * @param {Object} props x
 *
 * @returns {Component} NormalUserRoute
 */
const NormalUserRoute = props => {
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectAuthenticationState);

  const { component: Component, ...rest } = props;

  if (user && user.userType == 'admin' &&
    props.path.includes('home')) {
    return <Redirect to="/admin/default" />;
  }

  // Check verify state
  if (isAuthenticated && user && user.isActive == false &&
    props.path != '/verify') {
    return <Route {...rest} render={() => <Redirect to="/verify" />} />;
  }

  return <Route {...rest} render={props => <Component {...props} />} />;
};

NormalUserRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  component: PropTypes.object.isRequired,
  path: PropTypes.object.isRequired,
};

export default NormalUserRoute;
