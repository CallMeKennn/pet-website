import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/LoginPage"
import DovtorPage from "./Pages/DoctorPage";
import HomePage from "./Pages/DoctorPage";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route path="/doctor" element={<DovtorPage/>}></Route>
          <Route path="/user" element={<HomePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
