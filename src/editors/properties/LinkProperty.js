/* eslint-disable max-len */
import React from 'react';
import { Form, Select, Switch, Input } from 'antd';
import i18n from 'i18next';

export default {
  render(canvasRef, form, data) {
    return (
      <React.Fragment>
        <Form>
          <Form.Item label={i18n.t('imagemap.link.link-enabled')} colon={false} name='link.enabled'>
            <Switch size="small" />
          </Form.Item>
        </Form>

        {data.link.enabled ? (
          <React.Fragment>
            <Form.Item label={i18n.t('common.state')} colon={false} name='link.state'>
              <Select>
                <Select.Option value="current">{i18n.t('common.current')}</Select.Option>
                <Select.Option value="new">{i18n.t('common.new')}</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label={i18n.t('common.url')} colon={false} name='link.url'>
              <Input />
            </Form.Item>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  },
};
