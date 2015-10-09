import {
  REQUEST_PROJECTS,
  RECEIVE_PROJECTS
} from '../actions/projects';

export default function projects(state = { }, action) {
  switch (action.type) {
  case REQUEST_PROJECTS:
    return state;
  case RECEIVE_PROJECTS:
  console.log('I get projects!', action.projects.length);
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.projects,
      lastUpdated: action.receivedAt
    });
  default:
    return state;
  }
}
