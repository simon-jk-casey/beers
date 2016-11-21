const html = require('yo-yo')

const Beer = (beer, dispatch) => {
  const { name, brewery, country, style, abv } = beer
  return html `
    <li>
      <div> Name: ${name} </div>
      <div> Brewery: ${brewery} </div>
      <div> Country: ${country} </div>
      <div> Style: ${style} </div>
      <div> Abv: ${abv} </div>
    </li>
  `
}

module.exports = Beer
