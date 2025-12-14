import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import ProjectDetails from "./components/ProjectDetails"
function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Body/>}></Route>
          <Route path="/projects/:slug" element={<ProjectDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
