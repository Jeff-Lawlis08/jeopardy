import React from 'react';
import CategoryBox from './CategoryBox';
import QuestionList from './QuestionList';

export default React.createClass({
  render(){
    return(
      <li>
        <ul>
          <CategoryBox title={this.props.category.title}/>
          <QuestionList clues={this.props.category.clues}/>
        </ul>
      </li>
    )
  }
});
// <QuestionList/>
