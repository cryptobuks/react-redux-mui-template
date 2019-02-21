import { Button, TextField, Typography } from "@material-ui/core"
import { unstable_Box as Box } from "@material-ui/core/Box"
import React from "react"

interface IProps {
  loggedIn: boolean
  username: string
  password: string
  clear(): void
  login(username: string, password: string): void
  setPassword(password: string): void
  setUsername(username: string): void
}
export const Login: React.FC<IProps> = (props) => {
  const { clear, loggedIn, login, setPassword, setUsername, username, password } = props
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box border="1px solid grey" boxShadow={4} p={2}>
        <Box>
          <Typography variant="h6">Please login to continue</Typography>
        </Box>
        <Box p={4}>
          <TextField
            fullWidth
            label="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Box>
        <Box textAlign="right">
          <Box mr={2} display="inline">
            <Button variant="outlined" onClick={clear}>
              Clear
            </Button>
          </Box>
          <Button variant="contained" color="primary" onClick={() => login(username, password)}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
