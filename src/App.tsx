import { createTheme, colors, ThemeProvider, Box } from '@mui/material';
import Header from "./Components/Header"

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
      <Header></Header>
      <Box sx={{
        height: '300px',
        width: {
          xs: 100,
          sm: 200,
          md: 300,
          lg: 400,
          xl: 500,
        },
        bgcolor: 'secondary.light'
      }}></Box>
    </ThemeProvider>
  )
}

export default App
