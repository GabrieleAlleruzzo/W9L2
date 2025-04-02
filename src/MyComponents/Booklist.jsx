import SingleBook from "./SingleBook";
import { Row, Col } from "react-bootstrap";
// import BookList from "./BookList";
import scifi from "./Data/fantasy.json"; // Importa il file JSON

function BookList({ books }) {
  return (
    <Row>
      {scifi.map((book) => (
        <Col key={book.asin} xs={12} md={6} lg={4}>
          <SingleBook book={book} />
        </Col>
      ))}
    </Row>
  );
}

export default BookList;
