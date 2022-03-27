import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

import Suggestions, { SuggestedArticle } from './suggestions';
import { getSuggestions } from '../../action/store';

/**
 * job suggestion card
 */
const JobSuggestions = props => {
  const [data, setData] = useState([]);
  const { user, getSuggestions } = props;

  useEffect(() => {
    const f = async () => {
      if (!user) return;
      const d = await getSuggestions(user._id);
      setData(d.map(_d => ({ ..._d, key: uuid() })));
    };
    f();
  }, [user]);

  return (
    <Suggestions
      title="Store suggestions"
      component={<SuggestedArticle />}
      data={data}
    />
  );
};

JobSuggestions.propTypes = {
  getSuggestions: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = {
  getSuggestions,
};

export default connect(mapStateToProps, mapDispatchToProps)(JobSuggestions);
