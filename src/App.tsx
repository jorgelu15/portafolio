import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/projects',
    element: <Projects />
  },
]);
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App;
