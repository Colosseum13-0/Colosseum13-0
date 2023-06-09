import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { NavLink, Link } from 'react-router-dom'
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		const navbar = navRef.current;
		const navbarBtn = navbar.querySelector(".nav-btn");
		const closeBtn = navbar.querySelector(".nav-close-btn");

		navbar.classList.toggle("responsive_nav");

		if (navbar.classList.contains("responsive_nav")) {
			// Lock the scroll when the navbar is open
			document.body.style.overflow = "hidden";

			// Hide the hamburger icon when the navbar is open
			navbarBtn.style.display = "none";

			// Show the close icon when the navbar is open
			closeBtn.style.display = "block";
		} else {
			// Unlock the scroll when the navbar is closed
			document.body.style.overflow = "";

			// Show the hamburger icon when the navbar is closed
			navbarBtn.style.display = "block";

			// Hide the close icon when the navbar is closed
			closeBtn.style.display = "none";
		}

		// Close the navbar when a link is clicked
		const links = navbar.querySelectorAll(".Links");
		links.forEach(link => {
			link.addEventListener("click", () => {
				navbar.classList.remove("responsive_nav");
				document.body.style.overflow = "";
				navbarBtn.style.display = "block";
				closeBtn.style.display = "none";
			});
		});
	}



	return (
		<header className="navbar">
			<Link className="Links" to="/">  <img className="image links" src='https://i.ibb.co/mH4Nqg6/stc-official-logo-1.png' alt="stc-official-logo" /></Link>
			<nav ref={navRef}>
				<NavLink className="Links" activeClassName="active" to="/">Home</NavLink>
				<NavLink className="Links" activeClassName="active" to="/events">Adventures</NavLink>
				<NavLink className="Links" activeClassName="active" to="/about">About</NavLink>
				<NavLink className="Links" activeClassName="active" to="/gallery">Gallery</NavLink>
				{/* <NavLink className="Links" activeClassName="active" to="/our-team">Our Team</NavLink> */}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;