import React from 'react';
import './App.css';
import {Provider} from 'react-redux'

import Posts from './Components/Posts';
import PostsForm from './Components/PostsForm';
import Store from './Store'

function App() {
  return (
    <Provider Store={Store}>
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
