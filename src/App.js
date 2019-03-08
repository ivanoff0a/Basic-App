import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import { Route } from 'react-router-dom';
import Gallery from './components/Gallery/Gallery.jsx';


class App extends Component {
  constructor() {
    super();
    this.state = {
      appName: 'Bag Shop',
      bags: [
        {
          pic: 'https://pp.userapi.com/c7007/v7007416/6b39d/ccboMsiNnjs.jpg',
          brand: 'Christian Dior'
        },
        {
          pic: 'https://pp.userapi.com/c7007/v7007416/6b3c1/qKkse8QmZ3k.jpg',
          brand: 'Christian Dior'
        },
        {
          pic: 'https://pp.userapi.com/c7007/v7007416/6b3b8/vjlGQYRihuY.jpg',
          brand: 'Christian Dior'
        }
      ]
    }
  }

  render() {

    return (
        <>
          <Navbar appName={this.state.appName}/>
          <Route exact path="/"
                 render={(props) => <Gallery bags={this.state.bags}/>}/>
        </>
    );
  }
}

export default App;