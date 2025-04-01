import { Container, Row, Card, Col, Button } from "react-bootstrap";
import scifi from "./Data/scifi.json";

const MyBooks = function () {
  return (
    <Container>
      <Row>
        {
          //adesso ci MAPPIAMO sto scifi con una funzione e paramentro
          scifi.map((scifibooks) => {
            // ogni funzione deve avere un RETURN
            return (
              //devi sempre dare una prop KEY al primo tag con riferimento a un paramentro univoco
              <Col xs={12} md={6} lg={4} key={scifibooks.asin} className="my-2">
                <Card className="d-flex flex-column">
                  <Card.Img variant="top" src={scifibooks.img} />
                  <Card.Body className="d-flex flex-column flex-grow-1">
                    <Card.Title>{scifibooks.title}</Card.Title>
                    <Card.Text className="text-uppercase fw-semibold">
                      {scifibooks.category}
                    </Card.Text>
                    <Card.Text>
                      {scifibooks.asin} -<b>{scifibooks.price}$</b>
                    </Card.Text>
                    <Button variant="danger">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        }
      </Row>
    </Container>
  );
};

export default MyBooks;
