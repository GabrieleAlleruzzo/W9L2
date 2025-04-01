import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import MyAlert from "./MyAlert";

function MyWelcome() {
  return (
    <>
      <h2>Welcome</h2>
      <Button variant="danger">Clock to show Alert</Button>
      <MyAlert />
    </>
  );
}

export default MyWelcome;
