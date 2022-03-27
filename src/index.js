import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import koKR from 'antd/lib/locale-provider/ko_KR';
import enUS from 'antd/lib/locale-provider/en_US';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import i18next from 'i18next';
import { i18nClient } from './i18n';


const antResources = {
  'ko': koKR,
  'ko-KR': koKR,
  'en': enUS,
  'en-US': enUS,
};


i18nClient();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={antResources[i18next.language]}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
