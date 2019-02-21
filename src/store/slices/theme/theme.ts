import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { createMuiTheme } from "@material-ui/core"
import { install } from "@material-ui/styles"
import { createSlice } from "redux-starter-kit"

install() // TODO: Remove this hack when MUI v4 is released

library.add(far, fas, fab)

const initialState = createMuiTheme({
  palette: {},
  typography: {
    useNextVariants: true,
  },
})

const theme = createSlice({
  initialState,
  reducers: {
    update: (state: any, action: any) => ({ ...state, ...action.payload }),
  },
  slice: "react-redux-template/theme",
})

export { theme }
