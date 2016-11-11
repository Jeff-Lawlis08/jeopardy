import React from 'react';
import Backbone from 'backbone';
import Modal from './modal';
import store from '../store';
import _ from 'underscore';

export default React.createClass({

      getInitialState(){
        return {
          clicked: false,
          answered: false
        }
      },
      render(){
              // console.log(this.props.clue[0]);
        if(this.state.clicked===false && this.state.answered===false){
      return (
          <li onClick={this.handleQuestion}>
            {this.props.clue[0].value}
          </li>
      );
    } else if(this.state.clicked===true && this.state.answered===false){
      return (
        <div>
          <div className="modal-container">
            <div className="modal">
              <h3>{this.props.clue[0].question}</h3>
              <form id="answer-form">
                <input id="answer" type="text" placeholder="answer here"/>
                <input onClick={this.handleSubmit} type="submit" value="Submit"/>
              </form>
            </div>
          </div>
          <li></li>
        </div>
      );
    } else if(this.state.clicked===true && this.state.answered===true) {
      return(
      <li>

      </li>
    );
    }
  },
  handleQuestion(e){
    this.setState({
      clicked: true,
      answered: false
    });
  },
  handleSubmit(e){
    e.preventDefault();
    this.setState({
      clicked: true,
      answered: true
    });
      let userAnswer = document.getElementById('answer').value.toLowerCase().trim();
      let answer = this.props.clue[0].answer.toLowerCase().trim();
      if(userAnswer.indexOf(answer)>-1){
        store.session.answeredCorrect(this.props.clue[0].value);
      }
        console.log(store.session.get('points'));
  },

});
