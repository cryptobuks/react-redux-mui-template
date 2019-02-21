import { Home, Login, MyAccount, Unknown } from "../views/components"
import { withProtection } from "../views/enhancers"

export const routes = [
  {
    component: Home,
    exact: true,
    path: "/",
  },
  {
    component: withProtection(MyAccount), // wrap protected routes
    exact: true,
    path: "/my-account",
  },
  {
    component: Login,
    exact: false,
    path: "/login",
  },
  {
    component: Unknown,
  },
]
