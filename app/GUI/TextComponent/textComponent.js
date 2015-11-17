import React, {Component} from 'react';

import DR2 from 'd3-react-squared';
import WrappedComponent from './wrappedComponent';

export default class TextComponent extends Component {
  render() {
    return (<DR2
      component={WrappedComponent}
      {...this.props}
    />);
  }
}
