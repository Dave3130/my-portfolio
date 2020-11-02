import React from 'react';
import Scrollspy from 'react-scrollspy'
import { ReactComponent as Jd } from './JD.svg';


export default function SideBar() {

	return (
		<Scrollspy items={['about', 'education', 'experiences', 'projects', 'skills', 'certificates', 'blogs', 'contact']} currentClassName="about">
			<nav role="navigation" className="mobile-nav" id="back-to-top-anchor">
				<div id="menuToggle">

					<input type="checkbox" />

					<span></span>
					<span></span>
					<span></span>

					<ul id="menu">
						<li><a href="#about">About</a></li>
						<li><a href="#education">Education</a></li>
						<li><a href="#experiences">Experience</a></li>
						<li><a href="#projects">Projects</a></li>
						<li><a href="#skills">Skills</a></li>
						<li><a href="#certificates">Certificates</a></li>
						<li><a href="#blogs">Blogs</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>

				</div>
			</nav>
		</Scrollspy>
	);
}