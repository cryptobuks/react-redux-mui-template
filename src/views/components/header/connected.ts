import { connect } from "react-redux"
import { actions } from "../../../state"
import { IRootState } from "../../../state/typings"
import { Header } from "./header"

const mapState = (state: IRootState) => {
  const { loggedIn } = state.session
  return {
    loggedIn,
  }
}

const mapDispatch = {
  handleLogout: () => actions.session.logout({}),
  handleLogin: () => actions.session.login({}),
}

const Connected = connect(
  mapState,
  mapDispatch
)(Header)

export { Connected as Header }
