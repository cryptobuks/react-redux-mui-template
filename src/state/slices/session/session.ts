import { createSlice } from "redux-starter-kit"

const initialState = {
  loggedIn: true,
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
  },
  slice: "react-redux-template/session",
})

export { session }
