import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Footer, Navbar, RightBar, LeftBar } from "./components";
import { LoginRegister, Home, Profile } from "./pages";

function App() {
  const { currentUser } = false;
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

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login_register" />;
    }

    return children;
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
