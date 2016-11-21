const test = require('tape');
const freeze = require('deep-freeze')

const reducer = require('../reducer');

test('hello world test', (t) => {
  t.ok(true)
  t.end()
})

test("Hello", function(t){

  var initialState = {
    beers: [
      { name: "Tui" , ABV: "4%" , style: "IPA" },
      { name: "Bouncing Czech" , ABV: "6.5%" , style: "Stout" },
      { name: "Tuatara Ardennes", ABV: "7%" , style: "Belgian Ale" }
  ]}

  var expected = {
    beers: [
      { name: "Tui" , ABV: "4%" , style: "IPA" },
      { name: "Bouncing Czech" , ABV: "6.5%" , style: "Stout" },
      { name: "Tuatara Ardennes", ABV: "7%" , style: "Belgian Ale" }
  ]}

  freeze(initialState)

  var actual = reducer(initialState, {type: 'INIT'})

  t.deepEquals(actual, expected, "reducer works")
  t.end()

  })
