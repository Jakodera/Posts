import React from 'react';
import './App.css';

import Posts from './Components/Posts';
import PostsForm from './Components/PostsForm';

function App() {
  return (
    <div className="App">
      <header>
        <PostsForm />
        <Posts />
      </header>
    </div>
  );
}

export default App;
