/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import { Button } from 'antd';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Icon from '../components/icon/Icon';

class ImageMapPreview extends Component {
  static propTypes = {
    preview: PropTypes.bool,
    onChangePreview: PropTypes.func,
    onTooltip: PropTypes.func,
    onAction: PropTypes.func,
    objects: PropTypes.any,
  };

  render() {
    const { onChangePreview, onTooltip, onClick, preview, objects } = this.props;
    const previewClassName = classnames('rde-preview', { preview });
    return (
      preview && (
        <div className={previewClassName}>
          <div
            ref={(c) => {
              this.container = c;
            }}
            style={{
              overvlow: 'hidden',
              display: 'flex',
              flex: '1',
              height: '100%',
            }}
          >
            {/* TODO: uncomment this */}
            {/* <Canvas
              editable={false}
              className="rde-canvas"
              canvasOption={{
                perPixelTargetFind: true,
              }}
              keyEvent={{
                grab: false,
              }}
              onLoad={handler => handler.importJSON(objects)}
              onTooltip={onTooltip}
              onClick={onClick}
              maxZoom={500}
            /> */}
            <Button className="rde-action-btn rde-preview-close-btn" onClick={onChangePreview}>
              <Icon name="times" size={1.5} />
            </Button>
          </div>
        </div>
      )
    );
  }
}

export default ImageMapPreview;
