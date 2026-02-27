import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Invoice from "./Components/invoice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

        {
          path:"/invoice",
          element: <Invoice />
        }

   

  ]);

  return (
    <div className="bg-pink-100 min-h-screen">
      <ToastContainer
        hideProgressBar={true}
        autoClose={2500}
      />
      <RouterProvider router={router} />
    </div>
  )
}

export default App;