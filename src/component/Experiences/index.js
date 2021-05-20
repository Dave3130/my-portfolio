import React, { useState, useRef } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSpring, animated } from 'react-spring';
import { exp } from '../Data/';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            padding: '0.8% 6%'
        },
        paper: {
            minHeight: '15rem',
            maxHeight: '50rem',
            padding: theme.spacing(2.3),
            color: theme.palette.text.secondary,
            borderRadius: '10px',
            overflow: 'hidden',
            filter: 'drop-shadow(8px 9px 18px #E0E0E0)',
        },
        iconStyle: {
            width: '4.1rem',
        },
        title: {
            fontSize: "1.7rem",
            color: 'Black',
            fontWeight: "600",
            lineHeight: 1,
            fontFamily: '"Baloo Tamma 2", "cursive"'
        },
        role: {
            fontSize: "1.25rem",
            color: '#FA0EBD',
            fontWeight: "530",
            lineHeight: 0.95,
            fontFamily: '"Baloo Tamma 2", "cursive"'
        },
        time: {
            fontSize: "1.1rem",
            fontWeight: "400",
            paddingTop: "1px",
            fontFamily: '"Baloo Tamma 2", "cursive"',

        },
        description: {
            fontFamily: '"Baloo Tamma 2", "cursive"',
            fontSize: "1.15rem",
            fontWeight: "500",
            lineHeight: "1.45rem",
            color: "#0F0000"

        },
        expand: {
            transform: 'rotate(0deg)',
            color: "#81049B",
            textAlign: "left",
            padding: '.4rem .7rem',

        },
    }),
);




const THEME = createMuiTheme();

function Experience() {
    const classes = useStyles();
    const isSmall = useMediaQuery(THEME.breakpoints.down('md'));
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <ThemeProvider theme={THEME}>
            <div className={classes.root}>
                <Typography component="p" style={{ paddingTop: "35px", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "3rem", fontWeight: "600", color: "#81049B" }}>Experience</Typography>
                <Grid container spacing={isSmall ? 1 : 3}>
                    {/* Mapping Experience Data */}
                    {exp.map(exp => (

                        <Grid item xs={12} sm={6} md={4} key={exp.id}>
                            <Card>
                                <Paper className={classes.paper} elevation={3} style={{ transform: "scale(0.95)" }}>
                                    <Box
                                        display="flex"
                                        flexWrap="nowrap"
                                        bgcolor="background.paper"
                                    >
                                        <Box p={1}>
                                            <img className={classes.iconStyle} src={exp.logo} alt="logo" />
                                        </Box>
                                        <Box p={1} flexWrap="wrap">
                                            <Typography className={classes.title} component="p">{exp.title}</Typography>
                                            <Typography className={classes.role} component="p">{exp.role}</Typography>
                                            <Typography className={classes.time} component="p">{exp.time}</Typography>
                                        </Box>

                                    </Box>
                                    {isSmall ?
                                        <>
                                            {expanded === true ?
                                                <>

                                                    <Typography className={classes.description} component="p">{exp.description}</Typography>
                                                    <Typography
                                                        component="p"
                                                        className={clsx(classes.expand, {
                                                            [classes.expandOpen]: expanded,
                                                        })}
                                                        onClick={handleExpandClick}
                                                        aria-expanded={!expanded}
                                                    >See Less <i className="fas fa-chevron-circle-up"></i></Typography>
                                                </>
                                                :
                                                <>
                                                    <Typography className={classes.description} component="p">{exp.description.substr(0, 100) + "...."}</Typography>
                                                    <Typography
                                                        component="p"
                                                        className={clsx(classes.expand, {
                                                            [classes.expandOpen]: expanded,
                                                        })}
                                                        onClick={handleExpandClick}
                                                        aria-expanded={expanded}
                                                    >See More... <i className="fas fa-chevron-circle-down"></i></Typography>
                                                </>
                                            }
                                        </>
                                        :
                                        <Typography className={classes.description} component="p">{exp.description}</Typography>
                                    }

                                    <div style={{ textAlign: "center" }}>
                                        <img src={exp.img} style={{ width: "57%" }} alt="experience" />
                                    </div>
                                </Paper>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            </div>
        </ThemeProvider>
    );
}



function Card({ children }) {
    // We add this ref to card element and use in onMouseMove event ...
    // ... to get element's offset and dimensions.
    const ref = useRef();

    // Keep track of whether card is hovered so we can increment ...
    // ... zIndex to ensure it shows up above other cards when animation causes overlap.
    const [isHovered, setHovered] = useState(false);

    const [animatedProps, setAnimatedProps] = useSpring(() => {
        return {
            // Array containing [rotateX, rotateY, and scale] values.
            // We store under a single key (xys) instead of separate keys ...
            // ... so that we can use animatedProps.xys.interpolate() to ...
            // ... easily generate the css transform value below.
            xys: [0, 0, 1],
            // Setup physics
            config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
        };
    });

    return (
        <animated.div
            ref={ref}
            className="card"
            onMouseEnter={() => setHovered(true)}
            onMouseMove={({ clientX, clientY }) => {
                // Get mouse x position within card
                const x =
                    clientX -
                    (ref.current.offsetLeft -
                        (window.scrollX || window.pageXOffset || document.body.scrollLeft));

                // Get mouse y position within card
                const y =
                    clientY -
                    (ref.current.offsetTop -
                        (window.scrollY || window.pageYOffset || document.body.scrollTop));

                // Set animated values based on mouse position and card dimensions
                const dampen = 65; // Lower the number the less rotation
                const xys = [
                    -(y - ref.current.clientHeight / 2) / dampen, // rotateX
                    (x - ref.current.clientWidth / 2) / dampen, // rotateY
                    1.07 // Scale
                ];

                // Update values to animate to
                setAnimatedProps({ xys: xys });
            }}
            onMouseLeave={() => {
                setHovered(false);
                // Set xys back to original
                setAnimatedProps({ xys: [0, 0, 1] });
            }}
            style={{
                // If hovered we want it to overlap other cards when it scales up
                zIndex: isHovered ? 2 : 1,
                // Interpolate function to handle css changes
                transform: animatedProps.xys.interpolate(
                    (x, y, s) =>
                        `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
                )
            }}
        >
            {children}
        </animated.div>
    );
}




export default Experience;
