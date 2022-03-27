/* eslint-disable valid-jsdoc */
import React from 'react';

import Logo2 from '../../assets/images/logo2.png';
import Copyright from '../../assets/images/cp.png';
import { Link } from 'react-router-dom';

/**
 * Links
 */
function TagSec() {
  return (
    <div className="tags-sec full-width">
      <ul>
        <li><Link to="#" title="">Help Center</Link></li>
        <li><Link to="#" title="">About</Link></li>
        <li><Link to="#" title="">Privacy Policy</Link></li>
        <li><Link to="#" title="">Community Guidelines</Link></li>
        <li><Link to="#" title="">Cookies Policy</Link></li>
        <li><Link to="#" title="">Career</Link></li>
        <li><Link to="#" title="">Language</Link></li>
        <li><Link to="#" title="">Copyright Policy</Link></li>
      </ul>
      <div className="cp-sec">
        <img src={Logo2} alt="" />
        <p><img src={Copyright} alt="" />Copyright 2019</p>
      </div>
    </div>
  );
}

export default TagSec;
