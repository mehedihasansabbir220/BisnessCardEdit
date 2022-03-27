import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { UserState } from '../../utils/enum';
import { v4 as uuid } from 'uuid';

/**
 * Privated routes use for authenticated users
 * If roles is specified, only this type of user can access this route
 * If roles is not specified, any type of user can access this route
 *
 * @param {Object} props
 * @param {Array, Int} props.userTypes
 */
const PrivatedRoute = (props) => {
  const { auth, userType, component: Component, ...rest } = props;

  console.log(auth, props);
  if (!auth.isAuthenticated && !auth.loading && props.path != '/admin/login') {
    return <Route {...rest} render={() => <Redirect to="" />} />;
  }

  if (auth.user && auth.user.userType == 'admin' && props.path == '/admin/login') {
    if (auth.user.userType != userType) return <Redirect to="/admin/default" />;
  }
  
  if (auth.user && auth.user.userType == 'admin' && props.path.includes('home')) {
    return <Redirect to="/admin/default" />;
  }

  if (auth.isAuthenticated && auth.user && auth.user.isBlock) {
    return <Route {...rest} render={() => <Redirect to="/no-permission" />} />;
  }

  // Check role
  // single element
  if (auth.user && userType) {
    if (auth.user.userType != userType) return <Redirect to="/no-permission" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

PrivatedRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PrivatedRoute);
