import { connect } from "react-redux"
import { actions } from "../../../store"
import { Login } from "./login"

const mapState = (state: any) => {
  const { loggedIn, username, password } = state.session
  return {
    loggedIn,
    password,
    username,
  }
}

const mapDispatch = {
  clear: () => actions.session.clearLoginFields({}),
  login: (username: string, password: string) =>
    console.log(`Logging in ... ${username} and ${password}`),
  setPassword: (password: string) => actions.session.setPassword({ password }),
  setUsername: (username: string) => actions.session.setUsername({ username }),
}

const Connected = connect(
  mapState,
  mapDispatch
)(Login)

export { Connected as Login }
