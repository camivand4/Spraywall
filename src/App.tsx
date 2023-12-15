import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Auth from './Pages/Auth';
import Gym from './Pages/Gym';
import Gyms from './Pages/Gyms';
import Boulder from './Pages/Boulder';

const holdsColors = {
  primary: {
    main: '#161616', // Background
    contrastText: '#fff', // Text on primary background
  },
  secondary: {
    main: '#981DF8', // Accent color
    contrastText: '#fff', // Text on secondary background
  },
  background: {
    default: '#323232', // Lighter backgrounds and borders
  },
  text: {
    primary: '#fff', // Text on #161616, #323232, #981DF8 backgrounds
  },
  left: '#FF5733', // Color for left
  right: '#33FF57', // Color for right
  neutral: '#337AFF', // Color for neutral
  bothHands: '#FF33E9', // Color for both hands
};

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


export default App
