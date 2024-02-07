import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Main_PageLayout } from "./layouts";
import {
  About_Page,
  Contact_Page,
  Home_Page,
  NotFound_Page,
  Portfolio_Page,
} from "./pages";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main_PageLayout />,
      children: [
        {
          index: true,
          element: <Home_Page />,
        },
        {
          path: "about",
          element: <About_Page />,
        },
        {
          path: "portfolio",
          element: <Portfolio_Page />,
        },
        {
          path: "contact",
          element: <Contact_Page />,
        },
        {
          path: "*",
          element: <NotFound_Page />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
