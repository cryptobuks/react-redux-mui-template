import { combineReducers, configureStore } from "redux-starter-kit"
import { session, theme } from "./slices"

const preloadedState = {}

export const rootReducer = combineReducers({
  session: session.reducer,
  theme: theme.reducer,
})

const store = configureStore({
  enhancers: [],
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
