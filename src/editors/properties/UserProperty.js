/* eslint-disable max-len */
import React from 'react';
import { Form } from 'antd';
import EditTable from '../../components/common/EditTable';

export default {
  render(canvasRef, form, data) {
    return (
      <React.Fragment>
        <Form.Item name='userProperty'>
          <EditTable userProperty={data.userProperty} form={form} />
        </Form.Item>
      </React.Fragment>
    );
  },
};
