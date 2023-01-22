import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Footer, Navbar, RightBar, LeftBar } from "./components";
import { LoginRegister, Home, Profile } from "./pages";

import LoginRegister from "./pages/loginRegister/LoginRegister";
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
        <Footer />
      </div>
    );
  };


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
