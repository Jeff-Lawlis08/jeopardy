import React from 'react';
import store from '../store';
import GameBoard from './GameBoard';

export default React.createClass({



    getInitialState(){
      return {
        categories: store.categories.toJSON()
      };
    },

    componentWillMount(){
      store.categories.getCategories();
      store.categories.on('update change', ()=>{
        this.setState({
          categories: store.categories.toJSON()
        });
      });
    },
    render(){
    return (
  <div>
    <GameBoard categories={this.state.categories}/>
  </div>
);
}
});
