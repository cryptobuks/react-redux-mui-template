import { session } from "./slices/session"
// a single place to collection and then export all store actions
export const actions = {
  session: session.actions,
}
