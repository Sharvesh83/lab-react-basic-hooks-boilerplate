import React, { useState } from 'react';
import './App.css';
import CommentSection from './components/CommentSection';
import LikeButton from './components/LikeButton';

function App() {
  const [likes, setLikes] = useState(0);
  const [isCommentVisible, setIsCommentVisible] = useState(false);
  const [isDivBlack, setIsDivBlack] = useState(true);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleCommentClick = () => {
    setIsCommentVisible(!isCommentVisible);
    alert('Comment button clicked');
  };

  const handleToggleClick = () => {
    setIsDivBlack(!isDivBlack);
  };

  return (
    <div className={`App ${isDivBlack ? 'black' : 'grey'}`}>
      <div className="toggle-container">
        <button className="ToggleButton" onClick={handleToggleClick}>
          Toggle
        </button>
      </div>
      <div className="container">
        <CommentSection
          onCommentClick={handleCommentClick}
          isCommentVisible={isCommentVisible}
        />
        <LikeButton onLikeClick={handleLikeClick} likes={likes} />
      </div>
    </div>
  );
}

export default App;
