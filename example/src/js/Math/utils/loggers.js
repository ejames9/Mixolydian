

/*
loggers.js

This file contains the code for the various logging functions
of the library.

Author: Eric James Foster
License: ISC
*/



let colors = require('clivi')

//Console.log alias function.
const log = function(text, style, tyme) {
  let colr = Array.isArray(style) ? style[0] : style,
      styl = Array.isArray(style) ? style[1] : null,
       tym = tyme || false;

  let time = new Date(),
     hours = time.getHours(),
      mins = time.getMinutes(),
      secs = time.getSeconds();
      if (secs <= 9) {
        secs = '0' + String(secs);
      }
      if (mins <= 9) {
        mins = '0' + String(mins);
      }
  let abbr = hours >= 12 ? 'pm' : 'am';
  let stan = hours >= 13 ? hours - 12 : hours;
      if (stan === 0) {
        hours = stan + 12;
      } else {
        hours = stan;
      }
      time = hours + ':' + mins + ':' + secs + abbr;

      let t = tym ? time : '';

  if (typeof document === 'undefined') {
    return console.log(colors(text, {fg: colr, style: styl}) + '   '.repeat(10) + t);
  } else {
    let color = colr,
      bgColor = styl,
          css = 'background: ' + bgColor + '; color: ' + color;

    return console.log('%c' + text + '%s', css, '   '.repeat(10) + t);
  }
};


//Console.error alias function.
const err =(text, tyme)=> {
  let colr = 'red',
      styl = 'bold',
       tym = tyme || false;

  let time = new Date(),
     hours = time.getHours(),
      mins = time.getMinutes(),
      secs = time.getSeconds();
      if (secs <= 9) {
        secs = '0' + String(secs);
      }
      if (mins <= 9) {
        mins = '0' + String(mins);
      }
  let abbr = hours >= 12 ? 'pm' : 'am';
  let stan = hours >= 13 ? hours - 12 : hours;
      if (stan === 0) {
        hours = stan + 12;
      } else {
        hours = stan;
      }
      time = hours + ':' + mins + ':' + secs + abbr;

      let t = tym ? time : '';

  if (typeof document === 'undefined') {
    return console.log(colors(text, {fg: colr, style: styl}) + '   '.repeat(10) + t);
  } else {
    let color = colr,
      bgColor = '',
          css = 'background: ' + bgColor + '; color: ' + color;

    return console.error('%c' + text + '%s', css, '   '.repeat(10) + t);
  }
};


//Console.error alias function.
const error =(text)=> {
  return console.error(text);
};



//Console.info alias function.
const info =(text, tyme)=> {
  let colr = '#008cff',
      styl = 'bold',
       tym = tyme || false;

  let time = new Date(),
     hours = time.getHours(),
      mins = time.getMinutes(),
      secs = time.getSeconds();
      if (secs <= 9) {
        secs = '0' + String(secs);
      }
      if (mins <= 9) {
        mins = '0' + String(mins);
      }
  let abbr = hours >= 12 ? 'pm' : 'am';
  let stan = hours >= 13 ? hours - 12 : hours;
      if (stan === 0) {
        hours = stan + 12;
      } else {
        hours = stan;
      }
      time = hours + ':' + mins + ':' + secs + abbr;

      let t = tym ? time : '';

  if (typeof document === 'undefined') {
    colr = 'blueBright';
    return console.log(colors(text, {fg: colr, style: styl}) + '   '.repeat(10) + t);
  } else {
    let color = colr,
      bgColor = '',
          css = 'background: ' + bgColor + '; color: ' + color;

    return console.info('%c' + text + '%s', css, '   '.repeat(10) + t);
  }
};



//Console.warn alias function.
const warn =(text, tyme)=> {
  let colr = 'orange',
      styl = 'bold',
       tym = tyme || false;

  let time = new Date(),
     hours = time.getHours(),
      mins = time.getMinutes(),
      secs = time.getSeconds();
      if (secs <= 9) {
        secs = '0' + String(secs);
      }
      if (mins <= 9) {
        mins = '0' + String(mins);
      }
  let abbr = hours >= 12 ? 'pm' : 'am';
  let stan = hours >= 13 ? hours - 12 : hours;
      if (stan === 0) {
        hours = stan + 12;
      } else {
        hours = stan;
      }
      time = hours + ':' + mins + ':' + secs + abbr;

      let t = tym ? time : '';

  if (typeof document === 'undefined') {
    colr = 'yellow';
    colr = 'blueBright';
    return console.log(colors(text, {fg: colr, style: styl}) + '   '.repeat(10) + t);
  } else {
    let color = colr,
      bgColor = '',
          css = 'background: ' + bgColor + '; color: ' + color;

    return console.warn('%c' + text + '%s', css, '   '.repeat(10) + t);
  }
};


const dir = function(obj) {
  return console.dir(obj);
};



module.exports = {
  log: log,
  info: info,
  warn: warn,
  error: error,
  err: err,
  dir: dir
}
