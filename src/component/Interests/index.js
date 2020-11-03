import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles, createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { social, interests } from '../Data/';

const Btn = withStyles((theme) => ({
    root: {
        color: "#FFFFFF",
        fontSize: "1.1rem",
        backgroundColor: "blue",
        fontWeight: "500",
        padding: ".2rem 1rem",
        marginRight: "0.8rem",
        borderRadius: "20px",
        '&:hover': {
            color: "blue",
            backgroundColor: "#FFFFFF",
            border: "1.8px solid blue"
        },
    },
}))(Button);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            padding: '0.8% 6%',
        },
    }),
);

const THEME = createMuiTheme();

function Interests() {
    const classes = useStyles();
    const isSmall = useMediaQuery(THEME.breakpoints.down('sm'));

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    return (
        <ThemeProvider theme={THEME}>
            <div className={classes.root} >

                <Grid container spacing={isSmall ? 4 : 10} >
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography component="p" style={{ paddingTop: "30px", textAlign: "left", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "1.4rem", fontWeight: "600" }}>I love to continually learn and improve my skills. It is very important to make ourselves well acquainted with modern technology and concepts as new innovations arises every now and then.</Typography>
                        <Box display="flex" flexwrap="wrap" mt={2}>

                            < Btn
                                variant="contained"
                                href={social.codechef}
                                target="_blank"
                                rel="noreferrer"
                                align="center"
                            >
                                Code{isSmall ? " " : ""}chef
                     </Btn>

                            < Btn
                                variant="contained"
                                href={social.hackerrank}
                                target="_blank"
                                rel="noreferrer"
                                align="center"
                            >
                                Hacker{isSmall ? " " : ""}rank
                     </Btn>

                            < Btn
                                variant="contained"
                                href={social.stopstalk}
                                target="_blank"
                                rel="noreferrer"
                                align="center"
                            >
                                Stop{isSmall ? " " : ""}Stalk
                     </Btn>
                        </Box>
                        <Box mt={5} >

                            <Box display="flex" flexwrap="nowrap">
                                <Box>
                                    <Typography component="p" style={{ paddingTop: "10px", textAlign: "left", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "1.4rem", fontWeight: "600" }}><span style={{ color: "blue" }}>Codechef</span> Highest Rating <span role="img">🏆</span>:&nbsp;&nbsp;&nbsp;</Typography>
                                </Box>
                                <Box flexGrow={1} alignSelf="flex-end">
                                    <Typography component="p" style={{ paddingTop: "10px", textAlign: "left", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "1.4rem", fontWeight: "600" }}>1558</Typography>
                                </Box>
                            </Box>
                            <Box display="flex" flexwrap="nowrap">
                                <Box >
                                    <Typography component="p" style={{ paddingTop: "10px", textAlign: "left", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "1.4rem", fontWeight: "600" }}><span style={{ color: "blue" }}>Hackerrank</span> Badge <span role="img">🏅</span>:&nbsp;&nbsp;&nbsp;</Typography>
                                </Box>
                                <Box flexGrow={1} alignSelf="flex-end">
                                    <Typography component="p" style={{ paddingTop: "10px", textAlign: "left", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "1.4rem", fontWeight: "600" }}>Python <span role="img">⭐</span><span role="img">⭐</span><span role="img">⭐</span><span role="img">⭐</span><span role="img">⭐</span></Typography>
                                </Box>
                            </Box>
                            <Box display="flex" flexwrap="wrap">
                                <Typography component="p" style={{ paddingTop: "10px", textAlign: "left", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "1.4rem", fontWeight: "600" }}><span style={{ color: "blue" }}>ICPC Asia Kanpur</span> Preliminary Online Site Competition <span role="img">🏆</span>:&nbsp;&nbsp;&nbsp;166th position</Typography>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} align="center">
                        <Slider {...settings}>
                            {interests.map((data) => (
                                <Box display="flex" flexwrap="nowarap" key={data.id}>
                                    <Box p={2}>
                                        <img src={require(`../assest/img/${data.img}.png`)} style={{ width: "85%" }} alt={data.img} />

                                    </Box>
                                    <Box align="center" mt={-1}>
                                        <Typography component="p" style={{ fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "1.5rem", fontWeight: "600", color: "#81049B" }}>{data.name}</Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Slider>
                    </Grid>
                </Grid>

            </div>
        </ThemeProvider>
    );
}

export default Interests;
