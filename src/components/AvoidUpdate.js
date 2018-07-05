// react 16 新特性 - 在setState时用null避免不必要的渲染，有助于提升页面的性能
/**适用情况：
 * 当页面已经渲染后，触发页面的某个动作(如：click)，会导致页面重新渲染
 * 如何避免这种情况？
 * 通过判断条件，不需要重新渲染时，将this.setState的返回值设置为null
 */ 

import React, {Component} from 'react';

class App extends Component {
  selectCity(e) {
    const newValue = e.target.value;
    this.setState(state => {
      if(state.city === newValue) {
        return null;
      }
      return {city: newValue};
    })
  }
  render() {
    return (
      <div></div>
    )
  }
}