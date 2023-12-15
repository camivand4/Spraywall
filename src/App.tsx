import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Auth from "./Pages/Auth";
import Gym from "./Pages/Gym";
import Gyms from "./Pages/Gyms";
import Boulder from "./Pages/Boulder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/gyms" element={<Gyms />} />
      <Route path="/gyms/:id" element={<Gym />} />
      <Route path="/gyms/:id/:boulder" element={<Boulder />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
