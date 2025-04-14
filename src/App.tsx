import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import { Landing } from "./Pages/Landing";
import { Loader } from "./Pages/Loader";
import { SignUp } from "./Pages/SignUp";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
