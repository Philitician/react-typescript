import React from 'react';
import './App.css';
import CalendarData from './service/CalendarData';


import requests from './requests';


function App() {

    return (
        <div className="App">
          <header className="App-header">
            <CalendarData path={ requests.fetchJumpdays } />
          </header>
        </div>
      );

}

export default App;