import React, {Fragment, useEffect, useRef, useState} from 'react';

/**
 * Use for toggleable menus
 * Can listen to outside click
 */
function ToggleableItem(props) {
  const [show, setShow] = useState(false);

  const node = useRef();

  const eventedItem = React.cloneElement(props.item, {
    onClick: () => {
      setShow(!show);
    },
  });

  const menu = React.cloneElement(props.menu);

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      // handle click inside node
      // if this element has 'hide-menu' attribute
      // then also hide menu
      if (e.target.dataset.hideMenu) {
        setShow(false);
      }
      return;
    }
    // outside click
    setShow(false);
  };

  useEffect(() => {
    if (show) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [show]);

  return (
    <div ref={node} className={props.className}>
      {eventedItem}
      {show ? menu : null}
    </div>
  );
}

export default ToggleableItem;
