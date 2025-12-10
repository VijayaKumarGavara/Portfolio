import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Body/>}>
          <Route index element={<h1>About</h1>} />
          <Route path="skills" element={<h1>Skills</h1>} />
          <Route path="projects" element={<h1>Projects</h1>} />
          <Route path="experience" element={<h1>Experience</h1>} />
          <Route path="contact" element={<h1>Contact</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
