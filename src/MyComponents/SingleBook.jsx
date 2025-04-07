/*import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";

function SingleBook({ book }) {
  return (
    <Card key={book.asin}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>Category: {book.category}</Card.Text>
        <Card.Text>
          {" "}
          <b>Price:</b> {book.price}$
        </Card.Text>
        <Card.Text>
          <b>{book.asin}</b>
        </Card.Text>
        <CommentArea />
      </Card.Body>
    </Card>
  );
}

export default SingleBook;*/

import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Card
          className="my-3"
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{
            border: this.state.selected ? "3px solid red" : "1px solid grey",
          }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>
              {this.props.book.title}
            </Card.Title>
            <Card.Text>Category: {this.props.book.category}</Card.Text>
            <Card.Text>
              <b>Price:</b> {this.props.book.price}$
            </Card.Text>
            <Card.Text>
              <b>{this.props.book.asin}</b>
            </Card.Text>
            {this.state.selected && <CommentArea asin={this.props.book.asin} />}
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
