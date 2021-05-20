import React from "react";
import "../App/App.css";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { skills, tools } from "../Data/";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '0.8% 6%' 
    },
    heading1:{
        fontFamily: '"Baloo Tamma 2", "cursive"',
        fontSize: "1.65rem",
        color: '#000000',
        fontWeight: "600",
        lineHeight: '1.8rem',
    },
    iconStyle: {
        width: '2.2rem',  
        filter: 'drop-shadow( 4px -4px 4px #DA70D6)',
    },  
    description: {
        fontFamily: '"Baloo Tamma 2", "cursive"',
        fontSize: "1.2rem",
        color: '#8F8B83',
        fontWeight: "400",
        lineHeight: '1.8rem'
    },
    svgIcon:{
        width: "3.6rem",
    },
    skillsName:{
        color: "#737373"
    }
 
  }),
);

const THEME = createMuiTheme();

function Skills() {
    const classes = useStyles();
    const isSmall = useMediaQuery(THEME.breakpoints.down('md'));
		return(
            <ThemeProvider theme={THEME}>
                <div className={classes.root} >
                    <Typography component="p" style={{paddingTop:"25px", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "3rem", fontWeight: "600", color: "#81049B"}}>Skills</Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={5} >
                            <Box display="flex" flexWrap="nowrap" p={1} mt={2} alignItems="center" justifyContent="center" >
                                <img src={require('../assest/img/skills.svg')} style={{width:"95%"}} alt="skills"/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={7}>
                            
                            <Box display="flex" flexWrap="nowrap" p={2} align="center">
                                <Typography className={classes.heading1} component="p" >Passionate Full Stack Developer who wants to explore every tech stack</Typography>
                            </Box>
                            <Box display="flex" flexWrap="wrap" p={1}>
                                {skills.map((data) => (
                                    <Box p={isSmall ? 2 : 1.6} align="center" key={data.id}>
                                        <img src={require(`../assest/img/${data.img}.svg`)} className={classes.svgIcon} alt="icon" /> 
                                        <Typography component="p" className={classes.skillsName}>{data.name}</Typography>
                                    </Box>
                                ))}
                            </Box>
                            <Box display="flex" flexWrap="nowrap" pt={1.8} pb={0.8} alignItems="center" justifyContent="center" >
                                <Typography className={classes.heading1} component="p" >Tools & Libraries</Typography>
                            </Box>
                            <Box display="flex" flexWrap="wrap" p={1}>
                                    {tools.map((data) => (
                                        <Box p={isSmall ? 1 : 1.2} align="center" key={data.id}>
                                            <img src={require(`../assest/img/${data.img}.svg`)} className={classes.svgIcon} alt="icon"/> 
                                            <Typography component="p" className={classes.skillsName}>{data.name}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                             
                        </Grid>
                    </Grid>


                 </div> 
        </ThemeProvider>
		);
	
}

export default Skills;