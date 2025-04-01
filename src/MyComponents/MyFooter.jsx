import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MyFooter() {
  return (
    <Navbar fixed="bottom" expand="lg" className="bg-body-tertiary">
      <Container className=" d-flex justify-content-center">
        <Navbar.Brand href="#home">EPICbook</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MyFooter;
