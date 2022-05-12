import React from "react";
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
import { forgot } from "requests/user";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "constant/routes";
import { FAILED_FORGOT, SUCCESS_FORGOT,EMPTY_ERROR_MESSAGE } from "constant/errorText";
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

export function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const usertmp = {
      email: data.get("email")
    };
    if (!!usertmp.email ) {
      forgot(usertmp)
        .then((response) => {
          navigate(LOGIN);
          toast(SUCCESS_FORGOT);
        })
        .catch((error) => toast.error(FAILED_FORGOT));
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            فراموشی رمز عبور
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
              id="email"
              placeholder="ایمیل"
              name="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              تایید 
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/login" variant="body2">
                  ورود
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
