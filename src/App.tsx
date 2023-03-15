import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ErrorPage } from "./pages/Error"
import { IssuePage } from "./pages/Issue"
import { LayoutPage } from "./pages/Layout"
import { MainPage } from "./pages/Main"

const router = createBrowserRouter([
  {
    path: "/", 
    element: <LayoutPage />, 
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: "/issue/:issueId", 
        element: <IssuePage />
      }
    ]
  }
  
])

function App() {
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
