// react 16 新特性 - 用TextOnlyComponent 减少DOM层级

import React from 'react';

const Comment = ({text}) => text.replace(':)', '[smile]');

class App extends React.Component {
  render () {
    return (
      <div>
        <Comment text='Text only components are awesome! :)' />
      </div>
    )
  }
}