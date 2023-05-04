import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import "./index.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
//مزایده مناقصه بر اساس شهر ها
const bull = (
    <Box
        component='span'
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
        •
    </Box>
);

export const CityAuction = ({}) => {
    return (
        <Grid container>
            <Grid item>
                <Card sx={{ minWidth: 265 }} className='card1'>
                    <CardContent>
                        <Typography
                            variant='h5'
                            component='div'
                            className='city'
                        >
                            تهران
                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                            مزایده مناقصه تهران
                        </Typography>
                        <Typography variant='body2'>1234 آگهی</Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size='small'
                            style={{ color: "#c786d3", marginRight: "140px" }}
                        >
                            مشاهده بیشتر <KeyboardBackspaceIcon />{" "}
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item>
                <Card sx={{ minWidth: 265 }} className='card1'>
                    <CardContent>
                        <Typography variant='h5' component='div'>
                            اهواز
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                            مزایده مناقصه اهواز{" "}
                        </Typography>
                        <Typography variant='body2'>324 آگهی</Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size='small'
                            style={{ color: "#c786d3", marginRight: "140px" }}
                        >
                            مشاهده بیشتر <KeyboardBackspaceIcon />{" "}
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item>
                <Card sx={{ minWidth: 265 }} className='card1'>
                    <CardContent>
                        <Typography variant='h5' component='div'>
                            مشهد
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                            مزایده مناقصه مشهد
                        </Typography>
                        <Typography variant='body2'>7659 آگهی</Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size='small'
                            style={{ color: "#c786d3", marginRight: "140px" }}
                        >
                            مشاهده بیشتر <KeyboardBackspaceIcon />{" "}
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item>
                <Card sx={{ minWidth: 265 }} className='card1'>
                    <CardContent>
                        <Typography variant='h5' component='div'>
                            اصفهان
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                            مزایده مناقصه اصفهان
                        </Typography>
                        <Typography variant='body2'>3456 آگهی</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small' style={{ color: "#c786d3" }}>
                            مشاهده بیشتر <KeyboardBackspaceIcon />
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item>
                <Card sx={{ minWidth: 265 }} className='card1'>
                    <CardContent>
                        <Typography
                            variant='h5'
                            component='div'
                            className='city'
                        >
                            شیراز{" "}
                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                            مزایده مناقصه شیراز{" "}
                        </Typography>
                        <Typography variant='body2'>1234 آگهی</Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size='small'
                            style={{ color: "#c786d3", marginRight: "140px" }}
                        >
                            مشاهده بیشتر <KeyboardBackspaceIcon />{" "}
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item>
                <Card sx={{ minWidth: 265 }} className='card1'>
                    <CardContent>
                        <Typography variant='h5' component='div'>
                            اراک{" "}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                            مزایده مناقصه اراک{" "}
                        </Typography>
                        <Typography variant='body2'>324 آگهی</Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size='small'
                            style={{ color: "#c786d3", marginRight: "140px" }}
                        >
                            مشاهده بیشتر <KeyboardBackspaceIcon />{" "}
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item>
                <Card sx={{ minWidth: 265 }} className='card1'>
                    <CardContent>
                        <Typography variant='h5' component='div'>
                            یزد
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                            مزایده مناقصه یزد{" "}
                        </Typography>
                        <Typography variant='body2'>7659 آگهی</Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size='small'
                            style={{ color: "#c786d3", marginRight: "140px" }}
                        >
                            مشاهده بیشتر <KeyboardBackspaceIcon />{" "}
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item>
                <Card sx={{ minWidth: 265 }} className='card1'>
                    <CardContent>
                        <Typography variant='h5' component='div'>
                            ساری
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                            مزایده مناقصه ساری{" "}
                        </Typography>
                        <Typography variant='body2'>3456 آگهی</Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size='small'
                            style={{ color: "#c786d3", marginRight: "140px" }}
                        >
                            مشاهده بیشتر <KeyboardBackspaceIcon />
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item>
                <Card sx={{ minWidth: 265 }} className='card1'>
                    <CardContent>
                        <Typography
                            variant='h5'
                            component='div'
                            className='city'
                        >
                            تهران
                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                            مزایده مناقصه تهران
                        </Typography>
                        <Typography variant='body2'>1234 آگهی</Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size='small'
                            style={{ color: "#c786d3", marginRight: "140px" }}
                        >
                            مشاهده بیشتر <KeyboardBackspaceIcon />{" "}
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item>
                <Card sx={{ minWidth: 265 }} className='card1'>
                    <CardContent>
                        {/* <Typography
                            sx={{ fontSize: 14 }}
                            color='text.secondary'
                            gutterBottom
                        >
                            Word of the Day
                        </Typography> */}
                        <Typography variant='h5' component='div'>
                            اهواز
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                            مزایده مناقصه اهواز{" "}
                        </Typography>
                        <Typography variant='body2'>324 آگهی</Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size='small'
                            style={{ color: "#c786d3", marginRight: "140px" }}
                        >
                            مشاهده بیشتر <KeyboardBackspaceIcon />{" "}
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item>
                <Card sx={{ minWidth: 265 }} className='card1'>
                    <CardContent>
                        <Typography variant='h5' component='div'>
                            مشهد
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                            مزایده مناقصه مشهد
                        </Typography>
                        <Typography variant='body2'>7659 آگهی</Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size='small'
                            style={{ color: "#c786d3", marginRight: "140px" }}
                        >
                            مشاهده بیشتر <KeyboardBackspaceIcon />{" "}
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item>
                <Card sx={{ minWidth: 265 }} className='card1'>
                    <CardContent>
                        <Typography variant='h5' component='div'>
                            اصفهان
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                            مزایده مناقصه اصفهان
                        </Typography>
                        <Typography variant='body2'>3456 آگهی</Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size='small'
                            style={{ color: "#c786d3", marginRight: "140px" }}
                        >
                            مشاهده بیشتر <KeyboardBackspaceIcon />
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
};
