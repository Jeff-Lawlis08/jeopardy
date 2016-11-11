import React from 'react';
import store from '../store';
import GameBoard from './GameBoard';
import Score from './Score';

export default React.createClass({



    getInitialState(){
      return {
        categories: store.categories.toJSON(),
        session: store.session.toJSON()
      };
    },

    componentWillMount(){
      store.categories.getCategories();
      store.categories.on('update change', ()=>{
        this.setState({
          categories: store.categories.toJSON()
        });
      });
      store.session.on('update change', ()=>{
        this.setState({
          session: store.session.toJSON()
        });
      })
    },
    render(){
    return (
  <div>
    <GameBoard categories={this.state.categories}/>
    <Score session={this.state.session}/>
  </div>
);
}
});
