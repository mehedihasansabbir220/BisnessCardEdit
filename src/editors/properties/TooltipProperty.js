/* eslint-disable max-len */
import React from 'react';
import { Form, Switch } from 'antd';
import i18n from 'i18next';

export default {
  render(canvasRef, form, data) {
    if (!data) {
      return null;
    }
    return (
      <Form.Item label={i18n.t('imagemap.tooltip.tooltip-enabled')} colon={false} name='tooltip.enabled'>
        <Switch size="small" />
      </Form.Item>
    );
  },
};
