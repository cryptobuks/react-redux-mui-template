import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { unstable_Box as Box } from "@material-ui/core/Box"
import React from "react"
import { RightSideControls } from "./components"

interface IProps {
  loggedIn: boolean
  handleLogout(): void
  handleLogin(): void
}

export const Header: React.FC<IProps> = (props) => {
  const { loggedIn, handleLogout, handleLogin } = props

  return (
    <header>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Box flexGrow={1}>
            <Typography variant="h6" color="inherit">
              React-Redux-Template
            </Typography>
          </Box>
          <RightSideControls
            loggedIn={loggedIn}
            handleLogout={handleLogout}
            handleLogin={handleLogin}
          />
        </Toolbar>
      </AppBar>
    </header>
  )
}
