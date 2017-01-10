var React = require('react');
var Film = require('./Film');


var FilmList = React.createClass({

  render: function(){

    var filmComponents = this.props.films.map(function(filmObj){
      return(
        <li ahref={filmObj.url} key={filmObj.id}>{filmObj.name}&nbsp{filmObj.showTimesURL}</li>
      )
    });

    return(
      <div className='film-list'>
      <ul>{filmComponents}</ul>
      </div>
    )
  };


});

module.exports = FilmList;
