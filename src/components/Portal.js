// react 16 新特性 - 用createPortal把组件渲染到当前组件树之外
/** ReactDom.createPortal(component, element)
 *   component 表示将要渲染的组件
 *   element 需要渲染到的节点
 */
import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Overlay extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    document.body.appendChild(this.container);
  }
  componentWillUnmount() {
    document.body.removeChild(this.container);
  }
  render() {
    return ReactDom.createPortal(
      <div className='overlay'> 
        <span className='overlay_close' onClick={this.props.onClose}>
          &times;
        </span>
        {this.props.children}
      </div>,
      this.container
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      overlayActive: true
    }
  }
  closeOverlay = () => {
    this.setState({
      overlayActive: false
    })
  }
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        {
          this.state.overlayActive &&  <Overlay onClose={this.closeOverlay} />
        }
      </div>
    )
  }
}