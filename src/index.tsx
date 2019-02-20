import React from "react"
import ReactDOM from "react-dom"
import { App } from "./app"
import { serviceWorker } from "./utils/service-worker"

ReactDOM.render(<App />, document.getElementById("root"))

serviceWorker.register()

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./app", () => {
    ReactDOM.render(<App />, document.getElementById("root"))
  })
}
