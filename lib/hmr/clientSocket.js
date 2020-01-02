/*
################################################################################
######################### BELOW ADDED BY MIXOLYDIAN ############################
################################################################################
*/

/*
** clientSocket.js
**
** clientSocket.js is code that is appended to the bundle (if HMR is opted), by Mixolydian,
** that will create the socket connection on the client-side...
**
** Eric James Foster, Fostware LLC, MIT License.
***/


(()=> {
// This function begins a chain of promises that create, append and load scripts
// needed for socket.io to work....
  function loadClientSockets() {
    return new Promise((resolve, reject)=> {
// Create script tags....
      var scriptSrc = document.createElement('script')

// Configure tags....
      scriptSrc.src = 'node_modules/socket.io-client/dist/socket.io.js'
      scriptSrc.type = 'text/javascript'
      scriptSrc.onload = resolve

// Add tags to head of doc...
      document.head.append(scriptSrc)
    })
  }

  loadClientSockets()
  .then((result)=> {
// Create and dispatch a new event for 'clientSocketsLoaded'....
    document.dispatchEvent(
      new Event('clientSocketsLoaded')
    )

// Return a promise in which script tag is created, content added and loaded....
    return new Promise((resolve, reject)=> {
// Create script tags....
      var scriptVar = document.createElement('script')
/// Configure tags....
          scriptVar.onload = resolve
          scriptVar.textContent = 'var socket = io();'
/// Add tags to head of doc...
      document.head.append(scriptVar);
    })
    // Once loaded...
    .then((result)=> {
      console.log('SOCKETS LOADED');
      console.log(result)
      console.dir(result);
    })
  })
})();

/*
################################################################################
######################### ABOVE ADDED BY MIXOLYDIAN ############################
################################################################################
*/
