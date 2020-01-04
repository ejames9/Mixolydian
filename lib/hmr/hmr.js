/*
################################################################################
######################### BELOW ADDED BY MIXOLYDIAN ############################
################################################################################
*/

/*
** HMR.js
**
** HMR.js utilizes websocket communication to enable hot module
** reloading....
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// Once the 'clientSocketsLoaded' event is emitted, We set up the client-side
// socket.io...
document.addEventListener('clientSocketsLoaded', function() {
// create an instance of Socket.IO for listening
// to websocket messages
  var socket = io();

// listen for 'file-change' message
  socket.on('file-change', function(msg) {
    console.log('File changed: ' + msg.file);
// Define js and css filename reg exp's so that we may know which has changed.....
    let jsRE = /[\w_$-]+\.(js|jsx|ts)/,
    cssRE = /[\w_$-]+\.(css|scss|sass|less)/,
    file = msg.file

    if (jsRE.test(file)) {
      // console.log('JSRE');console.log(jsRE.test(fileName));
// Call the downloadUpdate function to get HMR started.....
      downloadUpdate(file)
    } else if (cssRE.test(file)) {
      // console.log('CSSRE');console.log(cssRE.test(fileName));
// reload the browser to get the latest changes
      window.location.reload()
    }
  })

// Function, Creates a script tag who's src attribute points to our express
// /hot-module endpoint. This will download our current updated module into
// the page.....
  function downloadUpdate(file) {
// Get the updated module and load it into a script tag.....
    let hotMod = document.createElement('script')
        hotMod.charset = 'utf8'
        hotMod.type = 'text/javascript'
        hotMod.src = `/hot-module?file=${file}`

// Append module to head of document....
    document.head.append(hotMod)
  }
})

//NOTE: May or may not need this listener in the future....

// Listen for 'hot-module' event.......
//   document.addEventListener('hot-module', ()=> {
// // If user is using Valence UI library....
//     if (!!valenceGlobals) {
// // Unmount the root component, so that the Hot module will not trigger an update,
// // It will re-mount instead.....
//       // valenceGlobals.unMountAtGround()
//     }
//   })

/*
################################################################################
######################### ABOVE ADDED BY MIXOLYDIAN ############################
################################################################################
*/
