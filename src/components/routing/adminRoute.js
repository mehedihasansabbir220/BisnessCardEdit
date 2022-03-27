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
const AdminRoute = (props) => {
  const { auth, userType, component: Component, ...rest } = props;
  
  if (!auth.isAuthenticated && !auth.loading) {
    return <Route {...rest} render={() => <Redirect to="/admin/login" />} />;
  }

  if (auth && auth.user && auth.user.userType == 'student' && props.path.includes('admin')) {
    return <Redirect to="/home" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

AdminRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AdminRoute);
