import React from 'react';
import { Form } from 'antd';

import ChartModal from '../../components/common/ChartModal';

export default {
  render(canvasRef, form, data) {
    if (!data) {
      return null;
    }
    return (
      <Form.Item name="chartOption">
        <ChartModal form={form} />
      </Form.Item>
    );
  },
};
