import React from 'react';
import { Form } from 'antd';
import UrlModal from '../../components/common/UrlModal';

export default {
  render(canvasRef, form, data) {
    if (!data) {
      return null;
    }
    return (
      <Form>
        <Form.Item name='src'>
          <UrlModal form={form} />
        </Form.Item>
      </Form>

    );
  },
};
