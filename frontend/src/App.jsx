import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Landing from "./pages/landing/Landing";
import ForgetPassword from "./pages/forget/ForgetPassword";
import Snowfall from "react-snowfall";
function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="h-screen flex justify-center items-center relative">
      <Snowfall color="#d8b1f0" snowflakeCount={100} />
      <Routes>
        <Route
          path="/home"
          element={authUser ? <Navigate to="/" /> : <Landing />}
        />
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/home" />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
