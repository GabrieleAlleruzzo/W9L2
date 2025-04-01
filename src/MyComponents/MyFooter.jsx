import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MyFooter() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className=" d-flex flex-column justify-content-center">
        <Navbar.Brand href="#home">EPICbook</Navbar.Brand>
        <p className="text-center"> Epicode - {new Date().getFullYear()} </p>
      </Container>
    </Navbar>
  );
}

export default MyFooter;
