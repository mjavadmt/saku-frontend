import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, grey } from "@mui/material/colors";



const theme = createTheme({
  typography: {
    fontFamily: ['"Dana-FaNum"'],
  },
  palette: {
    primary: deepPurple,
    divider: deepPurple[700],
    background: {
      default: "#070028",
      paper: deepPurple[900],
    },
    text: {
      primary: "#fff",
      secondary: grey[500],
    },
  },
});



export function SignUp() {
  const [user,setValue]= useState({username:"",password:""});
  const [cofirmpass,setCofirmPass]= useState("");
  const [isSamePass,setIsSamePass]= useState(false)
;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const usertmp = {username:data.get("username"), password:data.get("password")};
    checkPass(data.get("password"),cofirmpass);
    setValue(usertmp);
  };
  const checkPass=(password,confirm)=>{
    password ===confirm ? setIsSamePass(true) : setIsSamePass(false);
}
  return (
    <ThemeProvider theme={theme}>
      
      <Container
        className="bg-palette3 p-4 m-4 mt-16 rounded-3xl"
        maxWidth="xs"
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ثبت نام
          </Typography>
          <Box component="form"  onSubmit={handleSubmit}  noValidate sx={{ mt: 1 }}>
                <TextField                
              margin="normal"
              required
              fullWidth
              id="username"
              placeholder="نام کاربری"
              name="username"
              autoFocus
                />
                <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="رمز عبور"
              type="password"
              id="password"
                />
                <TextField
              margin="normal"
              required
              fullWidth
              name="verifypassword"
              placeholder="تایید رمز عبور"
              type="password"
              id="verifypassword"
              onChange={(e)=> setCofirmPass(e.target.value)}
                />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              disabled={!isSamePass}
            >
              ثبت نام
            </Button>
            <Grid container className="flex justify-center">
                <Link href="/login" variant="body2">
                 ورود به اکانت
                </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
      </ThemeProvider >
  );
}