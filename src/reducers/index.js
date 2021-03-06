import { combineReducers } from 'redux';
import counter from './counter';
import projects from './projects';

const rootReducer = combineReducers({
  counter,
  projects
});

export default rootReducer;
