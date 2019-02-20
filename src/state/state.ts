import { combineReducers, configureStore } from "redux-starter-kit"
import { logger } from "./middleware"
import { hello, session, theme } from "./slices"

const preloadedState = {}

export const rootReducer = combineReducers({
  hello: hello.reducer,
  session: session.reducer,
  theme: theme.reducer,
})

const store = configureStore({
  enhancers: [],
  middleware: [logger],
  preloadedState,
  reducer: rootReducer,
})

function hydrate() {
  const { dispatch } = store
}
hydrate()

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./", () => store.replaceReducer(rootReducer))
}

export { store }
