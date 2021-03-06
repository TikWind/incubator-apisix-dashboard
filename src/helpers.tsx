import React from 'react';
import { notification } from 'antd';
import { MenuDataItem } from '@ant-design/pro-layout';

import { codeMessage, DEFAULT_BASE_URL } from './constants';
import IconFont from './iconfont';

export const getMenuData = (): MenuDataItem[] => {
  return [
    {
      name: 'metrics',
      path: '/metrics',
      icon: <IconFont type="icondashboard" />,
    },
    {
      name: 'routes',
      path: '/routes/list',
      icon: <IconFont type="iconroute" />,
    },
    {
      name: 'ssl',
      path: '/ssl/list',
      icon: <IconFont type="iconSSLshuzizhengshu" />,
    },
    {
      name: 'upstream',
      path: '/upstream/list',
      icon: <IconFont type="iconupstream" />,
    },
    {
      name: 'consumer',
      path: '/consumer/list',
      icon: <IconFont type="iconfuwuliebiao" />,
    },
    {
      name: 'setting',
      path: '/settings',
      icon: <IconFont type="iconsetting" />,
    },
  ];
};

export const isLoginPage = () => window.location.pathname.indexOf('/login') !== -1;

/**
 * 异常处理程序
 */
export const errorHandler = (error: { response: Response; data: any }): Promise<Response> => {
  const { response } = error;
  if (response && response.status) {
    if ([401].includes(response.status) && !isLoginPage()) {
      localStorage.clear();
      window.location.href = '/login';
    }

    const errorText =
      error.data.msg || error.data.message || error.data.error_msg || codeMessage[response.status];

    notification.error({
      message: `请求错误，错误码： ${error.data.errorCode || response.status}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  return Promise.reject(response);
};

export const getBaseURL = () =>
  localStorage.getItem('GLOBAL_SETTING_API_BASE_URL') || DEFAULT_BASE_URL;
export const setBaseURL = (url = '') => localStorage.setItem('GLOBAL_SETTING_API_BASE_URL', url);
