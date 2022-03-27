import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const Scrollbar = props => {
  const renderTrack = props =>
    <div {...props} className="rde-track-vertical" />;

  return (
    <Scrollbars renderTrackVertical={renderTrack}>{props.children}</Scrollbars>
  );
};


export default Scrollbar;
