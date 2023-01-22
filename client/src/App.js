import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Footer, Navbar, RightBar, LeftBar } from "./components";
import { LoginRegister, Home, Profile } from "./pages";

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
