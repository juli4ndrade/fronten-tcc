import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home"

const routes = createBrowserRouter([
  {
    path: '*',
    element: <Home />
  }
])

export function Router() {
  return <RouterProvider router={routes} />
}