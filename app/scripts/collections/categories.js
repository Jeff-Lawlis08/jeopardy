import Category from '../models/category';
import Backbone from 'backbone';
import $ from 'jquery';

export default Backbone.Collection.extend({
  model: Category,

  getCategories() {
    $.ajax({
      type: 'GET',
      url: 'http://jservice.io/api/category?id=136',
      success: (response) => {
        this.add(response);
      }
    });
    $.ajax({
      type: 'GET',
      url: 'http://jservice.io/api/category?id=42',
      success: (response) => {
        this.add(response);
      }
    });
    $.ajax({
      type: 'GET',
      url: 'http://jservice.io/api/category?id=780',
      success: (response) => {
        this.add(response);
      }
    });
    $.ajax({
      type: 'GET',
      url: 'http://jservice.io/api/category?id=21',
      success: (response) => {
        this.add(response);
      }
    });
    $.ajax({
      type: 'GET',
      url: 'http://jservice.io/api/category?id=105',
      success: (response) => {
        this.add(response);
      }
    });
    $.ajax({
      type: 'GET',
      url: 'http://jservice.io/api/category?id=25',
      success: (response) => {
        this.add(response);
      }
    });
  }
});
