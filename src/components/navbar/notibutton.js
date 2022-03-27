import React from 'react';
import ToggleableItem from './toggleableItem';

function NavbarNotiButton(props) {
  const item = (
    <a href={null} title={props.title} className='not-box-openm' style={{cursor: 'pointer'}}>
      <span><img src={props.image} alt="" /></span>
      {props.content}
    </a>
  );

  const menu = (
    <div className="notification-box noti">
      <div className="nt-title">
        <h4>Setting</h4>
        <a href="#" title="">Clear all</a>
      </div>
      <div className="nott-list">
        <div className="notfication-details">
          <div className="noty-user-img">
            <img src="images/resources/ny-img1.png" alt="" />
          </div>
          <div className="notification-info">
            <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
            <span>2 min ago</span>
          </div>
        </div>
        <div className="notfication-details">
          <div className="noty-user-img">
            <img src="images/resources/ny-img2.png" alt="" />
          </div>
          <div className="notification-info">
            <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
            <span>2 min ago</span>
          </div>
        </div>
        <div className="notfication-details">
          <div className="noty-user-img">
            <img src="images/resources/ny-img3.png" alt="" />
          </div>
          <div className="notification-info">
            <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
            <span>2 min ago</span>
          </div>
        </div>
        <div className="notfication-details">
          <div className="noty-user-img">
            <img src="images/resources/ny-img2.png" alt="" />
          </div>
          <div className="notification-info">
            <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
            <span>2 min ago</span>
          </div>
        </div>
        <div className="view-all-nots">
          <a href="#" title="">View All Notification</a>
        </div>
      </div>
    </div>
  );

  return (
    <ToggleableItem menu={menu} item={item} />
  );
}

export default NavbarNotiButton;
