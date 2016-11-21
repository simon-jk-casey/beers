const redux = require('redux')
const request = require('superagent')
const html = require('yo-yo')

const reducer = require('./reducer');


const main = document.querySelector("main")
const app = document.createElement("div")
main.appendChild(app)


const store = redux.createStore(reducer, initialState)
const dispatch = store.dispatch

const updateView = ()
