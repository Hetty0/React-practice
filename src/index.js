import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import ErrorBoundary from './components/ErrorBoundary';
import App from './App';

const renderDom = (Component) => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
};
renderDom(App);
if (module.hot) {
  module.hot.accept('./App', () => {
    const Apps = require('./App').default;
    renderDom(Apps);
  });
}
