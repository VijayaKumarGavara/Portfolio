import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import { lazy, Suspense } from "react";
function App() {
  const ProjectDetails = lazy(() => import("./components/ProjectDetails"));
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route
            path="/projects/:slug"
            element={
              <Suspense fallback={<div>Loading project...</div>}>
                <ProjectDetails />
              </Suspense>
            }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
