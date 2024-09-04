import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
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
					<li><a href="/" onClick={toggleNav}>Home</a></li>
					<li><a href="/infos" onClick={toggleNav}>Infos</a></li>
					<li><a href="/partners" onClick={toggleNav}>Partner & Gönner</a></li>
					<li><a href="/kontakt" onClick={toggleNav}>Kontakt</a></li>
				</ul>
			</div>
		</nav>
	);
}



export default Navbar;
