import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { HashRouter, Route } from 'react-router-dom';
import MovieList from './components/MovieList';

const routes = 
  <div>
    <Route exact path="/" component={MovieList} />
  </div>;
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>{routes}</HashRouter>
      </Provider>
    );
  }
}

export default App;
