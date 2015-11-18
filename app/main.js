/* global __DEVTOOLS__ */

// BASICS
require('react-bootstrap');
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('babel/polyfill');

// REACT-ROUTER
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router';
import {Button} from 'react-bootstrap';

// REDUX
import {combineReducers, createStore, compose, }
  from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import { devTools } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import createHistory from 'history/lib/createBrowserHistory';

// REDUX-REACT-ROUTER
import {
  ReduxRouter,
  routerStateReducer,
  reduxReactRouter,
} from 'redux-react-router';

import Main from './GUI/mainContainer';

const reducer = combineReducers(Object
  .assign({}, reducers, {router: routerStateReducer}));

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}


App.propTypes = {
  children: PropTypes.object,
};

const routes = (
  <Route component={App}>
    <Route component={Main} path={'/'}/>}
    <Route component={Main} path={'/dogs/'}/>}
  </Route>
);

const store = compose(
  reduxReactRouter({
    routes,
    createHistory,
  }),
  devTools()
)(createStore)(reducer);

class Root extends Component {
  constructor() {
    super();
    this.state = {
      showDebug: false,
    };
  }

  render() {
    const {showDebug} = this.state;
    const debug = [];
    const debugButton = [];
    if (__DEVTOOLS__) {
      debugButton.push(<Button
        bsSize={'small'}
        bsStyle={'danger'}
        key={'dbgBtn'}
        onClick={() => {this.setState({showDebug: !showDebug});}}
      >Debug
      </Button>);
      debugButton.push(<hr key={'hr'}/>);
      if (showDebug) {
        debug.push(
          <DebugPanel bottom right top key={'dbgPnl'}>
            <DevTools monitor={LogMonitor} store={store}/>
          </DebugPanel>
        );
      }
    }

    return (
      <div>
        <Provider store={store}>
          <ReduxRouter />
        </Provider>
        {debug}
        <hr/>
        {debugButton}
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('app'));

