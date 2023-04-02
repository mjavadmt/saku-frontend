import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, grey } from "@mui/material/colors";
import { forgot } from "utils/api/requests/user";
import { useNavigate } from "react-router-dom";
import { LOGIN, SIGNUP } from "utils/constant/routes";
import { CircularProgress } from "@mui/material";
import cx from "classnames";
import {
    FAILED_FORGOT,
    SUCCESS_FORGOT,
    EMPTY_ERROR_MESSAGE,
} from "utils/constant/errorText";
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
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const usertmp = {
            email: data.get("email"),
        };
        if (!!usertmp.email) {
            setIsLoading(true);
            forgot(usertmp)
                .then((response) => {
                    navigate(LOGIN);
                    toast(SUCCESS_FORGOT);
                    setIsLoading(false);
                })
                .catch((error) => {
                    toast.error(FAILED_FORGOT);
                    setIsLoading(false);
                });
        } else {
            toast.error(EMPTY_ERROR_MESSAGE);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container
                className='bg-palette3 p-4 m-4 mt-16 rounded-3xl'
                maxWidth='xs'
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
                    <Typography component='h1' variant='h5'>
                        فراموشی رمز عبور
                    </Typography>
                    {isLoading ? (
                        <div className='w-full h-64 '>
                            <span className='flex h-full justify-center items-center'>
                                <CircularProgress color='inherit' />
                            </span>
                        </div>
                    ) : (
                        <Box
                            component='form'
                            onSubmit={handleSubmit}
                            noValidate
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                id='email'
                                placeholder='ایمیل'
                                name='email'
                                autoFocus
                                onChange={(e, val) => setEmail(e.target.value)}
                                value={email}
                            />
                            <button
                                className={cx(
                                    "text-white w-full h-10 r bg-palette1 my-2 rounded-xl",
                                    {
                                        "text-white bg-slate-500": !email,
                                    }
                                )}
                                type='submit'
                                disabled={!email}
                            >
                                بازیابی{" "}
                            </button>
                            <Grid container>
                                <Grid item xs>
                                    <div
                                        onClick={() => navigate(LOGIN)}
                                        role='button'
                                        className=' underline text-sm'
                                    >
                                        ورود
                                    </div>
                                </Grid>
                                <Grid item>
                                    <div
                                        onClick={() => navigate(SIGNUP)}
                                        role='button'
                                        className=' underline text-sm'
                                    >
                                        ساخت اکانت
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    )}
                </Box>
            </Container>
        </ThemeProvider>
    );
}
