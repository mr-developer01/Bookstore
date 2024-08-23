import { createBrowserRouter } from "react-router-dom"
import Hero from "./Components/Hero";
import Books from "./Components/Books";
import App from "./App";
import Addbooks from "./Components/Addbooks";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <h1>No such route is available...</h1>,
      children: [
        {
          path: "/",
          element: <Hero />
        },
        {
          path: "/books",
          element: <Books />
        },
        {
          path: "/addbooks",
          element: <Addbooks />
        }
      ]
    }
  ])

export default router;