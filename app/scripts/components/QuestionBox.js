import React from 'react';
import Backbone from 'backbone';
import Modal from './modal';
import store from '../store';

export default React.createClass({

      // console.log(this.props);
      getInitialState(){
        return {
          clicked: false,
          answered: false
        }
      },
      render(){
        if(this.state.clicked===false && this.state.answered===false){
      return (
          <li onClick={this.handleQuestion}>
            {this.props.clue[0].value}
          </li>
      );
    } else if(this.state.clicked===true && this.state.answered===false){
      return (
        <div>
          <h3>{this.props.clue[0].question}</h3>
          <form id="answer-form">
            <input id="answer" type="text" placeholder="answer here"/>
            <input onClick={this.handleSubmit} type="submit" value="Submit"/>
          </form>
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
      if(answer.indexOf(userAnswer)>-1){
        store.session.answeredCorrect(this.props.clue[0].value);
      }
        console.log(store.session.get('points'));
  },

});
