import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Payment from "./pages/Payment";
import SideBar from "./components/SideBar";
import { AuthUserContext } from "./Context/AuthUserContext";
import { useContext } from "react";

function App() {
  const {userLoggedIn} = useContext(AuthUserContext)
  
  const ProtectedRoute = ({children})=>{
    if (!userLoggedIn){
      return <Navigate to="/login"/>
    }
    return children
    
  }
  return (
    <div className="App">
      <BrowserRouter>
      <SideBar />
        <Routes>
          <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
