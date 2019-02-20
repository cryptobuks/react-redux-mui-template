import { Link as MuiLink } from "@material-ui/core"
import React from "react"
import { Link as RouterLink } from "react-router-dom"

const InternalLink: React.FC<any> = (props) => <RouterLink to="/open-collective" {...props} />

export const Link: React.FC<any> = (props) => {
  const { children, ...rest } = props
  return (
    <MuiLink component={InternalLink} {...rest}>
      {children}
    </MuiLink>
  )
}
