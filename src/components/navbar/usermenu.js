import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ToggleableItem from './toggleableItem';
import { Link } from 'react-router-dom';
import { logout } from '../../action/auth';
import RoundedImage from '../layout/roundedImage';

const UserMenu = ({ auth, logout, store }) => {
  const onLogout = async () => {
    logout();
    // window.location.reload();
  };

  const item =
    store && store.currentStore ? (
      <div className="user-info">
        <RoundedImage
          src={
            store && store.currentStore && store.currentStore.avatar
              ? store.currentStore.avatar
              : '/media/image/store-logo.png'
          }
          alt=""
          className="user-avatar"
        />
        <a href={null} title="" style={{ cursor: 'pointer', color: 'white' }}>
          {store && store.currentStore
            ? store.currentStore.name
              ? store.currentStore.name.split(' ')[0]
              : store.currentStore.name
            : 'Annonymous '}
        </a>
        &ensp;<i className="la la-sort-down" style={{ cursor: 'pointer' }}></i>
      </div>
    ) : (
      <div className="user-info">
        <RoundedImage
          src={
            auth.user && auth.user.avatar
              ? auth.user.avatar
              : '/media/image/noavatar.png'
          }
          alt=""
          className="user-avatar"
        />
        <a href={null} title="" style={{ cursor: 'pointer', color: 'white' }}>
          {auth.isAuthenticated && auth.user
            ? auth.user.fullname
              ? auth.user.fullname.split(' ')[0]
              : auth.user.fullname
            : 'Annonymous '}
        </a>
        &ensp;<i className="la la-sort-down" style={{ cursor: 'pointer' }}></i>
      </div>
    );

  const menu = (
    <div className="user-account-settingss">
      {auth.isAuthenticated ? (
        <Fragment>
          {/* <h3>Online Status</h3>
            <ul className="on-off-status">
              <li>
                <div className="fgt-sec">
                  <input type="radio" name="cc" id="c5" />
                  <label htmlFor="c5">
                    <span></span>
                  </label>
                  <small>Online</small>
                </div>
              </li>
              <li>
                <div className="fgt-sec">
                  <input type="radio" name="cc" id="c6" />
                  <label htmlFor="c6">
                    <span></span>
                  </label>
                  <small>Offline</small>
                </div>
              </li>
            </ul>
            <h3>Custom Status</h3>
            <div className="search_form">
              <form>
                <input type="text" name="search" />
                <button type="submit">Ok</button>
              </form>
            </div> */}
          <h3>Setting</h3>
        </Fragment>
      ) : null}
      <ul className="us-links">
        {auth.isAuthenticated ? (
          <Fragment>
            <li>
              <Link to="/account-setting" data-hide-menu={true}>
                Account Setting
              </Link>
            </li>
            <li>
              <a href="#" title="">
                Privacy
              </a>
            </li>
          </Fragment>
        ) : null}
        <li>
          <a href="#" title="">
            Faqs
          </a>
        </li>
        <li>
          <a href="#" title="">
            Terms & Conditions
          </a>
        </li>
      </ul>
      {auth.isAuthenticated ? (
        <h3 className="tc">
          <Link to={''} title="" onClick={onLogout}>
            Logout
          </Link>
        </h3>
      ) : (
        <h3 className="tc">
          <Link to="/login" title="">
            Sign in
          </Link>
        </h3>
      )}
    </div>
  );

  return <ToggleableItem menu={menu} item={item} />;
};

UserMenu.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  store: state.store,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
