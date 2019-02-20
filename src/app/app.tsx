import { CssBaseline, Paper } from "@material-ui/core"
import { unstable_Box as Box } from "@material-ui/core/Box"
import { ThemeProvider } from "@material-ui/styles"
import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { routes } from "../routes"
import { store } from "../state"
import { Footer, Header } from "../views/components"

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={store.getState().theme}>
      <CssBaseline />
      <Router>
        <>
          <Header />
          <Box mx="auto" mt="70px" mb="70px" width="100%" maxWidth="1080px">
            <Paper style={{ padding: "16px" }}>
              <Switch>
                {routes.map((route, index) => (
                  // @ts-ignore
                  <Route key={index} {...route} />
                ))}
              </Switch>
            </Paper>
          </Box>
          <Footer />
        </>
      </Router>
    </ThemeProvider>
  </Provider>
)

export { App }
