import Home from "./pages/Home"
import Contact from "./pages/Contact"

function App() {
  return window.location.pathname === "/contact" ? <Contact /> : <Home />
}

export default App
