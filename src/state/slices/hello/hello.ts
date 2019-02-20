import { createSlice } from "redux-starter-kit"

const initialState = {
  name: "",
  sayHello: (name: string) => `Welcome ${name} 🤝`,
}

export const hello = createSlice({
  initialState,
  reducers: {
    updateName(state: any, action: any) {
      state.name = action.payload
    },
  },
  slice: "react-redux-template/hello",
})
