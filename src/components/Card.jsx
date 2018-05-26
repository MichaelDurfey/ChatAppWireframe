import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <button className="shift">
        {'<'}
      </button>
      {props.task}
    </div>
  )
}

export default Card;