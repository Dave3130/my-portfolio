import React from 'react';
import Scrollspy from 'react-scrollspy'

export default function Navbar() {

	return (
		<Scrollspy items={['about', 'education', 'experiences', 'projects', 'skills', 'certificates', 'blogs', 'contact']} currentClassName="about">
			<nav className="navbar" id="back-to-top-anchor">
				<li><a href="#about">About</a></li>
				<li><a href="#education">Education</a></li>
				<li><a href="#experiences">Experience</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#skills">Skills</a></li>
				<li><a href="#certificates">Certificates</a></li>
				<li><a href="#blogs">Blogs</a></li>
				<li><a href="#contact">Contact</a></li>
			</nav>
		</Scrollspy>
	);
}