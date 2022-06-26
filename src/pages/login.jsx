import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, grey } from "@mui/material/colors";
import { login } from "requests/user";
import { useNavigate } from "react-router-dom";
import { FORGOTPASSWORD, SIGNUP, SPLASH } from "constant/routes";
import { LOGIN_FAILED, EMPTY_ERROR_MESSAGE } from "constant/errorText";
import { toast } from "react-toastify";
import { setAPIHeader } from "utils/api";
import cx from "classnames";
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
  // const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
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
          
          setAPIHeader();
          navigate(SPLASH);
        })
        .catch((error) => toast.error(LOGIN_FAILED));
    } else {
      toast.error(EMPTY_ERROR_MESSAGE);
    }
  };
  const disabledCondition = !userName || !pass;

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
              inputProps={{ "data-testid": "username" }}
              // data-testid="username"
              autoFocus
              onChange={(e, val) => setUserName(e.target.value)}
              value={userName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="رمز عبور"
              type="password"
              data-testid="password"
              id="password"
              onChange={(e, val) => setPass(e.target.value)}
              value={pass}
            />
            <button
              className={cx(
                "text-white w-full h-10 r bg-palette1 my-2 rounded-xl",
                {
                  "text-white bg-slate-500": disabledCondition,
                }
              )}
              type="submit"
              disabled={disabledCondition}
            >
              ورود{" "}
            </button>
            <Grid container>
              <Grid item xs>
                <div
                  onClick={() => navigate(FORGOTPASSWORD)}
                  role="button"
                  className=" underline text-sm"
                >
                  فراموشی رمز عبور
                </div>
              </Grid>
              <Grid item>
                <div
                  onClick={() => navigate(SIGNUP)}
                  role="button"
                  className=" underline text-sm"
                  data-testid="createAccountLink"
                >
                  ساخت اکانت
                </div>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
