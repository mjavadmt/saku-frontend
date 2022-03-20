import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, grey } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: ['"Dana-FaNum"'],
  },
  palette: {
    // palette values for dark mode
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

export function Login() {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const usertmp = {
      username: data.get("username"),
      password: data.get("password"),
    };
    setUserInfo(usertmp);
  };

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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ورود
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ورود
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  فراموشی رمز عبور
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  ساخت اکانت
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
