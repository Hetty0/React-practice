// react 16 新特性 - 在render中返回没有容器元素的多个元素
// 减少react渲染的嵌套层级

import React from 'react';

const Fruits = () => [
  <li>Pear</li>,
  <li>Water Melon</li>
]

class App extends React.Component {
  render() {
    return [
      <ul>
        <li>Apple</li>
        <li>Banana</li>
        <Fruits />
      </ul>,
      <div>this is a div element</div>
    ]
  }
}
