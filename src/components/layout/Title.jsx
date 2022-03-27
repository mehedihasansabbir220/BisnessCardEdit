import { Button, Modal, Tooltip } from 'antd';
import i18next from 'i18next';
import React, { useState } from 'react';
import { Flex } from '../flex';
import { ShortcutHelp } from '../help';
import Icon from '../icon/Icon';

/**
 * Title
 *
 * @returns Title
 */
function Title() {
  const [visible, setVisible] = useState(false);

  const goDocs = () => {
    window.open('https://salgum1114.github.io/react-design-editor/docs');
  };

  const showHelp = () => {
    setVisible(true);
  };

  return (
    <Flex
      style={{
        background: 'linear-gradient(141deg,#23303e,#404040 51%,#23303e 75%)',
      }}
      flexWrap="wrap"
      flex="1"
      alignItems="center"
    >
      <Flex style={{ marginLeft: 8 }} flex="0 1 auto">
        <span style={{ color: '#fff', fontSize: 24, fontWeight: 500 }}>
          Business Card Editor
        </span>
      </Flex>
      {/* <Flex style={{ marginLeft: 88 }}>
        <Menu
          mode="horizontal"
          theme="dark"
          style={{ background: "transparent", fontSize: "16px" }}
          onClick={this.props.onChangeEditor}
          selectedKeys={[this.props.currentEditor]}
        >
          <Menu.Item key="imagemap" style={{ color: "#fff" }}>
            {i18next.t("imagemap.imagemap")}
          </Menu.Item>
          <Menu.Item key="workflow" style={{ color: "#fff" }}>
            {i18next.t("workflow.workflow")}
          </Menu.Item>
          <Menu.Item key="flow" style={{ color: '#fff' }}>
            {i18n.t('flow.flow')}</Menu.Item>
          <Menu.Item key="hexgrid" style={{ color: '#fff' }}>
{i18next.t('hexgrid.hexgrid')}
</Menu.Item>
<Menu.Item key="fiber" style={{ color: '#fff' }}>
{i18next.t('fiber.fiber')}
</Menu.Item>
        </Menu>
      </Flex> */}
      <Flex flex="1" justifyContent="flex-end"></Flex>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        closable={true}
        footer={null}
        width="50%"
      >
        <ShortcutHelp />
      </Modal>
    </Flex>
  );
}

export default Title;
