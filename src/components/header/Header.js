import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import BottomHeader from "./BottomHeader";
function Header() {
	return (
		<div>
		    <Navbar bg="light" expand="lg" className="navbar">
    			<ul className="nav-list list-unstyled d-flex gap-5 mx-auto align-item-center">
    				<li className="list-items">
                        <Link to='/' className="text-decoration-none text-dark">Home</Link>
                    </li>
    				<li className="list-items">Submit Recipes</li>
    				<li className="list-items">Pages</li>
    				<li className="list-items">News</li>
    				<li className="list-items"><Link to='/login-form'className="text-decoration-none text-dark">Login</Link></li>
    				<li className="list-items"><Link to='/contact-form' className="text-decoration-none text-dark">Contact</Link></li>
    			</ul>
    		</Navbar>
            <BottomHeader></BottomHeader>
		</div>
	);
}

export default Header;
