const html = require('yo-yo')
const beerTemplate = require('./beer')
const getBeers = require('../getBeers')

module.exports = (state, dispatch) => {
  const beers = state.beers
  return html` <div>

    <ul class = "beers">
      ${beers.map(beerTemplate)}
    </ul>
    <button class="refresh" onclick = ${() => getBeers(dispatch)}>FETCH BEER</button>
    </div>
    `
}
