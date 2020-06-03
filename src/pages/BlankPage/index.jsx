import React, { Component } from 'react';
import PageHeaderWrapper from '../../components/PageHeaderWrapper';

export default class BlankPage extends Component {
  static displayName = 'BlankPage';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageHeaderWrapper>
        BlankPage
      </PageHeaderWrapper>
    );
  }
}
