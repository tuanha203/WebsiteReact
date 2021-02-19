import { combineReducers } from 'redux';
import { commentReduce } from './commentReduce';
import { userReduce } from './userReduce';

const reduceAll = combineReducers({
  comments: commentReduce,
  users: userReduce,
});

export default reduceAll;
