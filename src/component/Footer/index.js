import React, { ChangeEvent, useState } from "react";
import '../App/App.css';
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import { ReactComponent as Instagram } from './Instagram.svg';
import { ReactComponent as Git } from './Git.svg';
import { ReactComponent as LinkedIn } from './LinkedIn.svg';
import Link from '@material-ui/core/Link';
import { social } from '../Data/';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SubmitBtn = withStyles((theme) => ({
    root: {
        color: "#FFFFFF",
        fontSize: "1.1rem",
        backgroundColor: "rgb(100, 21, 255)",
        fontWeight: "500",
        marginTop: "0.8rem",
        bottom: "0",
        padding: "0.2rem 1.6rem",
        borderRadius: "20px",
        '&:hover': {
            color: "rgb(100, 21, 255)",
            backgroundColor: "#FFFFFF",
            border: "1.8px solid rgb(100, 21, 255)"
        },
    },
}))(Button);


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            overflow: "hidden",
            paddingTop: "6rem",
            '& .MuiTextField-root': {
                margin: theme.spacing(1.5),
                width: '80%',
                color: 'rgb(100, 21, 255)',
                '&:hover': {
                    borderBottomColor: 'rgb(100, 21, 255)',
                },
            },
        },
        paper: {
            minHeight: "380px",
            width: "80%",
            padding: theme.spacing(2),
            color: theme.palette.text.secondary,
            borderRadius: '20px',
            overflow: 'hidden',
            filter: 'drop-shadow(2px 2px 5px #E0EFE0)',

        },
        icons: {
            padding: "1rem",
        },
        title: {
            fontFamily: '"Baloo Tamma 2", "cursive"',
            fontSize: "1.8rem",
            color: '#FF0033',
            fontWeight: "600",
            lineHeight: 0.95
        },
    }),
);
const THEME = createMuiTheme();

function Footer() {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState(false);

    const classes = useStyles();
    const isBig = useMediaQuery(THEME.breakpoints.up('sm'));
    const profileImg = {
        display: "flex",
        justifyContent: "center",
        width: isBig ? "14rem" : "12rem",
        border: "4px solid rgb(100, 21, 255)",
        borderRadius: '20%',
        filter: 'drop-shadow(8px 8px 12px #b8b894)',
        ZIndex: "10",
        marginBottom: isBig ? "1rem" : "2rem",
        marginRight: isBig ? "2rem" : "0rem",
    }
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };

    const validateName = (value: string): string => {
        const error = value ? false : true;
        setNameError(error);
        return error;
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    };

    const validateEmail = (value: string): string => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const error = regex.test(value) ? false : true;
        setEmailError(error);
        return error;
    };

    const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value);
    };

    const validateMessage = (value: string): string => {
        const error = value ? false : true;
        setMessageError(error);
        return error;
    };


    const submitForm = async (e) => {
        e.preventDefault();
        const validName = validateName(name);
        const validEmail = validateEmail(email);
        const validMessage = validateMessage(message);
        if (validName === false && validEmail === false && validMessage === false) {

            var templateParams = {
                name: name,
                email: email,
                message: message
            };
            emailjs.send('{process.env.REACT_APP_EMAILJS_SERVICE_ID}', '{process.env.REACT_APP_EMAILJS_TEMPLATE_ID}', templateParams, '{process.env.REACT_APP_EMAILJS_USER_ID}')
                .then(function (response) {
                    Swal.fire({
                        title: 'Success!!',
                        text: 'Your response has been recorded',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    setName('');
                    setEmail('');
                    setMessage('');
                }, function (error) {
                    Swal.fire({
                        title: 'Oops !!',
                        text: 'Some Error occurred while processing your request\nPlease try after some time.',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                });

        }
        else {
            Swal.fire({
                title: 'Error !!',
                text: 'Fill all the details properly !!',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }

    };


    return (
        <ThemeProvider theme={THEME}>
            <div className={classes.root}>
                <Grid container justify="center" spacing={isBig ? 10 : 5} style={{ "marginBottom": "2rem", padding: '2% 4%' }}>
                    <Grid item xs={6} sm={6} md={3} align="center">

                        <Box p={1}>
                            <img src={require('../assest/icons/eating.gif')} style={{ width: "11rem" }} alt="eat" />
                        </Box>
                        <Box flexWrap="wrap">
                            <Typography className={classes.title} component="p">Eat</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} align="center">

                        <Box p={1} >
                            <img src={require('../assest/icons/coding.gif')} style={{ width: "10rem" }} alt="code" />
                        </Box>
                        <Box flexWrap="wrap">
                            <Typography className={classes.title} component="p">Code</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} align="center">

                        <Box p={1} >
                            <img src={require('../assest/icons/sleeping.gif')} style={{ width: "12rem", borderRadius: "40px" }} alt="sleep" />
                        </Box>
                        <Box flexWrap="wrap">
                            <Typography className={classes.title} component="p">Sleep</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} align="center">

                        <Box p={1} >
                            <img src={require('../assest/icons/repeating.gif')} style={{ width: "10rem" }} alt="repeat" />
                        </Box>
                        <Box flexWrap="wrap">
                            <Typography className={classes.title} component="p">Repeat</Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container style={isBig ? { padding: '2% 4%', marginBottom: "-18%" } : { padding: '2% 6%' }} direction={isBig ? "row" : "column-reverse"}>



                    <Grid item xs={12} sm={6} md={5} align="center">

                        <Paper className={classes.paper} elevation={3}>
                            <Typography component="p" style={{ fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "1.5rem", fontWeight: "600", color: "#81049B" }}>Feel Free to Contact Me <span role="img">🙂</span></Typography>
                            <form noValidate autoComplete="off" id="contactForm">

                                < TextField
                                    id="name"
                                    label="Name"
                                    type="text"
                                    value={name}
                                    onChange={handleNameChange}
                                    error={nameError}
                                />
                                <TextField
                                    id="email"
                                    label="Email Address"
                                    type="email"
                                    value={email}
                                    pattern='/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
                                    onChange={handleEmailChange}
                                    error={emailError}
                                    helperText="You won't get any spam"
                                />
                                <TextField
                                    id="message"
                                    label="Your Message"
                                    type="text"
                                    multiline
                                    rows={3}
                                    value={message}
                                    onChange={handleMessageChange}
                                    error={messageError}
                                />

                                <SubmitBtn variant="contained" href="" rel="noreferrer" onClick={submitForm} >Submit</SubmitBtn>

                            </form>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={7} align={isBig ? "right" : "center"} p={4}>

                        <img style={profileImg} src={require('../assest/img/JD.jpg')} alt="profile-img" />

                    </Grid>
                </Grid>




                {isBig ?
                    <svg width="1425" height="325" viewBox="0 0 1425 325" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><path d="M4 94.0576C4 94.0576 102.327 -19.6512 187.178 58.2799C272.029 136.211 209.92 178.798 449 105.642C688.081 32.487 705.422 250.888 820.5 129.5C981.663 -40.5 1067.75 289.536 1158.14 105.642C1248.52 -78.2503 1420.89 33.8139 1420.89 33.8139L1421 317L1331.04 316.864C1241.08 316.73 1061.14 316.459 881.209 316.189C701.278 315.919 521.346 315.649 341.415 315.379C161.483 315.109 151.171 316.538 4.68532 314.873L4 94.0576Z" fill="#6415FF" /></g><defs><filter id="filter0_d" x="0" y="0" width="1425" height="325" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset dy="4" /><feGaussianBlur stdDeviation="2" /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" /><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" /><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" /></filter></defs></svg>
                    :
                    <svg width="1094" height="239" viewBox="0 0 1094 239" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><path d="M0.5 58.7583C0.5 58.7583 94.5 3.26523 170.5 58.7583C246.5 114.251 264.672 77.1868 332.856 45.5C453.356 -10.5 487.003 148.98 592.356 45.5C729.5 -89.2068 772.671 187.706 888.99 45.5C977.5 -62.7068 1094.5 58.7583 1094.5 58.7583V230.751L1025.01 230.622C955.522 230.494 816.536 230.236 677.55 229.979C538.567 229.722 399.583 229.465 260.599 229.208C121.615 228.951 113.65 230.312 0.5 228.727V58.7583Z" fill="#6415FF" /></g><defs><filter id="filter0_d" x="-3.5" y="0.620148" width="1102" height="238.131" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset dy="4" /><feGaussianBlur stdDeviation="2" /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" /><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" /><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" /></filter></defs></svg>
                }

                <Box align="center" style={{ marginTop: "-8.6rem" }}>
                    <Box display="flex" flexwrap="wrap" justifyContent="center">
                        <Link href={social.insta} target="_blank">
                            <Instagram className={classes.icons} alt="instagram" />
                        </Link>
                        <Link href={social.git} target="_blank">
                            <Git className={classes.icons} alt="github" />
                        </Link>
                        <Link href={social.linkedIn} target="_blank">
                            <LinkedIn className={classes.icons} alt="linkedin" />
                        </Link>
                    </Box>
                    <Box>
                        <Typography component="p" style={{ paddingBottom: "0.5rem", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "1.5rem", fontWeight: "600", color: "#FFFFFF" }}>
                            Made with ❤ by Me
                                </Typography>
                    </Box>
                </Box>
            </div>
        </ThemeProvider >
    );

}

export default Footer;