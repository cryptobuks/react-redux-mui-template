import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconButton, Button } from "@material-ui/core"
import { unstable_Box as Box } from "@material-ui/core/Box"
import React from "react"
import { Link } from "../../common"

interface IProps {
  loggedIn: boolean
  handleLogout(payload: {}): void
  handleLogin(payload: {}): void
}

export const Buttons: React.FC<IProps> = (props) => {
  const { loggedIn, handleLogout, handleLogin } = props
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
          <Button onClick={handleLogin} color="inherit">
            Login
          </Button>
        </Box>
      )}
    </>
  )
}
