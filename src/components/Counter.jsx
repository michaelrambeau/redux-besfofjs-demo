var React = require('react');
var Counter = React.createClass({

  render: function() {
    var { counter, increment, decrement } = this.props;
    return (
      <div>
        <h3>Counter</h3>
        <button onClick={decrement} className="ui button blue">-</button>
        <div className="ui labeled button" tabindex="0">
          <div className="ui basic blue button">
            <i className="star icon"></i> Counter
          </div>
          <a onClick={increment}　className="ui basic left pointing blue label">
            { counter }
          </a>
        </div>
      </div>
    );
  }

});

module.exports = Counter;
