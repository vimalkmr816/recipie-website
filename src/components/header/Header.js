import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function Header() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand>
					<Link to="/">React-Bootstrap</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto ">
						<Nav.Link>
							<Link to="/login-form" className="text-dark text-decoration-none">
								Login
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link
								to="/recipe-page"
								className="text-dark text-decoration-none">
								Pages
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link
								to="/contact-form"
								className="text-dark text-decoration-none">
								Contact
							</Link>
						</Nav.Link>
						<NavDropdown title="Browse Recipies" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
