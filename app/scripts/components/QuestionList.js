import React from 'react';
import QuestionBox from './QuestionBox';

export default React.createClass({
  render(){
    // console.log(this.props);
    let values200 =  this.props.clues.filter((clue, i, arr)=>{
      if(clue.value===200)
        return clue;
      });
    let values400 =  this.props.clues.filter((clue, i, arr)=>{
      if(clue.value===400)
        return clue;
      });
    let values600 =  this.props.clues.filter((clue, i, arr)=>{
      if(clue.value===600)
        return clue;
      });
    let values800 =  this.props.clues.filter((clue, i, arr)=>{
      if(clue.value===800)
        return clue;
      });
    let values1000 =  this.props.clues.filter((clue, i, arr)=>{
      if(clue.value===1000)
        return clue;
      });
    return(
      <ul className="question-column">
        <QuestionBox clue={values200}/>
        <QuestionBox clue={values400}/>
        <QuestionBox clue={values600}/>
        <QuestionBox clue={values800}/>
        <QuestionBox clue={values1000}/>
      </ul>
    );
  }
});
