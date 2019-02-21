import { Typography } from "@material-ui/core"
import { unstable_Box as Box } from "@material-ui/core/Box"
import React from "react"

export const Footer: React.FC = (props) => {
  return (
    <footer>
      <Box zIndex={1100} width="100%" bgcolor="#212121" color="white">
        <Box p={1}>
          <Typography variant="caption" color="inherit">
            &copy; 2019 React-Redux-Template
          </Typography>
        </Box>
      </Box>
    </footer>
  )
}
