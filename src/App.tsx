import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import routes from "./routes";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: routes,
    },
  ]);

  return <RouterProvider router={router} />;
}