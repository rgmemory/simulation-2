import React, { Component } from 'react';
import './App.css';
import Wizard from './component/Wizard/Wizard';
import routes from './route'
// import Dashboard from './component/Dashboard/Dashboard'
import Header from './component/Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Dashboard />
        <Wizard /> */}

        {routes}

        
      </div>
    );
  }
}

export default App;
