

// modules are defined as an array
// [ module function, map of requireuires ]
//
// map of requireuires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the requireuire for previous bundles

(function outer (modules, cache, entry) {
    this.hotModule = function(updatedModules) {
// Creat 'hot-update' event, so that Valence rootComponent may be unmounted.....
        let event = new Event('hot-module')
// Fire event....
        document.dispatchEvent(event)

//NOTE: Do not need this for now....
        // valenceGlobals.HMRemounting = true

//NOTE: Do not need the 'rootComponentUnmounting' flag, for now, so, adding
// '|| true' to acheive a perpetual 'true' result.....  Once removed, the flag will
// be necessary for running the subsequent code....
        if (valenceGlobals.rootComponentUnmounting || true) {
// Look through modules....
            for (let id in updatedModules) {
                if (Object.prototype.hasOwnProperty.call(updatedModules, id)) {
// clear module definition from cache
                    delete cache[id]
// replace existing module definition from module map
                    modules[id] = updatedModules[id]
// Update module - 'newRequire' is from browser-pack

//NOTE: Not running this newRequire here, may want to find out why it was causing
// problems at some point.... (Running multiple updates and adding unwanted DOM..)
                    // newRequire(id)
                    console.log('Update applied.')

// call entry point modules to bootstrap
                    for (let idx of entry) {
/// delete existing entry point module in cache
// so that it is reinitialized
                      delete cache[idx]
// call entry point module which will run
// with new updates in cache
                      newRequire(idx)

//NOTE: If 'rootComponentUnmounting' flag is re-enabled, it will need to be reset here....
// Reset the unmounting flag.....
                      // valenceGlobals.rootComponentUnmounting = false
                    }
                }
            }
        }
    }

// Save the require from previous bundle to this closure if any
    let previousRequire = typeof require == "function" && require

    function newRequire(name, jumped) {
        if(!cache[name]) {
            if(!modules[name]) {
// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
                let currentRequire = typeof require == "function" && require
                if (!jumped && currentRequire) return currentRequire(name, true)

// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
                if (previousRequire) return previousRequire(name, true)
                let err = new Error('Cannot find module \'' + name + '\'')
                err.code = 'MODULE_NOT_FOUND'
                throw err
            }
            let m = cache[name] = {exports: {}}

            modules[name][0].call(m.exports, function(x) {
                let id = modules[name][1][x]

                return newRequire(id ? id : x)
            }, m, m.exports, outer, modules, cache, entry)
        }
        return cache[name].exports
    }
    for (let idx of entry) {
//
      newRequire(idx)

    }
// Override the current require with this new one
    return newRequire
})
