const request = require('superagent');

var url = "https://rogue-beers.herokuapp.com/api/v1/beers"

function getBeers(dispatch) {
  request
    .get(url)
    .end((err, res) => {
      if (err) return
      console.log(res.body.beers);
      dispatch({type: 'RECEIVE_BEERS', payload: res.body.beers})
    })
}

module.exports = getBeers
