import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
       <Navbar expand="lg" className="bg-body-black">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Posts"><Link to="/Posts">Posts</Link></Nav.Link>
            <Nav.Link href="#Comments"><Link to="/Comments">Comments</Link></Nav.Link>
            <Nav.Link href="#Albums"><Link to="/Albums">Albums</Link></Nav.Link>           
            <Nav.Link href="#Photos"><Link to="/Photos">Photos</Link></Nav.Link>           
            <Nav.Link href="#Todos"><Link to="/Todos">Todos</Link></Nav.Link> 
            <Nav.Link href="#Users"><Link to="/Users">Users</Link></Nav.Link>           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </>
  );
}

export default Header;