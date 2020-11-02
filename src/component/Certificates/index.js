import React from "react";
import '../App/App.css';
import { makeStyles, createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { certificates } from '../Data/';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			padding: '0.8% 6%',
		},
		paper: {
			minHeight: '100px',
			padding: theme.spacing(1.5),
			color: theme.palette.text.secondary,
			borderRadius: '20px',
			overflow: 'hidden',
			filter: 'drop-shadow(8px 8px 10px #E0E0E0)',
			'&:hover': {
				filter: 'drop-shadow(-8px 8px 10px #E0E0E0)'
			}
		},
		iconStyle: {
			width: '2.8rem',
		},
		title: {
			fontFamily: '"Baloo Tamma 2", "cursive"',
			fontSize: "1.5rem",
			fontWeight: "600",
			lineHeight: "1.6rem",
			color: "#000000"
		},
		year: {
			fontFamily: '"Baloo Tamma 2", "cursive"',
			fontSize: "1rem",
			fontWeight: "600",
			color: "#81049B",
			textAlign: 'left',
		},
	}),
);

const THEME = createMuiTheme();

function Certificates() {
	const classes = useStyles();
	const isSmall = useMediaQuery(THEME.breakpoints.down('md'));

	return (
		<ThemeProvider theme={THEME}>
			<div className={classes.root} >
				<Typography component="p" style={{ paddingTop: "30px", paddingBottom: "25px", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "3rem", lineHeight: "3.1rem", fontWeight: "600", color: "#81049B" }}>Major Certifications
            <img src={require('../assest/icons/certificate.png')} style={{ width: "3.8rem", marginTop: "-0.7rem" }} alt="icon" />
				</Typography>

				<Grid container spacing={4}>
					{certificates.map(data => (
						<Grid item xs={12} sm={6} md={6} px={1} key={data.id}>
							<Paper className={classes.paper} elevation={3}>

								<Box
									display="flex"
									flexWrap="nowrap"
									bgcolor="background.paper"
								>
									<Box px={1} pt={1} pb={0.3}>
										<img className={classes.iconStyle} src={require(`../assest/icons/${data.icon}`)} alt="icon" />
									</Box>
									<Box px={1} pt={1.2} pb={0.3} align="vertical">
										<Typography className={classes.title} component="p">{data.title}</Typography>
									</Box>

								</Box>
								<Box px={1} display="flex" flexWrap="nowrap">
									<Box flexGrow={1} >
										<Typography className={classes.year} component="p">{data.date}</Typography>
									</Box>
									{data.url !== "" &&
										<Box >
											<Link component='a' underline='hover' variant='inherit' href={data.url} target="_blank" rel="noreferrer" style={{ textDecoraton: "none", fontWeight: "600", color: "#81049B" }}><i className="fas fa-angle-double-right"></i>&nbsp;See Credentials</Link>
										</Box>
									}
								</Box>
							</Paper>
						</Grid>
					))}
				</Grid>
			</div>
		</ThemeProvider>
	);
}

export default Certificates;
