/* eslint-disable valid-jsdoc */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/wd-logo.png';
/**
 * Widget on homepage use for advertisement
 */
function AdvertiseWidget() {
  return (
    <div className="widget widget-about">
      <img src={Logo} alt="" />
      <h3>Track Time on Workwise</h3>
      <span>Pay only for the Hours worked</span>
      <div className="sign_link">
        <h3><Link to="/" title="">Sign up</Link></h3>
        <Link to ="/" title="">Learn More</Link>
      </div>
    </div>
  );
}

export default AdvertiseWidget;
