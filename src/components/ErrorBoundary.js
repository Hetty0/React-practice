// react 16 新特性 - 错误捕获

import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }
  /**
   * 
   * @param {*} err 错误实例
   * @param {*} info 跟错误有关的堆栈信息
   */
  componentDidCatch(err, info) { // 能够捕获当前组件及子组件的错误
    this.setState({ hasError: true});
  }
  render() {
    if(this.state.hasError) {
      return <div>Oops, something went wrong!</div>
    }
    return this.props.children;
  }
};

export default ErrorBoundary;
