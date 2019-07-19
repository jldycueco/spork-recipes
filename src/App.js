import React from 'react';
import Nav from './components/Nav' 
import {BrowserRouter as Router} from 'react-router-dom'
import AppRouter from './components/Routes'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;