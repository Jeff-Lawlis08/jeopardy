import React from 'react';
import store from '../store';

export default React.createClass({
  render(){
    return (
      <div className="scoreboard">
        <span>Money: ${this.props.session.points}</span>
      </div>
    );
  }
});
