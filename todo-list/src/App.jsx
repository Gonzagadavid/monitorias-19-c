import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>To Do List</header>
        <ul>
          <li>tarefa 1</li>
          <li>tarefa 2</li>
          <li>tarefa 3</li>
          <li>tarefa 4</li>
        </ul>
        <div>
          <input />
          <button type="button">add task</button>
        </div>
      </div>

    );
  }
}

export default App;
