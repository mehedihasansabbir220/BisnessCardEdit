import React from 'react';
import { Form } from 'antd';
import AceModal from '../../components/ace/AceModal';

export default {
  render(canvasRef, form, data) {
    if (!data) {
      return null;
    }
    return (
      <Form>
        <Form.Item name='code'>
          <AceModal form={form} code={data.code} />
        </Form.Item>
      </Form>
    );
  },
};
