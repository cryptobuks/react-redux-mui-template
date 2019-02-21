import React from "react"
import { Redirect } from "react-router"

interface IProps {
  isLoggedIn: boolean
}

const Protect: React.FC<IProps> = (props) => {
  const { isLoggedIn, children } = props

  if (isLoggedIn) {
    return <div>{children}</div>
  } else {
    /**
     * TODO: Enhance this by redirecting to the originally requested URL once logged in
     */
    return <Redirect push to="/login" />
  }
}

export { Protect }
