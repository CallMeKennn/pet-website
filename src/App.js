import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/LoginPage"
import DovtorPage from "./Pages/DoctorPage";
import HomePage from "./Pages/DoctorPage";
import PetDetail from "./Pages/PetDetail";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route path="/doctor" element={<DovtorPage/>}></Route>
          <Route path="/user" element={<HomePage/>}></Route>
          <Route path="/petdetail" element={<PetDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
