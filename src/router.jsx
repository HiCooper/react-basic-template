/**
 * 定义应用路由
 */
import { HashRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import { BackTop, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import BasicLayout from './layouts/BasicLayout';
import BlankLayout from './layouts/BlankLayout';

(() => {
  const throttle = (type, name, obj = window) => {
    let running = false;
    const func = () => {
      if (running) {
        return;
      }

      running = true;
      requestAnimationFrame(() => {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };

    obj.addEventListener(type, func);
  };

  if (typeof window !== 'undefined') {
    throttle('resize', 'optimizedResize');
  }
})();

const getDevice = (width) => {
  const isPhone = typeof navigator !== 'undefined' && navigator && navigator.userAgent.match(/phone/gi);
  if (width < 680 || isPhone) {
    return 'phone';
  } if (width < 1280 && width > 680) {
    return 'tablet';
  }
  return 'desktop';
};

// 按照 Layout 分组路由
// BlankLayout 对应的路由：/user/xxx
// BasicLayout 对应的路由：/xxx
const Router = () => {
  let device = getDevice(NaN)

  if (typeof window !== 'undefined') {
    window.addEventListener('optimizedResize', (e) => {
      const deviceWidth = (e && e.target && e.target.innerWidth) || NaN;
      device = getDevice(deviceWidth)
    });
  }

  return (
    <ConfigProvider locale={zhCN} device={device}>
      <BackTop />
      <HashRouter>
        <Switch>
          <Route path="/user/*" component={BlankLayout} />
          <Route path="/" component={BasicLayout} />
        </Switch>
      </HashRouter>
    </ConfigProvider>
  );
}

export default Router();
