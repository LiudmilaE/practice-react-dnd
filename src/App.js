import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import './App.css';

import Board from './containers/Board';

class App extends Component {
  render() {
    return (
      <div>
        {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Drag and Drop lab</h1>
              </header>
              <p className="App-intro">
          </p>*/}
          <Board knightPosition={this.props.knightPosition}/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
