export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const RECEIVE_PROJECTS = 'RECEIVE_PRIOJECTS';
export const SORT_PROJECTS = 'SORT_PRIOJECTS';

function requestProjects() {
  return {
    type: REQUEST_PROJECTS
  };
}

function receiveProjects(projects) {
  return {
    type: RECEIVE_PROJECTS,
    projects: projects
  };
}

export function fetchProjects() {
  return dispatch => {
    console.log('Fetching projects...');
    dispatch(requestProjects());
    return window.fetch(`https://bestofjs-data.divshot.io/projects.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveProjects(json.projects)));
  };
}
