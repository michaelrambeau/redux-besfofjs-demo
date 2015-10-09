var React = require('react');

var ProjectList = React.createClass({
  componentWillMount: function() {
    console.log('request>>>');
    this.props.fetchProjects();
  },
  render: function() {
    console.log('Rendering the project list');
    var { projects } = this.props;
    projects = projects.slice(0,20);
    return (
      <div>
        <h3>Project list</h3>

        { projects.length > 0 ? (<table className="ui celled table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Stars</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            { projects.map( (project, i) =>
              <ProjectRow key={project._id} project={project} index={ i }  />
             ) }
          </tbody>
        </table>) : (
          <p>No project!</p>
        )}
      </div>
    );
  }

});



var ProjectRow = React.createClass({

  render: function() {
    var { project, index } = this.props;
    return (
      <tr>
        <td>{ index + 1 }</td>
        <td>{ project.name }</td>
        <td>{ project.stars }</td>
        <td>{ project.description }</td>
      </tr>
    );
  }

});

module.exports = ProjectList;
