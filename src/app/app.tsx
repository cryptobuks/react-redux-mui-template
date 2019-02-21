import { CssBaseline, Paper } from "@material-ui/core"
import { unstable_Box as Box } from "@material-ui/core/Box"
import { ThemeProvider } from "@material-ui/styles"
import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { routes } from "../routes"
import { store } from "../store"
import { Footer, Header } from "../views/components"

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={store.getState().theme}>
      <CssBaseline />
      <Router>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mx={2}
          boxShadow={2}
          borderRadius={8}
        >
          <Box width="100%" maxWidth="1080px" bgcolor="background.paper">
            <Header />
            <Box p={2}>
              <Switch>
                {routes.map((route, index) => (
                  // @ts-ignore
                  <Route key={index} {...route} />
                ))}
              </Switch>
            </Box>
            <Footer />
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  </Provider>
)

export { App }
