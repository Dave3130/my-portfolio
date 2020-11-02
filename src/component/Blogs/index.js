import React from "react";
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import { blogs } from '../Data/';


const ReadBtn = withStyles((theme) => ({
	root: {
		color: "#FFFFFF",
		fontSize: "1.1rem",
		backgroundColor: "rgb(100, 21, 255)",
		fontWeight: "500",
		padding: ".2rem 1rem",
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
			padding: '0.8% 6%'
		},
		title: {
			fontFamily: '"Baloo Tamma 2", "cursive"',
			fontSize: "1.4rem",
			color: '#000000',
			fontWeight: "600",
			lineHeight: '1.8rem',
		},
		img: {
			borderRadius: "30%",
			marginTop: "-5.5rem",
			height: "250px",
			width: "100%",
		},
		btn: {
			paddingBottom: "1.2rem",
		},
		paper: {
			minHeight: '250px',
			color: theme.palette.text.secondary,
			overflow: 'hidden',
			borderRadius: '10px',
			width: "90%",
			filter: 'drop-shadow(6px -6px 5px #E0E0E0)',
			'&:hover': {
				filter: 'drop-shadow(-8px 8px 9px #E0E0E0)',
			}
		},
		box: {
			"-webkit-transition": ".2s all",
			"-webkit-transition-delay": ".2s",
			"-moz-transition": ".2s all",
			"-moz-transition-delay": ".2s",
			"-ms-transition": ".2s all",
			"-ms-transition-delay": ".2s",
			"-o-transition": ".2s all",
			"-o-transition-delay": ".2s",
			"transition": ".2s all",
			"transition-delay": ".2s",
			'&:hover': {
				filter: 'drop-shadow(-8px 8px 9px #E0E0E0)',

				"& $img": {
					borderRadius: "0",
					marginTop: "0",
					"-webkit-transition": ".2s all",
					"-webkit-transition-delay": ".2s",
					"-moz-transition": ".2s all",
					"-moz-transition-delay": ".2s",
					"-ms-transition": ".2s all",
					"-ms-transition-delay": ".2s",
					"-o-transition": ".2s all",
					"-o-transition-delay": ".2s",
					"transition": ".2s all",
					"transition-delay": ".2s",
				},
				"& $title": {
					display: "none",
				},
				"& $btn": {
					marginTop: "-6.5rem",
					color: "rgb(100, 21, 255)",
					backgroundColor: "#FFFFFF",
				},
			},
		}
	}),
);

const THEME = createMuiTheme();

function Blogs() {

	const classes = useStyles();
	const isSmall = useMediaQuery(THEME.breakpoints.down('md'));
	return (
		<ThemeProvider theme={THEME}>
			<div className={classes.root} >
				<Typography component="p" style={{ paddingTop: "30px", paddingBottom: "20px", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "3rem", fontWeight: "600", color: "#81049B" }}>Blogs</Typography>
				<Grid container spacing={isSmall ? 5 : 10} align="center">
					{blogs.map((data) => (
						<Grid item xs={12} sm={6} md={6} className={classes.box} key={data.id}>
							<Paper className={classes.paper} elevation={3}>
								<Box display="flex" flexWrap="wrap" className={classes.transition}>
									<img src={data.img} className={classes.img} alt="blog" />
								</Box>
								<Box display="flex" flexWrap="nowrap" px={2} pt={5} pb={1} justifyContent="center">
									<Typography className={classes.title} component="p" >{data.title}</Typography>
								</Box>

								<Box align="center" className={classes.btn}>
									<ReadBtn variant="contained" href={data.url} target="_blank" rel="noreferrer" >Read</ReadBtn>
								</Box>
							</Paper>

						</Grid>
					))}
				</Grid>


			</div>
		</ThemeProvider>
	);

}

export default Blogs;