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



handleClick(i, value) {
  const input = window.prompt('new card?');
  let board = this.state.boards.slice();
  board[i].tasks.push(input);
  this.setState({
    board,
  })
}

  render() {
    return (
      <div className="container">
        {
          this.state.boards.map((board, index) => {
            return(
              <Board index={index} onClick={() => {this.handleClick(index)}}board={board} />
            )
          })
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
