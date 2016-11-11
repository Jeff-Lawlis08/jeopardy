import Backbone from 'backbone';

export default Backbone.model.extend({
  defaults: {
    text: '',
    answer: '',
    pointVal: '',
    category: '',
    id: '',
    answered: false

  }
});
