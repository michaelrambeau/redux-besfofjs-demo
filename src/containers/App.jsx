import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Demo from '../components/Demo';
import * as CounterActions from '../actions/counter';
import * as ProjectsActions from '../actions/projects';

function mapStateToProps(state) {
  return {
    counter: state.counter,
    projects: state.projects.items
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(CounterActions, dispatch);
// }

const actions = {
  increment: CounterActions.increment,
  decrement: CounterActions.decrement,
  fetchProjects: ProjectsActions.fetchProjects
};
export default connect(mapStateToProps, actions)(Demo);
