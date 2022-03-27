/* eslint-disable max-len */
import React from 'react';
import { Row, Col, Form, Button, Select, Switch, Slider, InputNumber } from 'antd';
import ColorPicker from '../../components/common/ColorPicker';

export default {
  render(canvasRef, form, data) {
    if (!data) {
      return null;
    }
    const type = data.animation.type || 'none';
    return (
      <React.Fragment>
        <Form>
          <Form.Item label="Animation Type" colon={false} name='animation.type'>
            <Select>
              <Select.Option value="none">None</Select.Option>
              <Select.Option value="fade">Fade</Select.Option>
              <Select.Option value="bounce">Bounce</Select.Option>
              <Select.Option value="shake">Shake</Select.Option>
              <Select.Option value="scaling">Scaling</Select.Option>
              <Select.Option value="rotation">Rotation</Select.Option>
              <Select.Option value="flash">Flash</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </React.Fragment>
    );
  },
};
