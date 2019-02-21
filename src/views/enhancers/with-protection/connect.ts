import React from "react"
import { connect } from "react-redux"
import { Protect } from "./protect"

const withProtection = (Component: any) => {
  interface IProps {
    loggedIn: boolean
  }

  const mapState = (state: any) => ({
    loggedIn: state.session.loggedIn,
  })
  const Connected = connect(mapState)(Protect)
  return Connected
}

export { withProtection }
