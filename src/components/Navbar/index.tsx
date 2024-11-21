import { useState } from "react";
import { Link } from 'react-router-dom'
import { Image,
  AspectRatio } from "@mantine/core"
import "./style.css"
// import bears_cartoon from "../../media/bc_bears_cartoon.png";
import logo from "../../media/basketschool_sirnach_logo_white.png";

const Navbar = () => {

	const [isNavExpanded, setIsNavExpanded] = useState(false);

	function toggleNav() {
		setIsNavExpanded(!isNavExpanded);
	}

	return (

		<nav className="navigation">
			<a href="/" className="brand-name">
        <AspectRatio ratio = {50 / 1} />
          <Image
            src = {logo}
            height = {'5vh'}
            fit = {'fill'}
            ml = {'xl'}
          />
			</a>
			{/*<img id="bears-logo" src={bears_cartoon} alt="bc-bears-logo"></img>*/}

			{/*<button*/}
			{/*	className="hamburger"*/}
			{/*	onClick={toggleNav}>*/}
			{/*	{isNavExpanded ? <GrClose size="25px" /> : <GiHamburgerMenu size="25px" />}*/}
			{/*</button>*/}
			<div
				className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
				<ul >
					<li><Link to="/" onClick={toggleNav}>Home</Link></li>
					<li><Link to="/infos" onClick={toggleNav}>Infos</Link></li>
					<li><Link to="/partners" onClick={toggleNav}>Sponsoren</Link></li>
					<li><Link to="kontakt" onClick={toggleNav}>Kontakt</Link></li>
				</ul>
			</div>
		</nav>
	);
}



export default Navbar;
