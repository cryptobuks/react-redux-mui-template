import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, IconButton } from "@material-ui/core"
import { unstable_Box as Box } from "@material-ui/core/Box"
import React from "react"
import { useState } from "react"
import { Redirect } from "react-router"

interface IProps {
  loggedIn: boolean
  handleLogout(payload: {}): void
  handleLogin(payload: {}): void
}

export const RightSideControls: React.FC<IProps> = (props) => {
  const { loggedIn, handleLogout, handleLogin } = props
  const [redirectToLogin, setRedirectToLogin] = useState(false)

  if (redirectToLogin) {
    return <Redirect to="/login" />
  } else {
    return (
      <>
        {loggedIn ? (
          <>
            <Box mr={2}>
              <Button onClick={handleLogout} color="inherit">
                Logout
              </Button>
            </Box>
            <Box>
              <IconButton color="inherit">
                <FontAwesomeIcon icon={["fas", "user-ninja"]} />
              </IconButton>
            </Box>
          </>
        ) : (
          <Box mr={2}>
            <Button onClick={() => setRedirectToLogin(true)} color="inherit">
              Login
            </Button>
          </Box>
        )}
      </>
    )
  }
}
