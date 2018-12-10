import "@babel/polyfill"
import * as React from "react"
import ReactDOM from 'react-dom'
import { AppContainer } from "./App.container"

const rootEl = document.getElementById("root")

ReactDOM.render(
  <AppContainer/>,
  rootEl
);

declare let module: { hot: any }
if (module.hot)
  module.hot.accept();
