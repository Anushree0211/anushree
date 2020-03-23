import React from 'react';
import Main from './Component/Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css';

function App(){
  return (
    <MuiThemeProvider>
    <div className="App">
      <div className='Content'>
      <Main />

      </div>
    </div>
    </MuiThemeProvider>
    
  );
}

export default App;