const redux = require('redux')
const request = require('superagent')
const html = require('yo-yo')

const reducer = require('./reducer');
const beersTemplate = require('./views/beers');
const beerTemplate = require('./views/beer');

const main = document.querySelector("main")
const app = document.createElement("div")
main.appendChild(app)

var initialState = {beers: [], isLoading: false}

const store = redux.createStore(reducer, initialState)
const dispatch = store.dispatch

store.subscribe( () => {
  var state = store.getState()
  var view = render(state, dispatch)
  html.update(app, view)
})

function render (state, dispatch) {
  return html`<div id="app">${beersTemplate(state, dispatch)}</div>`
}

dispatch({type: 'INIT'})
