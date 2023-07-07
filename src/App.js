import './App.css';
import TimerApp from './clock';
import BARAK from './images/BARAK.jpeg'
import React from 'react';

function App() {
  return (
    
    <div className="App">
      <body className="App-header">
      <div className="BARAK">
      <a href="https://static.boredpanda.com/blog/wp-content/uploads/2015/07/gorilla-middle-finger-bob-pitchford-bristol-zoo-1.jpg" target="_blank" rel="noopener noreferrer"> 
      <img src={BARAK} alt="baraktheboss" style={{top: 200, left: 380, position: 'absolute'}}/>

    </a>

      </div>  
        <div className='ribua'>
          <TimerApp></TimerApp>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
         this is clock, very nice!
        </p>
        <a
        
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        
        >
          
        </a>
      </body>
    </div>
  );
}

export default App;
