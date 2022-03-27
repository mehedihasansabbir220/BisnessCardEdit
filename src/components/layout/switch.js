import React from 'react';
import ReactSwitch from 'react-switch';


function Switch(props) {
  return (
    <ReactSwitch
      onColor="#ffb1a7"
      onHandleColor="#e44d3a"
      handleDiameter={20}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height={16}
      width={32}
      className="react-switch"
      {...props}
    />
  );
}

export default Switch;
