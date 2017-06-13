import PropTypes from 'prop-types';
import React from 'react';
import { render } from 'react-dom';
import Store from './reducers';
import { boundInitApp } from './actions';
import Layout from './containers/layout.jsx';

const App = ({ store }) => (
  <Layout store={store} title="Todos App" />
);

const appRender = (store) => {
  render(<App store={store} />, document.getElementById('app'));
};

Store.subscribe(() => {
  appRender(Store);
});

boundInitApp();

App.propTypes = {
  store: PropTypes.object.isRequired,
};
