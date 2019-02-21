import { connect } from "react-redux"
import { actions } from "../../../store"
import { IRootState } from "../../../store/typings"
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
