import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, grey } from "@mui/material/colors";
import { toast } from "react-toastify";
import { signup, vrify } from "requests/user";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "constant/routes";
import { CircularProgress } from "@mui/material";
import cx from "classnames";
import {
  DIFFERENT_PASSWORDS,
  SIZE_PASSWORDS,
  SUCCESS_SIGNUP,
} from "constant/errorText";
const theme = createTheme({
  typography: {
    fontFamily: ['"Dana-FaNum"'],
  },
  disabledButton: {
    color: "red",
  },
  direction: "rtl",
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

export const SignUp = () => {
  const navigate = useNavigate();
  const [isConfirmStep, setIsconfirmStep] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [confirmCode, setConfirmCode] = useState();
  const [confirmCodeInput, setConfirmCodeInput] = useState();
  const [userData, setUserData] = useState({});
  const handleChange = (e, val) => {
    let data = { ...userData };
    data[e.target.name] = e.target.value;
    setUserData(data);
  };
  const changeDIR = (value) => {
    if (value && value[0].match(/[a-z]/i)) {
      return "ltr";
    }
    return "rtl";
  };
  const updateUserDara = (e) => {
    if (userData.password !== userData.confirmPassword) {
      toast.error(DIFFERENT_PASSWORDS);
      return;
    } else if (userData.password.length < 8) {
      toast.error(SIZE_PASSWORDS);
      return;
    }
    setIsLoading(true);
    signup(userData)
      .then((response) => {
        setConfirmCode(response.code);
        setIsconfirmStep(true);
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error("?????????? ?????????? ?????? ???? ???????? ???????? ??????.");
        setIsLoading(false);
      });
  };
  const chekCodeIsCorrect = () => {
    if (parseInt(confirmCode) === parseInt(confirmCodeInput)) {
      vrify(userData)
        .then(() => {
          toast.success(SUCCESS_SIGNUP);
          navigate(LOGIN);
        })
        .catch(() => {
          toast.error("???? ???????? ?????? ???????? ?????? ????????.");
        });
    } else {
      toast.error("???? ???????? ?????? ???????? ?????? ????????.");
    }
  };
  const disabledCondition =
    !userData.username ||
    !userData.email ||
    !userData.password ||
    !userData.confirmPassword;
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
            <GroupAddIcon />
          </Avatar>
          <Typography data-testid="singUpPage" component="h1" variant="h5">
            ?????? ??????
          </Typography>
          {isLoading ? (
            <div className="w-full h-64 ">
              <span className="flex h-full justify-center items-center">
                <CircularProgress color="inherit" />
              </span>
            </div>
          ) : (
            <div>
              {isConfirmStep ? (
                <div>
                  <TextField
                    style={{
                      direction: "ltr",
                    }}
                    margin="normal"
                    required
                    fullWidth
                    id="confirmCode"
                    placeholder="???? ??????????"
                    name="confirmCode"
                    onChange={(e) => setConfirmCodeInput(e.target.value)}
                    value={confirmCodeInput}
                  />

                  <Button
                    onClick={() => chekCodeIsCorrect()}
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3, mb: 2 }}
                  >
                    ??????????
                  </Button>
                  <Grid container className="flex justify-center">
                    <Link href="/login" variant="body2">
                      ???????? ???? ??????????
                    </Link>
                  </Grid>
                </div>
              ) : (
                <div>
                  <div>
                    <TextField
                      style={{
                        direction: changeDIR(userData.username),
                      }}
                      margin="normal"
                      required
                      fullWidth
                      id="username"
                      placeholder="?????? ????????????"
                      inputProps={{ "data-testid": "username" }}
                      name="username"
                      onChange={(e, val) => handleChange(e, val)}
                      value={userData.username}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      inputProps={{ "data-testid": "email" }}
                      placeholder="??????????"
                      name="email"
                      onChange={(e, val) => handleChange(e, val)}
                      value={userData.email}
                    />
                    <TextField
                      style={{
                        direction: "ltr",
                      }}
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      placeholder="?????? ????????"
                      type="password"
                      id="password"
                      onChange={(e, val) => handleChange(e, val)}
                      value={userData.password}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="confirmPassword"
                      placeholder="?????????? ?????? ????????"
                      type="password"
                      id="confirmPassword"
                      onChange={(e, val) => handleChange(e, val)}
                      value={userData.confirmPassword}
                    />

                    <button
                      className={cx(
                        "text-white w-full h-10 r bg-palette1 my-2 rounded-xl",
                        {
                          "text-white bg-slate-500": disabledCondition,
                        }
                      )}
                      onClick={(e) => updateUserDara(e)}
                      disabled={disabledCondition}
                    >
                      ?????? ??????
                    </button>
                    <Grid container className="flex justify-center">
                      <div
                        onClick={() => navigate(LOGIN)}
                        role="button"
                        className=" underline text-sm"
                        data-testid="loginLink"
                      >
                        ???????? ???? ??????????
                      </div>
                    </Grid>
                  </div>
                </div>
              )}
            </div>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};
