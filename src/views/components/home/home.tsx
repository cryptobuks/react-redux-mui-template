import { Typography } from "@material-ui/core"
import { unstable_Box as Box } from "@material-ui/core/Box"
import React from "react"
import { Planet } from "react-kawaii"

interface IProps {
  loggedIn: boolean
}

export const Home: React.FC<IProps> = (props) => {
  const { loggedIn } = props

  let planet = <Planet size={120} mood="sad" color="red" />
  if (loggedIn) {
    planet = <Planet size={120} mood="happy" color="green" />
  }

  return (
    <Box display="flexbox" justifyContent="center">
      <Box>
        <Typography variant="h6" gutterBottom>
          Welcome,
        </Typography>
        <Typography gutterBottom>Templates, templates everywhere!</Typography>
        <Typography gutterBottom>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id at aliquid laborum modi
          voluptates earum voluptas, explicabo sequi? Atque eligendi vel, ullam eum beatae
          accusamus? Dolores quia ab aliquam sapiente.
        </Typography>
      </Box>
      <Box textAlign="center" my={2}>
        {planet}
      </Box>
    </Box>
  )
}
