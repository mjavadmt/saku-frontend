import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, grey } from "@mui/material/colors";
import { login } from "requests/user";
import { useNavigate } from "react-router-dom";
import { SPLASH } from "constant/routes";
import { LOGIN_FAILED, EMPTY_ERROR_MESSAGE } from "constant/errorText";
import { toast } from "react-toastify";
const theme = createTheme({
  typography: {
    fontFamily: ['"Dana-FaNum"'],
  },
  direction: "rtl",
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
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const usertmp = {
      username: data.get("username"),
      password: data.get("password"),
    };
    if (!!usertmp.username || !!usertmp.password) {
      login(usertmp)
        .then((response) => {
          localStorage.setItem("access", response.access);
          localStorage.setItem("refresh", response.refresh);
          navigate(SPLASH);
        })
        .catch((error) => toast.error(LOGIN_FAILED));
    } else {
      toast.error(EMPTY_ERROR_MESSAGE);
    }
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
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AccountCircle />
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
              data-testid = "username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="رمز عبور"
              type="password"
              data-testid = "password"
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              data-testid = "button"
              sx={{ mt: 3, mb: 2 }}
            >
              ورود
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgotpassword" variant="body2">
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
