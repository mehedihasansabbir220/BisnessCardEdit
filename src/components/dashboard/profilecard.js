/* eslint-disable valid-jsdoc */
import React, { Component, Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getFollowStatus } from '../../action/profile';
import RoundedImage from '../layout/roundedImage';
/**
 * Display meta-info about logged in profile
 * e.g: avatar, name, description, number of followers...
 *
 * @param props Component props
 */
function ProfileCard(props) {
  const { user, getFollowStatus } = props;

  const [dataUser, setDataUser] = useState({
    avatar: '',
    fullname: '',
    description: '',
  });

  const [following, setFollowing] = useState(0);
  // const [followStatus, setFollowStatus] = useState({
  //   following: 0,
  //   follower: 0
  // });

  useEffect(() => {
    const f = async () => {
      setDataUser({ ...dataUser, ...user });
      const fl = await getFollowStatus();
      setFollowing(fl);
    };

    f();
  }, [user]);

  return (
    <Fragment>
      <div className="user-data full-width">
        <div className="user-profile">
          <div className="username-dt">
            <div className="usr-pic">
              <RoundedImage
                src={dataUser.avatar}
                className="usr-pic-container"
              />
            </div>
          </div>
          <div className="user-specs">
            <h3>{dataUser.fullname}</h3>
            <span>{dataUser.description}</span>
          </div>
        </div>
        <ul className="user-fw-status">
          <li>
            <h4>Following</h4>
            <span>{following}</span>
          </li>
          {/* <li>
            <h4>Followers</h4>
            <span>{followStatus.follower}</span>
          </li> */}
          <li>
            <Link to="/following-store" title="">
              Following Store
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

ProfileCard.propTypes = {
  user: PropTypes.object.isRequired,
  getFollowStatus: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = {
  getFollowStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard);
