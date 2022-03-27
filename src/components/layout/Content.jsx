import React from 'react';
import { Layout, Spin } from 'antd';
import { useSelector } from 'react-redux';
import { selectEditor } from '../../slices/editorSlice';

const Content = (props) => {
  const { title, leftSider, content, rightSider, className, children } = props;

  const loading = useSelector(selectEditor).loading;

  return (
    <Spin spinning={loading}>
      <Layout className="rde-content-layout">
        {title}
        <Layout
          style={{
            overflowY: 'auto',
            overflowX: 'hidden',
            minHeight: `calc(100vh - ${title ? 98 : 60}px)`,
            height: `calc(100vh - ${title ? 98 : 60}px)`,
          }}
          className={className}
        >
          {leftSider}
          {content || children}
          {rightSider}
        </Layout>
      </Layout>
    </Spin>
  );
};


export default Content;
