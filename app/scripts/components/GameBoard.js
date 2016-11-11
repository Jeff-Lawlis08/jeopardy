import React from 'react';
import Columns from './Columns';

export default React.createClass({
  render(){
    // console.log(this.props.categories);
    let allColumns = this.props.categories.map((category, i, arr) => {
      return <Columns key={category.title} category={category}/>
    })
    return(
      <ul>
        {allColumns}
      </ul>
      // <ul><Columns/></ul>
    );
  }
});
