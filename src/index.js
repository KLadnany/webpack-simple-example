import * as hello from './hello';

let selectorheader = document.querySelector("h1");
selectorheader.innerHTML = hello.header;

let selector = document.querySelector("#text");
selector.innerHTML = hello.text;