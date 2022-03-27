/* eslint-disable max-len */
import React from 'react';
import { Form, Radio } from 'antd';
import i18n from 'i18next';

import UrlModal from '../../components/common/UrlModal';
import FileUpload from '../../components/common/FileUpload';

export default {
  render(canvasRef, form, data) {
    if (!data) {
      return null;
    }
    const imageLoadType = data.imageLoadType || 'file';
    return (
      <React.Fragment>
        <Form>
          <Form.Item label={i18n.t('imagemap.image.image-load-type')} colon={false} name='imageLoadType'>
            <Radio.Group size="small">
              <Radio.Button value="file">{i18n.t('imagemap.image.file-upload')}</Radio.Button>
              <Radio.Button value="src">{i18n.t('imagemap.image.image-url')}</Radio.Button>
            </Radio.Group>
          </Form.Item>
          {imageLoadType === 'file' ? (
            <Form.Item label={i18n.t('common.file')} colon={false} name='common.file'>
              <FileUpload accept="image/*" />
            </Form.Item>
          ) : (
            <Form.Item name='src'>
              <UrlModal form={form} />
            </Form.Item>
          )}
        </Form>
      </React.Fragment>
    );
  },
};
