import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import "./style.css"
// import bears_cartoon from "../../media/bc_bears_cartoon.png";

const Navbar = () => {

	const [isNavExpanded, setIsNavExpanded] = useState(false);

	function toggleNav() {
		setIsNavExpanded(!isNavExpanded);
	}

	return (

		<nav className="navigation">
			<a href="/" className="brand-name">
				BC Bears
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
					<li><a href="/verein" onClick={toggleNav}>Verein</a>
						<ul>
							<li><a href="/verein/geschichte" onClick={toggleNav}>Geschichte</a></li>
							<li><a href="/verein/vorstand" onClick={toggleNav}>Vorstand</a></li>
							<li><a href="/verein/trainer" onClick={toggleNav}>Trainer/innen</a></li>
							<li><a href="/verein/hallen" onClick={toggleNav}>Hallen</a></li>
							<li><a href="/verein/neumitglied" onClick={toggleNav}>Mitglied werden</a></li>
						</ul>
					</li>
					<li><a href="/teams" onClick={toggleNav}>Teams</a>
						<ul>
							<li><a href="/teams/mixu10" onClick={toggleNav}>Mix U10</a></li>
							<li><a href="/teams/mixu12" onClick={toggleNav}>Mix U12</a></li>
							<li><a href="/teams/damenu14" onClick={toggleNav}>Damen U14</a></li>
							<li><a href="/teams/herrenu14" onClick={toggleNav}>Herren U14</a></li>
							<li><a href="/teams/herrenu16" onClick={toggleNav}>Herren U16</a></li>
							<li><a href="/teams/herrenu18" onClick={toggleNav}>Herren U18</a></li>
							<li><a href="/teams/herren3" onClick={toggleNav}>Herren 3. Liga</a></li>
							<li><a href="/teams/herren4" onClick={toggleNav}>Herren 4. Liga</a></li>
						</ul>
					</li>
					<li><a href="/partners" onClick={toggleNav}>Partner & Gönner</a></li>
					<li><a href="/shop" onClick={toggleNav}>Shop</a></li>
					{/*<li><a href="/info" onClick={toggleNav}>Info</a></li>*/}
					{/*<li><a href="/news" onClick={toggleNav}>News</a></li>*/}
					{/*<li><a href="/about" onClick={toggleNav}>About</a></li>*/}
					{/*<li><a href="/contact" onClick={toggleNav}> Contact</a></li>*/}
					{/*<li><a href="/teams" onClick={toggleNav}>Teams</a></li>*/}
				</ul>
			</div>
		</nav>
	);
}



export default Navbar;