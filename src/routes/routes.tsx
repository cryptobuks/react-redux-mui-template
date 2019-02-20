import { Home, Unknown } from "../views/components"

export const routes = [
  {
    component: Home,
    exact: true,
    path: "/",
  },
  {
    component: Unknown,
  },
]
