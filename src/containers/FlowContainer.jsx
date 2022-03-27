import React, { useState } from 'react';
import { FlowContext } from '../contexts';

/**
 * FlowContainer
 *
 * @param {*} props x
 * @returns FlowContainer
 */
const FlowContainer = props => {
  const { children } = props;
  const [selectedFlowNode, setSelectedFlowNode] = useState(null);
  return (
    <FlowContext.Provider
      value={{
        selectedFlowNode,
        setSelectedFlowNode,
      }}
    >
      {children}
    </FlowContext.Provider>
  );
};

export default FlowContainer;
