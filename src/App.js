import React from 'react';
import ReactDom from 'react-dom';
// import ErrorBoundary from './components/ErrorBoundary';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
    // this.add = this.add.bind(this);
  }

  // render() {
  //   return (
  //     <div>
  //       <ErrorBoundary>
  //         <div>Hello World!</div>
  //       </ErrorBoundary>
  //     </div>
  //   )
  // }
  add = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
    console.log(this.state.count);
  }
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <button onClick={this.add}>add</button>
        <p>{this.state.count}</p>
        <p>aaaaa</p>
      </div>
    )
  }
}

export default App;