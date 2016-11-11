import Backbone from 'backbone';
import Categories from './collections/categories';
import React from 'react';
import Session from './models/session';

export default {
  categories: new Categories(),
  session: new Session()
};
