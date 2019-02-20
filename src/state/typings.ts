/**
 * TODO: Work is ongoing to make the react-starter-kit typesafe with stable support expected
 * months if not weeks. More info here: https://github.com/reduxjs/redux-starter-kit/pull/73.
 *
 * In the meantime we'll use these typings to add *some* type safety
 */
export interface IRootState {
  hello: any
  theme: any
  session: {
    loggedIn: boolean
  }
}
