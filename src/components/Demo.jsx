const React = require('react');

const Counter = require('./Counter');
const ProjectList = require('./ProjectList');

const Demo = React.createClass({

  render: function() {
    return (
      <div style={{ maxWidth: 600, margin: '20px auto' }}>

        <h2>Redux Demo</h2>

        <Counter { ...this.props } />

        <div className="ui divider"></div>

        <ProjectList { ...this.props } />

      </div>
    );
  }

});

module.exports = Demo;
