import { Typography } from "@material-ui/core"
import { unstable_Box as Box } from "@material-ui/core/Box"
import React from "react"
import { Browser } from "react-kawaii"

interface IProps {
  location: {
    pathname: string
  }
}

export const Unknown: React.FC<IProps> = (props) => {
  const { pathname } = props.location

  return (
    <Box textAlign="center">
      <Browser size={200} mood="sad" />
      <Typography color="error">{`Oops ... we couldn't find ${pathname}!`}</Typography>
    </Box>
  )
}
