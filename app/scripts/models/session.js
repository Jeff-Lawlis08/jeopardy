import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    points: 0,
    // correctAnswers: 0,
    // totalGuessed: 0,
    // skipped: 0
  },
  answeredCorrect(value){
    this.set('points', this.get('points')+value);
  }
});
