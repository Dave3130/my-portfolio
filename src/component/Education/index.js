import React from "react";
import '../App/App.css';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			padding: '0.8% 6%',
		},
		paper: {
			minHeight: '165px',
			padding: theme.spacing(2.8),
			color: theme.palette.text.secondary,
			borderBottomRightRadius: '40px',
			borderTopLeftRadius: '40px',
			overflow: 'hidden',
			filter: 'drop-shadow(8px 8px 10px #E0E0E0)',
			'&:hover': {
				filter: 'drop-shadow(-8px 8px 10px #E0E0E0)'
			}
		},
		iconStyle: {
			width: '4rem',
			filter: 'drop-shadow( 4px -4px 4px #DA70D6)',

		},
		heading: {
			fontFamily: '"Baloo Tamma 2", "cursive"',
			fontSize: "2.4rem",
			color: 'rgb(100, 21, 255)',
			fontWeight: "600",
			lineHeight: 1
		},
		subHeading1: {
			fontFamily: '"Baloo Tamma 2", "cursive"',
			fontSize: "1.5rem",
			color: 'rgb(100, 21, 255)',
			fontWeight: "500",
			lineHeight: 0.95
		},
		subHeading2: {
			fontFamily: '"Baloo Tamma 2", "cursive"',
			fontSize: "1.1rem",
			fontWeight: "400",
			paddingTop: "1px"

		},
		score: {
			fontFamily: '"Baloo Tamma 2", "cursive"',
			fontSize: "1.4rem",
			fontWeight: "400",
			color: "#0F0000",
			textDecoration: "underline",
			textUnderlinePosition: "under",
			textDecorationColor: "#81049B",

		},
		year: {
			fontFamily: '"Baloo Tamma 2", "cursive"',
			fontSize: "1.3rem",
			fontWeight: "400",
			color: "#0F0000",
			textAlign: 'left',
		},
		title: {
			fontFamily: '"Baloo Tamma 2", "cursive"',
			fontSize: "1.8rem",
			color: '#FF0033',
			fontWeight: "600",
			lineHeight: 0.95
		}
	}),
);

const THEME = createMuiTheme();

function Education() {
	const classes = useStyles();
	const isSmall = useMediaQuery(THEME.breakpoints.down('md'));

	return (
		<ThemeProvider theme={THEME}>
			<div className={classes.root} >
				<Typography component="p" style={{ paddingTop: "30px", paddingBottom: "10px", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "3rem", fontWeight: "600", color: "#81049B" }}>Education</Typography>
				<Grid container spacing={isSmall ? 4 : 10}>
					<Grid item xs={12} sm={6} md={4}>
						<Paper className={classes.paper} elevation={3}>
							<Box
								display="flex"
								flexWrap="nowrap"
								bgcolor="background.paper"

							>
								<Box p={1}>
									<img className={classes.iconStyle} src={require('../assest/icons/be.png')} alt="BE-icon" />
								</Box>
								<Box p={1} flexWrap="wrap">
									<Typography className={classes.heading} component="p">B.E.</Typography>
									<Typography className={classes.subHeading1} component="p">Information Technology</Typography>
									<Typography className={classes.subHeading2} component="p">Mumbai University</Typography>
								</Box>

							</Box>
							<Box p={1} display="flex" flexWrap="nowrap">
								<Box flexGrow={1} >
									<Typography className={classes.year} component="p">2017-21</Typography>
								</Box>
								<Box >
									<div>
										<Typography className={classes.score} component="p">8.16 CGPA</Typography>
									</div>
								</Box>
							</Box>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Paper className={classes.paper} elevation={3}>
							<Box
								display="flex"
								flexWrap="nowrap"
								bgcolor="background.paper"
							>
								<Box p={1}>
									<img className={classes.iconStyle} src={require('../assest/icons/hsc.png')} alt="HSC-icon" />
								</Box>
								<Box p={1} flexWrap="wrap">
									<Typography className={classes.heading} component="p">H.S.C.</Typography>
									<Typography className={classes.subHeading1} component="p">Bifocal Electronics</Typography>
									<Typography className={classes.subHeading2} component="p">Mithibai College</Typography>
								</Box>

							</Box>
							<Box p={1} display="flex" flexWrap="nowrap">
								<Box flexGrow={1} >
									<Typography className={classes.year} component="p">2015-17</Typography>
								</Box>
								<Box >
									<div>
										<Typography className={classes.score} component="p">79.54%</Typography>
									</div>
								</Box>
							</Box>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Paper className={classes.paper} elevation={3}>
							<Box
								display="flex"
								flexWrap="nowrap"
								bgcolor="background.paper"
							>
								<Box p={1}>
									<img className={classes.iconStyle} src={require('../assest/icons/ssc.png')} alt="SSC-icon" />
								</Box>
								<Box p={1} flexWrap="wrap">
									<Typography className={classes.heading} component="p">S.S.C.</Typography>
									<Typography className={classes.subHeading1} component="p"></Typography>
									<Typography className={classes.subHeading2} component="p">Maharashtra State Board</Typography>
								</Box>
							</Box>
							<Box p={1} display="flex" flexWrap="nowrap">
								<Box flexGrow={1} >
									<Typography className={classes.year} component="p">2014-15</Typography>
								</Box>
								<Box >
									<div>
										<Typography className={classes.score} component="p">85.4%</Typography>
									</div>
								</Box>
							</Box>
						</Paper>
					</Grid>
				</Grid>

			</div>
		</ThemeProvider>
	);
}

export default Education;
