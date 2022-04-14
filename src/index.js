import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";


import {AppMui} from "./AppMui"

ReactDOM.render(
<BrowserRouter>
<AppMui/>
</BrowserRouter>
, document.querySelector('#root'));

// import {PagePost} from "./pagePost"
// ReactDOM.render(<PagePost/>, document.querySelector('#root'));


insertPub.onclick = function(event) {
// alert("Есть контакт");
console.log("Есть контакт")
};