/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import About from '@/containers/About/';
import Home from '@/containers/Home/';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route exect path="/home" component={Home} />
          <Route exect path="/about" component={About} />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
