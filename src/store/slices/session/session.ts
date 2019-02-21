import { createSlice } from "redux-starter-kit"

const initialState = {
  loggedIn: false,
  password: "",
  username: "",
}

const session = createSlice({
  initialState,
  reducers: {
    login(state: any, action: any) {
      state.loggedIn = true
    },
    logout(state: any, action: any) {
      state.loggedIn = false
    },
    setUsername(state: any, action: any) {
      state.username = action.payload.username
    },
    setPassword(state: any, action: any) {
      state.password = action.payload.password
    },
    clearLoginFields(state: any, action: any) {
      state.username = ""
      state.password = ""
    },
  },
  slice: "react-redux-template/session",
})

export { session }
