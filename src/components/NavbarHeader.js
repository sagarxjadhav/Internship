import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom"

function NavbarHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body">
      <Container>
        <Navbar.Brand><Link to="/">𝕀𝕟𝕥𝕖𝕣𝕟𝕤𝕙𝕚𝕡</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link ><Link to="/">Home</Link></Nav.Link>

            <NavDropdown title="Spaces" id="collapsible-nav-dropdown">
              <NavDropdown.Item><Link to="/spaces">One</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/spaces">Two</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/spaces">Three</Link></NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Location" id="collapsible-nav-dropdown">
              <NavDropdown.Item ><Link to="/locations">Pune</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/locations">Latur</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/locations">Satara</Link></NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>

            <NavDropdown title="Services" id="collapsible-nav-dropdown">
              <NavDropdown.Item><Link to="/services">FrontEnd-Development</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/services">Figma Design</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/services">Backend Development</Link></NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link><Link to="/services">Add Services</Link></Nav.Link>
            <Nav.Link eventKey={2} ><Link to="/login">Login</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
