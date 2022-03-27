import React from 'react';

/**
 * Item of Flexbox
 * @param {*} props props
 * @returns x
 */
function Item(props) {
  const {
    alignSelf,
    order,
    flexGrow,
    flexShrink,
    flexBasis,
    flex,
    style,
    children,
    ...other
  } = props;
  const newStyle = Object.assign(
    {},
    {
      alignSelf,
      order,
      flexGrow,
      flexShrink,
      flexBasis,
      flex,
    },
    style,
  );

  return (
    <div
      style={Object.keys(newStyle).reduce((prev, key) => {
        if (newStyle[key]) {
          return Object.assign(prev, { [key]: newStyle[key] });
        }
        return prev;
      }, {})}
      {...other}
    >
      {children}
    </div>
  );
}

export default Item;
