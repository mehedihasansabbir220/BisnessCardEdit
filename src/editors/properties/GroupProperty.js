import React from 'react';
import { Form, Input, Slider, Col, InputNumber, Row } from 'antd';

export default {
  render(canvasRef, form, data) {
    const { getFieldDecorator } = form;
    return (
      <React.Fragment>
        <Form>
          <Form.Item label="Name" colon={false} name='name'>
            <Input />
          </Form.Item>
          <Row>
            <Col span={12}>
              <Form.Item label="Width" colon={false} name='width'>
                <InputNumber />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Height" colon={false} name='height'>
                <InputNumber />
              </Form.Item>
            </Col>
          </Row>
          {/* <Row>
            <Col span={12}>
              <Form.Item label="Left" colon={false}>
                {getFieldDecorator('left', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input x position',
                    },
                  ],
                  initialValue: data.left,
                })(<InputNumber />)}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Top" colon={false}>
                {getFieldDecorator('top', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input y position',
                    },
                  ],
                  initialValue: data.top,
                })(<InputNumber />)}
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="Rotation" colon={false}>
            {getFieldDecorator('angle', {
              rules: [
                {
                  type: 'number',
                  required: true,
                  message: 'Please input rotation',
                },
              ],
              initialValue: data.angle,
            })(<Slider min={0} max={360} />)}
          </Form.Item> */}
        </Form>

      </React.Fragment>
    );
  },
};
