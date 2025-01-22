import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { Posts } from "./pages/Posts"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}
