/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React, { useState } from 'react';
import { Modal, Form, Radio } from 'antd';
import i18n from 'i18next';

import InputHtml from './InputHtml';
import FileUpload from './FileUpload';

const SVGModal = props => {
  const { onOk, onCancel, visible } = props;

  const [state, setState] = useState({
    loadType: 'file',
  });


  const [form] = Form.useForm();

  const handleChangeSvgType = e => {
    form.resetFields();
    setState({
      loadType: e.target.value,
    });
  };

  const handleOk = () => {
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      if (values.svg instanceof Blob) {
        const reader = new FileReader();
        reader.readAsDataURL(values.svg);
        reader.onload = () => {
          onOk({ ...values, svg: reader.result });
        };
      } else {
        onOk(values);
      }
    });
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
      return;
    }
    setState({
      visible: false,
    });
  };

  return (
    <Modal
      title={i18n.t('imagemap.svg.add-svg')}
      closable
      onCancel={handleCancel}
      onOk={handleOk}
      visible={visible}
    >
      <Form
        form={form}
        colon={false}>
        <Form.Item label={i18n.t('common.type')}>
          <Radio.Group onChange={handleChangeSvgType}>
            <Radio.Button value="file">{i18n.t('common.file')}</Radio.Button>
            <Radio.Button value="svg">{i18n.t('common.svg')}</Radio.Button>
          </Radio.Group>,
        </Form.Item>
        <Form.Item label={state.loadType === 'svg' ? i18n.t('common.svg') : i18n.t('common.file')}>
          {state.loadType === 'svg' ? <InputHtml /> : <FileUpload accept=".svg" />}
        </Form.Item>
      </Form>
    </Modal>
  );
};


export default SVGModal;
