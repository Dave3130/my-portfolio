import React from "react";
import '../App/App.css';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Link from '@material-ui/core/Link';
import { social } from '../Data/';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			overflow: "hidden",

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
		headingOne: {
			fontSize: "2rem",
			lineHeight: "3.2rem",
			fontFamily: '"Baloo Tamma 2", "cursive"',
			fontWeight: "600",
			paddingTop: "20%",
			paddingLeft: "10%",
			paddingRight: "10%",
			color: "black"
		},
		headingTwo: {
			fontSize: "2.7rem",
			lineHeight: "2.8rem",
			fontFamily: '"Baloo Tamma 2", "cursive"',
			fontWeight: "600",
			paddingLeft: "10%",
			paddingRight: "10%",
			color: "rgb(100, 21, 255)"
		},
		description: {
			fontSize: "1.5rem",
			lineHeight: "1.9rem",
			fontFamily: '"Baloo Tamma 2", "cursive"',
			fontWeight: "400",
			paddingTop: "0.7rem",
			paddingBottom: "0.2rem",
			paddingRight: "10%",
			paddingLeft: "10%",
		},
		iconStyle: {
			width: "2.5rem",
			paddingRight: "1.5rem",
			paddingTop: "15%"
		}
	}),
);
const THEME = createMuiTheme();

function Hero() {
	const classes = useStyles();
	const isMedium = useMediaQuery(THEME.breakpoints.between('sm', 'md'));

	const img = {
		width: isMedium ? "100%" : "80%",
		paddingTop: "5.5rem",
	}


	return (
		<ThemeProvider theme={THEME}>
			<div className={classes.root}>

				<Grid container>
					<Grid item xs={12} sm={7} md={6} >
						<Typography component="p" className={classes.headingOne}>Hey, there<span role="img" aria-label="hello">👋</span></Typography>
						<Typography component="p" className={classes.headingTwo}>I am Jaydeep Dave</Typography>
						<Typography component="p" className={classes.description}>A passionate Software Developer <span role="img" aria-label="rocket">🚀</span> having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.</Typography>

						<Box display="flex" flexwrap="wrap" style={{ paddingLeft: "10%" }}>
							<Link href={social.git} target="_blank">
								<img src={require('../assest/icons/github.png')} className={classes.iconStyle} alt="github" />
							</Link>
							<Link href={social.linkedIn} target="_blank">
								<img src={require('../assest/icons/linkedin.png')} className={classes.iconStyle} alt="linkedin" />
							</Link>
							<Link href={social.insta} target="_blank">
								<img src={require('../assest/icons/instagram.png')} className={classes.iconStyle} alt="instagram" />
							</Link>
							<Link href={"mailto:" + social.gmail} target="_self">
								<img src={require('../assest/icons/gmail.png')} className={classes.iconStyle} alt="gmail" />
							</Link>
						</Box>
					</Grid>
					<Grid item xs={12} sm={5} md={6} >

						<Box align="center" >
							<img src={require('./bg.png')} style={img} alt="hero-bg" />

						</Box>
					</Grid>
				</Grid>
			</div>
		</ThemeProvider>
	);

}

export default Hero;