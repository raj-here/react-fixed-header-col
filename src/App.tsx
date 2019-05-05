import React, { Component } from 'react';
import './App.scss';
import FixedHeaderFirstColTable from './react-fixed-header-col/Table';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
          <FixedHeaderFirstColTable/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
