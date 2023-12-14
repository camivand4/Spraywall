import { createTheme, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Auth from './Pages/Auth';

const theme = createTheme({
  palette: {
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
  }
});

const holdsColors = {
  left: '#FF5733', // Color for left
  right: '#33FF57', // Color for right
  neutral: '#337AFF', // Color for neutral
  bothHands: '#FF33E9', // Color for both hands
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>

    </ThemeProvider>
  );
}


export default App
