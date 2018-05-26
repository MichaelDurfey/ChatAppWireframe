import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [
        {
          title: 'Winnie',
          tasks: [
            'go somewhere',
            'eat something',
          ],
        },
        {
          title: 'Bob',
          tasks: [
            'foo',
            'bar'
          ],
        },
        {
          title: 'Thomas',
          tasks: [
            'foo',
            'bar'
          ],
        },
        {
          title: 'George',
          tasks: [
            'foo',
            'bar'
          ],
        },
      ]
    };
  }



handleClick(i) {
  const input = window.prompt('new card?');
  let board = this.state.boards.slice();
  board[i].tasks.push(input);
  this.setState({
    board,
  });
}

handleLeftClick(i, taskIndex) {
  const board = this.state.boards.slice();
  const taskToMove = board[i].tasks[taskIndex];
  board[i].tasks.splice(taskIndex, 1);
  board[i - 1].tasks.push(taskToMove);
  this.setState({
    board,
  });
}

handleRightClick(i, taskIndex) {
  const board = this.state.boards.slice();
  const taskToMove = board[i].tasks[taskIndex];
  board[i].tasks.splice(taskIndex, 1);
  board[i + 1].tasks.push(taskToMove);
  this.setState({
    board,
  });
}

  render() {
    return (
      <div className="container">
        {
          this.state.boards.map((board, index) => {
            return(
              <Board 
              handleLeftClick={(i, taskIndex) => this.handleLeftClick(i, taskIndex)}
              handleRightClick={(i, taskIndex) => this.handleRightClick(i, taskIndex)}
              index={index} 
              last={this.state.boards.length - 1} 
              onClick={() => {this.handleClick(index)}}
              board={board} />
            )
          })
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
