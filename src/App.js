import React from 'react';
import './App.css';
import {Provider} from 'react-redux'

import Posts from './Components/Posts';
import PostsForm from './Components/PostsForm';
import { applyMiddleware, createStore } from 'redux';


const store = createStore(() =>[], {}, applyMiddleware())

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header>
        <PostsForm />
        <Posts />
      </header>
    </div>
    </Provider>
  );
}

export default App;
