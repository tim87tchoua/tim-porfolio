import { lazy, Suspense } from "react"
import Home from "./pages/Home"
import Contact from "./pages/Contact"

const ProjectExamples = lazy(() => import("./pages/ProjectExamples"))
const Resume = lazy(() => import("./pages/Resume"))

function App() {
  const path = window.location.pathname
  const projectSlug = path.match(/^\/projects\/([^/]+)\/?$/)?.[1]

  if (path === "/contact") return <Contact />
  if (path === "/resume") {
    return (
      <Suspense fallback={<div>Loading resume…</div>}>
        <Resume />
      </Suspense>
    )
  }
  if (projectSlug) {
    return (
      <Suspense fallback={<div>Loading project examples…</div>}>
        <ProjectExamples slug={projectSlug} />
      </Suspense>
    )
  }

  return <Home />
}

export default App
