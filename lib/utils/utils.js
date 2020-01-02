
/*
utils.js

This file contains the code for the various utility functions
of the library.

Author: Eric James Foster
License: ISC
*/




const piper =(...fns)=>
  (arg)=>
    fns.reduce(
      (value, fn)=> fn(value)
      , arg
    )

// A function for combining two objects into 1 new object...
const mergeData =(obj1, obj2)=> ({
  ...obj1,
  ...obj2
})


module.exports = {
  piper: piper,
  mergeData: mergeData
}
