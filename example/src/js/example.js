/*
** example.js
**
** example.js is an entry point js file for the Mixolydian.js example....
**
** Eric James Foster, Fostware LLC, MIT License.
***/


import Ops from './Math/Ops'
import {log} from './Math/utils/loggers'
import {el, go, click} from 'elementsJS'


go(()=> {
  el('.calculator').style.backgroundColor = 'red'

  click('.calculator', (e)=> {
    let r
    switch(e.target.id) {
      case 'add':
        r = Ops.add(
          Number(el('.input-1').value), Number(el('.input-2').value)
        )
        el('.input-result').value = r

        break
      case 'subtract':
        r = Ops.subtract(
          Number(el('.input-1').value), Number(el('.input-2').value)
        )
        el('.input-result').value = r

        break
      case 'multiply':
        r = Ops.multiply(
          Number(el('.input-1').value), Number(el('.input-2').value)
        )
        el('.input-result').value = r

        break
      case 'divide':
        r = Ops.divide(
          Number(el('.input-1').value), Number(el('.input-2').value)
        )
        el('.input-result').value = r

        break
      case 'clear':
        el('.input-1').value = ''
        el('.input-2').value = ''
        el('.input-result').value = ''

        break
    }
  })
})
