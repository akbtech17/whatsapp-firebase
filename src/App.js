// import  from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Login from './login'


function App() {

  const [user, setUser] = useState(null);


  return (
    <div className="app">
      
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Router>
          <Sidebar />
            <Switch>
              <Route path="/rooms/:roomID">
                <Chat />
              </Route> 
              <Route path="/">
                {/* <Chat /> */}
              </Route>     
            </Switch>
          </Router>
          </div>
          
        )}
        
       
    </div>
  );
}

export default App;
