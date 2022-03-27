import React from 'react';
import { Flex } from '../../components/flex';
import ImageMapActions from './ImageMapActions';
import i18n from 'i18next';

/**
 *
 * @param {*} props props
 * @returns ImageMapTitle
 */
function ImageMapTitle(props) {
  const { children, content } = props;
  if (children) {
    return children;
  }

  return (
    <Flex className="rde-content-layout-title"
      alignItems="center" flexWrap="wrap">
      <Flex.Item flex="0 1 auto">
        <Flex
          className="rde-content-layout-title-title"
          justifyContent="flex-start"
          alignItems="center"
        >
          {/* title */}
          <React.Fragment>
            <span>{i18n.t('imagemap.imagemap-editor')}</span>
          </React.Fragment>
        </Flex>
      </Flex.Item>
      <Flex.Item flex="auto">
        <Flex className="rde-content-layout-title-content" alignItems="center">
          {content}
        </Flex>
      </Flex.Item>
      <Flex.Item flex="auto">
        <Flex className="rde-content-layout-title-action"
          justifyContent="flex-end" alignItems="center">
          <ImageMapActions />
        </Flex>
      </Flex.Item>
    </Flex>
  );
}


export default ImageMapTitle;
