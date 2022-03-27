/* eslint-disable valid-jsdoc */
import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

import Suggestions, { SuggestedUser } from './suggestions';
import { getSuggestedProfiles } from '../../action/profile';
/**
 * User suggestion card
 */
const UserSuggestions = props => {
  const [data, setData] = useState([]);
  const { user, getSuggestedProfiles } = props;

  useEffect(() => {
    const f = async () => {
      if (!user) return;
      const d = await getSuggestedProfiles(user._id);
      setData(d.map(_d => ({ ..._d, key: uuid() })));
    };
    f();
  }, [user]);

  return (
    <Suggestions title="Suggestions"
      component={<SuggestedUser/>}
      data = {data}
    />
  );
};

UserSuggestions.propTypes = {
  getSuggestedProfiles: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = {
  getSuggestedProfiles,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSuggestions);
