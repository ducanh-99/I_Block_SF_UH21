import React from 'react';
import ReactDOM from 'react-dom';
import i18n from 'i18n';
import { I18nextProvider } from 'react-i18next';
import { ConfigProvider } from 'antd';
import { localizationConstants } from 'constants/index';
import { localizationHelpers } from 'helpers';
import App from './App';
import * as serviceWorker from './serviceWorker';

const { REGIONS } = localizationConstants;
const { getCurrentLanguage } = localizationHelpers;

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <ConfigProvider locale={REGIONS[getCurrentLanguage()].antdLocale}>
      <App />
    </ConfigProvider>
  </I18nextProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();