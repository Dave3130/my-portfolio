import React from "react";
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';


const ProjectButton = withStyles((theme) => ({
    root: {
        color: "#FFFFFF",
        fontSize: "1.1rem",
        borderRadius: "15px",
        backgroundColor: "#81049B",
        '&:hover': {
            color: "#81049B",
            backgroundColor: "#FFFFFF",
            border: "1.8px solid #81049B"
        },
    },
}))(Button);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            padding: '0.8% 6%'
        },
        paper: {
            minHeight: '150px',
            padding: theme.spacing(2.1),
            color: theme.palette.text.secondary,
            overflow: 'hidden',
            borderRadius: '10px',
            filter: 'drop-shadow(6px -6px 5px #E0E0E0)',
            '&:hover': {
                filter: 'drop-shadow(-8px 8px 9px #E0E0E0)'
            }

        },
        title: {
            fontFamily: '"Baloo Tamma 2", "cursive"',
            fontSize: "1.6rem",
            color: '#81049B',
            fontWeight: "600",
            lineHeight: "2rem",
            textDecoraton: "none"
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
        chip: {
            color: "#81049B",
            fontWeight: "500",
            border: "1.5px solid #81049B",

        }
    }),
);

const THEME = createMuiTheme();

function BigProjects(props) {
    const classes = useStyles();
    return (
        <ThemeProvider theme={THEME}>

            <div className={classes.root} >
                <Typography component="p" style={{ paddingTop: "30px", paddingBottom: "15px", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "3rem", fontWeight: "600", color: "#81049B" }}>Big Projects<span role="img" aria-label="rocket">🚀</span></Typography>
                <Grid container spacing={5}>
                    {props.user.pinnedItems.edges.map(({ node }) => (

                        <Grid item xs={12} sm={12} md={6} key={node.id} >
                            <Paper className={classes.paper} elevation={3}>
                                <Box
                                    display="flex"
                                    flexWrap="nowrap"
                                    bgcolor="background.paper"
                                >
                                    <Box px={1} pt={1} pb={0.3}>
                                        <img className={classes.iconStyle} src={require('../assest/icons/projIcon.png')} alt="icon" />
                                    </Box>
                                    <Box px={1} pt={1} pb={0.3} flexWrap="wrap">
                                        <Link component='a' underline='hover' variant='inherit' href={node.url} target="_blank" rel="noreferrer" className={classes.title}>{node.name}</Link>
                                    </Box>
                                </Box>
                                <Box display="flex" flexWrap="nowrap" px={1}>
                                    <Typography className={classes.description} component="p">{node.description}</Typography>
                                </Box>
                                <Box display="flex" flexWrap="wrap" py={0.3} px={1}>
                                    {node.repositoryTopics.nodes.map(({ topic }, index) => (
                                        <Box display="flex" py={1} pr={1}>
                                            <Chip variant="outlined" className={classes.chip} size="small" label={topic.name} key={index} m={1} />
                                        </Box>
                                    ))}
                                </Box>

                                <Box px={1} display="flex" flexWrap="nowrap">
                                    <Box pr={2}>
                                        <Typography component="p"><i className="fas fa-code-branch"></i>&nbsp;{node.forkCount}</Typography>
                                    </Box>
                                    <Box pr={2}>
                                        <Typography component="p"><i className="fas fa-star"></i>&nbsp;{node.stargazers.totalCount}</Typography>
                                    </Box>
                                    <Box flexGrow={1}>
                                        <Typography component="p"><i className="fas fa-eye"></i>&nbsp;{node.watchers.totalCount}</Typography>
                                    </Box>
                                    <Box >
                                        <div>
                                            <Typography component="p">{node.diskUsage}&nbsp;KB</Typography>
                                        </div>
                                    </Box>
                                </Box>
                                {node.homepageUrl != null &&
                                    <Box display="flex" justifyContent="flex-end" px={1} pt={1}>
                                        <Link component='a' underline='hover' variant='inherit' href={node.homepageUrl} target="_blank" rel="noreferrer" style={{ textDecoraton: "none", fontWeight: "600", color: "#81049B" }}><i className="fas fa-angle-double-right"></i>&nbsp;Preview</Link>
                                    </Box>
                                }
                            </Paper>
                        </Grid>

                    ))}

                </Grid>
                <Box align="center" pt={4} m={1}>
                    <ProjectButton variant="contained" href={props.user.url} target="_blank" rel="noreferrer">More Projects</ProjectButton>
                </Box>
            </div>
        </ThemeProvider>
    );
}

export default BigProjects;