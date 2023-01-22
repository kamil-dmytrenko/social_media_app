import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginRegister from "./pages/loginRegister/LoginRegister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRegister />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
