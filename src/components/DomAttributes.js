// react 16 新特性 - 更加自由的DOM属性

import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div my-attribute='value'></div>
    )
  }
}