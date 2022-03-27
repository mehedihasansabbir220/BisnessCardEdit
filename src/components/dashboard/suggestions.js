/* eslint-disable valid-jsdoc */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RoundedImage from '../layout/roundedImage';
import { Link } from 'react-router-dom';
/**
 * Suggestion panel on dashboard
 * @param {Object} props component props
 * @param {String} props.title panel's title
 * @param {Component} props.component child component
 * @param {Array} props.data data to fill into component
 */
const Suggestions = props => {
  const { title, component, data } = props;

  return (
    <Fragment>
      <div className="suggestions full-width">
        <div className="sd-title">
          <h3>{title}</h3>
          <i className="la la-ellipsis-v"></i>
        </div>
        <div className="suggestions-list">
          {data && data.length ?
            data.map(item => {
              return React.cloneElement(component, { ...item });
            }) :
            React.cloneElement(component, { loading: true })}
          {/* <div className="view-more">
            <a href="#" title="">
              View More
            </a>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
};

/**
 *
 * @param {Object} props
 * @param {String} props.title
 * @param {String} props.subtitle
 * @param {String} props.specialProp Additional info show on the right of this elm
 * @param {Boolean} props.loading
 */
export const SuggestedArticle = props => {
  console.log(props);
  const { name, followers, tagName, avatar, storeId, loading } = props;

  if (!loading) {
    return (
      <div className="job-info">
        <Link to={`/store-profile/${storeId}`}>
          <div className="job-info user-info">
            <RoundedImage
              src={avatar ? avatar : '/media/image/store-logo.png'}
              alt=""
              className="user-avatar"
            />

            <div className="job-details">
              <h3>{name}</h3>
              <p>{followers ? <span> Follower {followers}</span> : ''}</p>
            </div>
            <div className="hr-rate">
              <span>@{tagName}</span>
            </div>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="ph-item">
        <div className="ph-col-12">
          <div className="ph-row col-md-12">
            <div className="ph-col-6 big"></div>
            <div className="ph-col-6 empty"></div>
            <div className="ph-col-10"></div>
            <div className="ph-col-10"></div>
          </div>
        </div>
      </div>
    );
  }
};

/**
 * @param {Object} props Components props
 * @param {String} props.avatar User's avatar
 * @param {String} props.fullname User's fullname
 * @param {String} props.description User's short description
 * @param {Boolean} props.loading show placeholder loading instead of actual content
 */
export const SuggestedUser = props => {
  const { avatar, fullname, description, loading } = props;

  if (!loading) {
    return (
      <div className="suggestion-usd">
        <img src={avatar} alt="" className="suggestion-avatar" />
        <div className="sgt-text">
          <h4>{fullname}</h4>
          <span>{description}</span>
        </div>
        <span>
          <i className="la la-plus"></i>
        </span>
      </div>
    );
  } else {
    return (
      <div className="ph-item">
        <div className="ph-col-12">
          <div className="row">
            <div className="col-md-4">
              <div className="ph-avatar"></div>
            </div>
            <div className="col-md-8">
              <div className="ph-row">
                <div
                  className="ph-col-8 big"
                  style={{ marginBottom: '8px', marginTop: '6px' }}
                ></div>
                <div className="ph-col-12 big"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Suggestions;
