import React from 'react';
import Card from './card';

export default class Board extends React.Component {

  render() {
    const { board } = this.props;
    return (
      <div className='board'>
        <div className = {`title ${board.title}`}>
          {board.title}
        </div>
        {
          <div className="cardContainer">
          { board.tasks.map(tasks => {
              return (
                <Card task={tasks} />
              )
            })
          }
          </div>
        }
        <button onClick={this.props.onClick}>
          + Add a card
        </button>
      </div>
    );
  }
}