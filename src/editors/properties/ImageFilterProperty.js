/* eslint-disable max-len */
import React from 'react';
import { Row, Col, Form, Tag, Slider } from 'antd';
import i18n from 'i18next';

export default {
  render(canvasRef, form, data) {
    return (
      <Row>
        <Row>
          <Col md={24} lg={6}>
            <Form.Item label={i18n.t('imagemap.filter.grayscale')} name='filters.grayscale'>
              <Tag.CheckableTag className="rde-action-tag">
                {'G'}
              </Tag.CheckableTag>
            </Form.Item>
          </Col>
          <Col md={24} lg={6}>
            <Form.Item label={i18n.t('imagemap.filter.invert')} name='filters.invert'>
              <Tag.CheckableTag className="rde-action-tag">
                {'I'}
              </Tag.CheckableTag>
            </Form.Item>
          </Col>
          <Col md={24} lg={6}>
            <Form.Item label={i18n.t('imagemap.filter.sepia')} name='filters.sepia'>
              <Tag.CheckableTag className="rde-action-tag">
                {'S'}
              </Tag.CheckableTag>
            </Form.Item>
          </Col>
          <Col md={24} lg={6}>
            <Form.Item label={i18n.t('imagemap.filter.brownie')} name='filters.brownie'>
              <Tag.CheckableTag className="rde-action-tag">
                {'B'}
              </Tag.CheckableTag>
            </Form.Item>
          </Col>
        </Row>
      </Row>
    );
  },
};
