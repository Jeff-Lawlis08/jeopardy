import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import GameBoardPage from './components/GameBoardPage';
import GameBoard from './components/GameBoard';
import Columns from './components/Columns';
// import Box from './components/Box';
import store from './store';

const router = (
    <Router history={hashHistory}>
      <Route path="/" component={GameBoardPage}/>
    </Router>
);

export default router;
