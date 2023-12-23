import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Auth from "./Pages/Auth";
import Gym from "./Pages/Gym";
import Gyms from "./Pages/Gyms";
import Boulder from "./Pages/Boulder";
import Camera from "./Pages/Camera";
import BaseLayout from "./layouts/BaseLayout";

function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&family=Roboto:wght@100&family=Source+Sans+3:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>

      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/gyms" element={<Gyms />} />
          <Route path="/gyms/:id" element={<Gym />} />
          <Route path="/boulder" element={<Boulder />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BaseLayout>
    </>
  );
}

export default App;
