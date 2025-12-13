import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Body/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
