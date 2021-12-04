import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, SignUp } from "pages";
import { Navbar } from "components";
import { useAuthContext } from "hooks";
import React from "react";

function App() {
  const { authIsReady, user } = useAuthContext();
  const routes = [
    {
      path: "/",
      element: user ? <Home /> : <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: !user ? <Login /> : <Navigate to="/" />,
    },
    {
      path: "/signup",
      element: !user ? <SignUp /> : <Navigate to="/" />,
    },
  ];
  return (
    <div className="App">
      {authIsReady && (
        <React.Fragment>
          <Navbar />
          <Routes>
            {routes.map(({ path, element }) => (
              <Route path={path} element={element} key={path} />
            ))}
          </Routes>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
