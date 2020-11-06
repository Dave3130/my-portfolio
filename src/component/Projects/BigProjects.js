import React from "react";
import '../App/App.css';
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            padding: '0.8% 6%',
        },
        paper: {
            height: '300px',
            padding: theme.spacing(0),
            marginTop: "2rem",
            borderRadius: "35px",
            color: theme.palette.text.secondary,
            width: "95%",
            overflow: 'hidden',
            [theme.breakpoints.up('md')]: {
                width: "75%",
            },
        },
        closeButton: {
            textAlign: "right",
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
        chip: {
            backgroundColor: "#f50057",
            color: "#fff",
            padding: "0.82rem",
            marginTop: "-0.5rem",
            fontFamily: '"Baloo Tamma 2", "cursive"',
            fontWeight: "500",
            fontSize: "1.1rem",
            border: "1px solid #f50057",

        }
    }),
);

const DialogTitle = withStyles(useStyles)((props) => {
    const { children, classes, onClose, title, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Box display="flex">
                <Box flexGrow={1}>
                    <Typography component="p" style={{ paddingTop: "5px", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "1.7rem", lineHeight: "1.9rem", fontWeight: "600", color: "#f50057" }}>{title}</Typography>
                </Box>
                <Box>
                    {onClose ? (
                        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                            <i className="far fa-window-close"></i>
                        </IconButton>
                    ) : null}
                </Box>
            </Box>
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
}))(MuiDialogActions);

const THEME = createMuiTheme();

function BigProjects() {
    const classes = useStyles();
    const isSmall = useMediaQuery(THEME.breakpoints.down('md'));
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen1 = () => {
        setOpen1(true);
    };
    const handleClose1 = () => {
        setOpen1(false);
    };

    const handleClickOpen2 = () => {
        setOpen2(true);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };

    return (
        <ThemeProvider theme={THEME}>
            <div className={classes.root} >
                <Typography component="p" style={{ paddingTop: "30px", paddingBottom: "16px", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "3rem", fontWeight: "600", color: "#81049B" }}>Big Projects🔥</Typography>
                <Grid container spacing={isSmall ? 4 : 10} >


                    <Grid item xs={12} sm={6} md={6} align="center" >
                        <Paper className={classes.paper} elevation={3} onClick={handleClickOpen1}>
                            <img src={require('../assest/img/face-liveness.jpg')} style={{ width: "100%", height: "100%" }} />
                        </Paper>
                        <Typography component="p" style={{ paddingTop: "15px", paddingBottom: "15px", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "1.7rem", lineHeight: "1.9rem", fontWeight: "600", color: "#81049B" }}>Face Liveness Detection System</Typography>

                        <Dialog onClose={handleClose1} aria-labelledby="customized-dialog-title" open={open1}>
                            <Box display="flex" p={1.8}>
                                <Box flexGrow={1}>
                                    <Typography component="p" style={{ paddingTop: "5px", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "1.7rem", lineHeight: "1.9rem", fontWeight: "600", color: "#f50057" }}>Face Liveness Detection System</Typography>
                                </Box>
                                <Box>
                                    {open1 ? (
                                        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose1}>
                                            <i className="far fa-window-close"></i>
                                        </IconButton>
                                    ) : null}
                                </Box>
                            </Box>
                            <DialogContent dividers>
                                <Typography gutterBottom style={{ fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "1.2rem", lineHeight: "1.5rem", fontWeight: "600" }}>
                                    A system for detecting fake faces 🔍 and performing anti-facial spoofing 🤖 in facial recognition systems. Development is underway with a  3 members team.
                                    </Typography>

                                <Typography style={{ paddingTop: "11px", paddingBottom: "8px", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "1.35rem", lineHeight: "1.5rem", fontWeight: "600", color: "#f50057" }}>
                                    Technologies Used:
                                </Typography>
                                <Box display="flex" flexWrap="wrap" py={0.3} px={1}>

                                    <Box display="flex" py={1} pr={1}>
                                        <Chip className={classes.chip} size="small" label="HTML" m={1} />
                                    </Box>
                                    <Box display="flex" py={1} pr={1}>
                                        <Chip className={classes.chip} size="small" label="openCV" m={1} />
                                    </Box>
                                    <Box display="flex" py={1} pr={1}>
                                        <Chip className={classes.chip} size="small" label="machine-learning" m={1} />
                                    </Box>
                                    <Box display="flex" py={1} pr={1}>
                                        <Chip className={classes.chip} size="small" label="cnn-keras" m={1} />
                                    </Box>

                                </Box>

                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose1} style={{ backgroundColor: "#f50057", color: "#fff", fontWeight: "500" }}>
                                    <i className="far fa-window-close"></i>&nbsp;Close
                                </Button>
                            </DialogActions>
                        </Dialog>

                    </Grid>

                    <Grid item xs={12} sm={6} md={6} align="center" >
                        <Paper className={classes.paper} elevation={3} onClick={handleClickOpen2}>
                            <img src={require('../assest/img/codeyantra-website.png')} style={{ width: "100%", height: "100%" }} />
                        </Paper>
                        <Typography component="p" style={{ paddingTop: "15px", paddingBottom: "15px", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "1.7rem", lineHeight: "1.9rem", fontWeight: "600", color: "#81049B" }}>Codeyantra Website</Typography>

                        <Dialog onClose={handleClose2} aria-labelledby="customized-dialog-title" open={open2}>
                            <Box display="flex" p={1.8}>
                                <Box flexGrow={1}>
                                    <Typography component="p" style={{ paddingTop: "5px", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "1.7rem", lineHeight: "1.9rem", fontWeight: "600", color: "#f50057" }}>Codeyantra Website</Typography>
                                </Box>
                                <Box>
                                    {open2 ? (
                                        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose2}>
                                            <i className="far fa-window-close"></i>
                                        </IconButton>
                                    ) : null}
                                </Box>
                            </Box>
                            <DialogContent dividers>
                                <Typography gutterBottom style={{ fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "1.2rem", lineHeight: "1.5rem", fontWeight: "600" }}>
                                    This is my first professional website project, designed for the coding committee of my college. It has a responsive front-end with back-end connectivity to update content and a streamlined member selection process. Some of the features includes info of the coding team members, upcoming contests/events, summary of past activities, ranklist & registration form. Developed by a five-member team.
                                    </Typography>

                                <Typography style={{ paddingTop: "11px", paddingBottom: "8px", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "1.35rem", lineHeight: "1.5rem", fontWeight: "600", color: "#f50057" }}>
                                    Technologies Used:
                                </Typography>
                                <Box display="flex" flexWrap="wrap" py={0.3} px={1}>

                                    <Box display="flex" py={1} pr={1}>
                                        <Chip className={classes.chip} size="small" label="HTML" m={1} />
                                    </Box>
                                    <Box display="flex" py={1} pr={1}>
                                        <Chip className={classes.chip} size="small" label="CSS" m={1} />
                                    </Box>
                                    <Box display="flex" py={1} pr={1}>
                                        <Chip className={classes.chip} size="small" label="Javascript" m={1} />
                                    </Box>
                                    <Box display="flex" py={1} pr={1}>
                                        <Chip className={classes.chip} size="small" label="Jquery" m={1} />
                                    </Box>
                                    <Box display="flex" py={1} pr={1}>
                                        <Chip className={classes.chip} size="small" label="Php" m={1} />
                                    </Box>
                                    <Box display="flex" py={1} pr={1}>
                                        <Chip className={classes.chip} size="small" label="MySQL" m={1} />
                                    </Box>

                                </Box>

                                <Typography style={{ paddingTop: "11px", paddingBottom: "0px", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "1.35rem", lineHeight: "1.5rem", fontWeight: "600", color: "#f50057" }}>
                                    Links:
                                        </Typography>

                                <Link component='a' underline='hover' variant='inherit' href="#www.codeyantra.in/" target="_blank" rel="noreferrer" style={{ textDecoraton: "none", fontWeight: "600", color: "#000" }}>www.codeyantra.in/</Link>


                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose2} style={{ backgroundColor: "#f50057", color: "#fff", fontWeight: "500" }}>
                                    <i className="far fa-window-close"></i>&nbsp;Close
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Grid>



                </Grid>



            </div>
        </ThemeProvider >
    );
}

export default BigProjects;
