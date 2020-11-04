import React from 'react';
import './App.css';
import Navbar from './Navbar';
import SideBar from './SideBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import Fab from "@material-ui/core/Fab";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Hero from '../Hero/';
import Education from '../Education/';
import Experience from '../Experiences/';
import Skills from '../Skills/';
import Projects from '../Projects/';
import BigProjects from '../Projects/BigProjects.js';
import Certificates from '../Certificates/';
import Blogs from '../Blogs/';
import Interests from '../Interests/';
import Footer from '../Footer/';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'fixed',
            bottom: theme.spacing(10),
            right: theme.spacing(3),
        },
    }),
);


function ScrollTop(props) {
    const { children } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 120
    });

    const handleClick = event => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            ".back-to-top-anchor"
        );

        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <SideBar />
                <Navbar />
                <div id="about" className="back-to-top-anchor">
                    <Hero />
                </div>
                <div id="education">
                    <Education />
                </div>
                <div id="experiences">
                    <Experience />
                </div>
                <div id="projects">
                    <Projects />
                    <BigProjects />
                </div>
                <div id="skills">
                    <Skills />
                    <Interests />
                </div>
                <div id="certificates">
                    <Certificates />
                </div>
                <div id="blogs">
                    <Blogs />
                </div>
                <div id="contact">
                    <Footer />
                </div>
                <ScrollTop>
                    <Fab color="secondary" size="medium" aria-label="scroll back to top">
                        <i className="fas fa-chevron-up fa-2x"></i>
                    </Fab>
                </ScrollTop>
            </div>


        );
    }
}

export default App;
