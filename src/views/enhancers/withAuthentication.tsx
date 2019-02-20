import React from "react"
import { connect } from "react-redux"
import { IRootState } from "../../state/typings"

const withAuthentication = (Component: any) => {
  interface IProps {
    loggedIn: boolean
  }

  const Authenticated: React.FC<IProps> = (props) => {
    const { loggedIn } = props
    if (loggedIn) {
      return <div>logged in!</div>
    } else {
      return <div>you need to log in</div>
    }
  }

  const mapState = (state: IRootState) => ({
    loggedIn: state.session.loggedIn,
  })
  const Connected = connect(mapState)(Authenticated)
  return Connected
}

export { withAuthentication }
