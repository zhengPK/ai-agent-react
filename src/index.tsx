import React from 'react';
import ReactDOM from 'react-dom/client';
import { IndexApp } from './layouts/routes';
import { ConfigProvider } from 'antd';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <>
    <ConfigProvider>{IndexApp}</ConfigProvider>
  </>
);
