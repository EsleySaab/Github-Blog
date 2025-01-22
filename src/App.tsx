import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { Posts } from "./pages/Posts"
import { DefaultLayout } from "./pages/layouts/DefaultLayout"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />

            <Route path="/posts" element={<Posts />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}
