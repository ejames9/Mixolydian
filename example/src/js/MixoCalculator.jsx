/*
** Mixolydian.jsx
**
** Mixolydian.jsx is the entry file for a test app, that will be working
** with mixolydian dependency bundler/ hmr development tool and the Valence.js
** UI Library....
**
** Eric James Foster, Fostware LLC, MIT License.
***/

import Valence, { Component, _ } from '../../node_modules/valencejs/cjs/index.js'
// import Button from 'valencejs/WebComponents/Button'

import Ops from './Math/Ops'

const log = _.log
const dir = _.dir
const el = _.DOM.el


Valence.set({
  developmentMode: true,
  shadowByDefault: false,
  underscoreGlobal: true,
  directChildNesting: true,
  kebabCase: false,
  syntaxHighlighting: true
})



styled.global`
  html {
    font-size: 16px;
    font-family: Raleway;
    background: #161616;
  }
`


let JumboStyler =()=> styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  .card {
    display: flex;
    flex-direction: column;
    width: 45%;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    background: blue;
    border: 1px solid #161616;
    border-radius: 12px;
  }

  h1.name {
    font-size: 4rem;
    font-weight: 600;
    color: #373737;
    margin-bottom: 0;
  }

  h3 {
    font-size: 1.35rem;
    color: #585858;
    margin-bottom: 0;
  }

  p {
    font-size: 1rem;
    color: #9a9a9a;
  }

`

let CalcStyler =()=> styled.div`
  display: flex;
  width: 100%;
  margin-top: 3rem;
  justify-content: center;

  .calculator {
    display: flex;
    width: 35%;
    flex-direction: column;
    padding: 2.5rem 1.5rem;
    background: blue;
    border: 1px solid #161616;
    border-radius: 10px;

    .inputs {
      display: flex;
      width: 100%;
      justify-content: space-around;

      .input {
        background: #161616;
        color: #9a9a9a;
        width: 25%;
        height: 2.5rem;
        font-size: 1.8rem;
        border: none;
        border-radius: 8px;
        text-align: center;
      }

      /* .input::placeholder {
        position: relative;
        bottom: .3rem;
        font-size: 1.2rem;
      } */
    }

    .btns {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 1.3rem;
      margin-bottom: 1.3rem;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 5%;
        padding: .5rem  1rem;
        background: #585858;
        color: #161616;
        margin-bottom: 5px;
        border-radius: 5px;
        font-size: 1.8rem;
        cursor: pointer;

        &:hover {
          background: #161616;
          color: #dedede;
        }

        &:active {
          background: #dedede;
          color: #161616;
          box-shadow: 0px 0px 0px 1px #161616 inset;
        }
      }

      .add-btn {
        font-size: 2rem;
      }
    }

    .res {
      display: flex;
      width: 100%;
      justify-content: center;

      .input {
        background: #161616;
        color: #9a9a9a;
        width: 25%;
        height: 2.5rem;
        font-size: 1.8rem;
        border: none;
        border-radius: 8px;
        text-align: center;
      }
    }
  }
`


function Jumbotron() {
  return (
    <JumboStyler className="container mixo">
      <div className="card">
        <h1 className="name">Mixolydian.js</h1>
        <h3 className="title">A Fast, Light-Weight Dependency Bundler</h3>
        <p className="text">Mixolydian is incredibly fast, with an intuitive api and includes Hot Module Reloading..... What more could you ask for? Seriously, you shouldn't be asking for this much........</p>
      </div>
    </JumboStyler>
  )
}


class Calculator extends Component {
// Ctor
  constructor() {
    super()
  }

  add() {
    let r = Ops.add(
      Number(el('.input-1').value), Number(el('.input-2').value)
    )
    el('.input-result').value = r
  }

  subtract() {
    r = Ops.subtract(
      Number(el('.input-1').value), Number(el('.input-2').value)
    )
    el('.input-result').value = r
  }

  multiply() {
    r = Ops.multiply(
      Number(el('.input-1').value), Number(el('.input-2').value)
    )
    el('.input-result').value = r
  }

  divide() {
    r = Ops.divide(
      Number(el('.input-1').value), Number(el('.input-2').value)
    )
    el('.input-result').value = r
  }

  clear() {
    el('.input-1').value = ''
    el('.input-2').value = ''
    el('.input-result').value = ''
  }

  render() {
    return (
      <CalcStyler className="container calc">
        <div className="calculator">
          <div className="container inputs">
            <input placeholder="  Operand 1" type="number" className="input input-1"/>
            <input placeholder="  Operand 2" type="number" className="input input-2"/>
          </div>
          <div className="container btns">
            <div id="add" className="add-btn btn" onClick={this.add}>+</div>
            <div id="subtract" className="subtract-btn btn"onClick={this.subtract}>−</div>
            <div id="multiply" className="multiply-btn btn"onClick={this.multiply}>×</div>
            <div id="divide" className="divide-btn btn"onClick={this.divide}>÷</div>
            <div id="clear" className="clear-btn btn"onClick={this.clear}>c</div>
          </div>
          <div className="container res">
            <input placeholder="  Result" type="number" className="input input-result" readonly/>
          </div>
        </div>
      </CalcStyler>
    )
  }
}


function App9() {
  return (
    <>
      <Jumbotron/>
      <Calculator/>
    </>
  )
}


Valence.realize(
  <App9/>, el('#root')
)
