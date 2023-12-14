import { Box } from "@mui/material";
import Header from "../Components/Header";

export default function Home() {
  return (
    <>
        <div>Home</div>
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
    </>
  )
}
