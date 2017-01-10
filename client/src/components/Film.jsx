var React = require('react');


  var Film = React.createClass({

      render: function(){
        return(
          <div className="film">
            <h2> {this.props.name}</h2>
            <p> {this.props.children}</p>
          </div>
        )
      }

  });

  module.exports = Film;
