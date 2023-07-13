import React from 'react';

function LikeButton({ onLikeClick, likes }) {
  return (
    <div>
      <p>{likes}</p>
      <button onClick={onLikeClick}>Like</button>
    </div>
  );
}

export default LikeButton;
