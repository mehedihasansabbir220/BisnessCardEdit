import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withResizeDetector } from 'react-resize-detector';
import { Rnd } from 'react-rnd';

/**
 * User's dasboard container
 * @returns {Object} props Component props
 */
const DnDCustom = () => {
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 1px #ddd',
    background: '#f0f0f0',
  };
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(200);
  const [x, setX] = useState(200);
  const [y, setY] = useState(200);

  const [widthImage, setWidthImage] = useState(400);
  const [heightImage, setHeightImage] = useState(300);
  const [xImage, setXImage] = useState(500);
  const [yImage, setYImage] = useState(500);


  return (
    <div style={{ height: '800px' }}>
      <Rnd
        style={style}
        size={{ width: width, height: height }}
        position={{ x: x, y: y }}
        onDragStop={(e, d) => {
          setX(d.x);
          setY(d.y);
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setWidth(ref.style.width);
          setHeight(ref.style.height);
        }}
      >
        Drag And Resize Tilte
      </Rnd>
      <Rnd
        style={style}
        size={{ width: widthImage, height: heightImage }}
        position={{ x: xImage, y: yImage }}
        onDragStop={(e, d) => {
          setXImage(d.x);
          setYImage(d.y);
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setWidthImage(ref.style.width);
          setHeightImage(ref.style.height);
        }}
      >
        <figure className="image is-64x64">
          <img
            src="https://avatars1.githubusercontent.com/u/10220449?v=3&s=460"
            draggable="false"
            alt="github avatar"
          />
        </figure>
      </Rnd>
    </div>
  );
};


export default DnDCustom;
