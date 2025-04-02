import Card from "react-bootstrap/Card";

function SingleBook({ book }) {
  return (
    <Card key={book.asin}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>Category: {book.category}</Card.Text>
        <Card.Text>Price: {book.price}$</Card.Text>
        <Card.Text>
          <b>{book.asin}</b>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
