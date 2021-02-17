import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch}  from "react-router-dom";
import {Home} from './components/Home';
import {Users} from './components/Users';

class App extends React.Component {
  state = {};
  render(){
  return (
      <div className="App">
        
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route  path="/(korisnici|users|user|)" component={Users}></Route>
          <Route path="*" render={()=><h1>404 Not Found</h1>}></Route>
          </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
