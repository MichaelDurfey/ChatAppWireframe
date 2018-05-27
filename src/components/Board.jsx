import React from 'react';
import Card from './card';

export default class Board extends React.Component {

  render() {
    const { board, addTask, index, last, handleLeftClick, handleRightClick} = this.props;
    return (
      <div className='board'>
        <div className = {`title ${board.title}`}>
          {board.title}
        </div>
        {
          <div className="cardContainer">
          { 
            board.tasks.map((tasks, taskIndex) => {
              return (
                <Card 
                leftClick={handleLeftClick} 
                rightClick={handleRightClick} 
                index={index} 
                last={last} 
                task={tasks} 
                tIndex={taskIndex} />
              )
            })
          }
          </div>
        }
        <div className="addTaskContainer">
          <button className="addTaskButton" onClick={addTask}>
            + Add a card
          </button>
        </div>
      </div>
    );
  }
}