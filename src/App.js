import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import FindFriend from './Components/FindFriend/FindFriend';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar></Navbar>
       <FindFriend></FindFriend>
      </header>
    </div>
  );
}

export default App;
