import React from 'react';
import Item from './Item';

/**
 * Flex
 * @param {*} props props
 * @returns x
 */
function Flex(props) {
  const {
    flexDirection,
    flexWrap,
    flexFlow,
    justifyContent,
    alignItems,
    alignContent,
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
      display: 'flex',
      flexDirection,
      flexWrap,
      flexFlow,
      justifyContent,
      alignItems,
      alignContent,
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

Flex.Item = Item;

export default Flex;
