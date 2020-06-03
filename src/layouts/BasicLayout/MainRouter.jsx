import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { routerConfig, exceptionRouterConfig } from '../../routerConfig';
import NotFound from '../../components/Exception/404';
import './index.scss';

export default class MainRouter extends Component {
  static displayName = 'MainRouter';

  constructor(props) {
    super(props);
    this.state = {};
  }

  // 渲染路由组件
  renderNormalRoute = (item) => {
    if (item && item.children && item.children.length > 0) {
      return item.children.map(child => (
        <Route
          key={item.path + child.path}
          path={item.path + child.path}
          component={child.component}
          exact
        />
      ));
    }
    return (
      <Route key={item.path} path={item.path} component={item.component} exact={item.exact} />);
  };

  render() {
    return (
      <Switch>
        {routerConfig.map(this.renderNormalRoute)}
        {exceptionRouterConfig.map(this.renderNormalRoute)}
        <Route component={NotFound} />
      </Switch>
    );
  }
}
