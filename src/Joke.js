import React, { Component } from "react";
import "./Joke.css";

/** A single joke, along with vote up/down buttons. */

const Joke = ({ id, vote, votes, text }) => {
  function thumbsUp (e)  { vote(id, +1) }
  function thumbsDown (e) { vote(id, -1) }
  return (
    <div className="Joke">
      <div className="Joke-votearea">
        <button onClick={ thumbsUp }>
          <i className="fas fa-thumbs-up" />
        </button>

        <button onClick={ thumbsDown }>
          <i className="fas fa-thumbs-down" />
        </button>

        {votes}
      </div>
      
      <div className="Joke-text">{text}</div>
    </div>
  );
}


export default Joke;
