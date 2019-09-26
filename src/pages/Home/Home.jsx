import React, { Component } from 'react';
import Calculator from '../../components/Calculator';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Calculator />
      </div>
    )
  }
}

export default Home;