import { Typography } from "@material-ui/core"
import { unstable_Box as Box } from "@material-ui/core/Box"
import React from "react"
import { Browser } from "react-kawaii"

export const Unauthorised: React.FC = (props) => {
  return (
    <Box textAlign="center">
      <Browser size={120} mood="sad" />
      <Typography color="error" variant="h6">
        You're not allowed to be here.
      </Typography>
    </Box>
  )
}
