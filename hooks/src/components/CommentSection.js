import React from "react";

function CommentSection({ onCommentClick, isCommentVisible }) {
  return (
    <div>
      <button onClick={onCommentClick}>Comment</button>
      {isCommentVisible && (
        <p>
          He covered the noise, but it didn't make much sense. It would be
          obvious to anyone who walked into the room that someone was hiding.
          However, he still held out hope. He heard footsteps coming down the
          hall and stop in front of the bedroom door. He heard the squeak of
          door hinges, and someone opened it. He was waiting, about to discover
          who had arrived.
        </p>
      )}
    </div>
  );
}

export default CommentSection;
