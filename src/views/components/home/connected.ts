import { connect } from "react-redux"
import { actions } from "../../../state"
import { IRootState } from "../../../state/typings"
import { Home } from "./home"

const mapState = (state: IRootState) => {
  const { loggedIn } = state.session
  return {
    loggedIn,
  }
}

const mapDispatch = {}

const Connected = connect(
  mapState,
  mapDispatch
)(Home)

export { Connected as Home }
