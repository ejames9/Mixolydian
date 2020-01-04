/*
** Mixolydian - version.js
**
** version.js is a command for the Mixolydian CLI that simply returns
** the current version number from package.json.
**
** Eric James Foster, Fostware LLC, MIT License.
***/



// Grab the current version from package.json....
const { version } = require('../package.json')


module.exports =(args)=> console.log(`v${version}`)
