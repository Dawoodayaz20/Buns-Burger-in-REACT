import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homePage.component';
import Header from './components/header/header.component';


class App extends React.Component {
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  render() {
    return (
      <div>
        <Header />
        <HomePage />
      </div>
    )
  }
}

export default App;
