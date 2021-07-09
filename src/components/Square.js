import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: isWinningSquare ? 'bold' : 'Normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
