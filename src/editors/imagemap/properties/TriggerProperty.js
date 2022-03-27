/* eslint-disable max-len */
import React from 'react';
import { Form, Switch } from 'antd';
import i18n from 'i18next';

import CodeModal from '../../components/common/CodeModal';

export default {
  render(canvasRef, form, data) {
    return (
      <React.Fragment>
        <Form.Item label={i18n.t('imagemap.trigger.trigger-enabled')} colon={false} name='trigger.enabled'>
          <Switch size="small" />
        </Form.Item>
        <Form.Item style={{ display: data.trigger.enabled ? 'block' : 'none' }} name='trigger.code'>
          <CodeModal form={form} />
        </Form.Item>
      </React.Fragment>
    );
  },
};
