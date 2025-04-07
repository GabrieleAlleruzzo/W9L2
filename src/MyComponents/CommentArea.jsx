import { Component } from "react";
import CommentsList from "./CommentList";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentArea extends Component {
  state = {
    reviews: [],
  };

  getReviews = () => {
    fetch(URL + this.props.book.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2YzZDc2YzVjZmRmODAwMTUwY2U1NDQiLCJpYXQiOjE3NDQwMzM2NDQsImV4cCI6MTc0NTI0MzI0NH0.apx2a4nXro93oCKaqLTDTmbhfzxW4ApJEBB53lg9ljY",
      },
    })
      .the((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new error("recensioni non recuperate");
        }
      })
      .then((data) => {
        console.log("data", data);
        this.setState({ reviews: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    this.getReviews;
  };

  render() {
    return (
      <>
        <h1> Commentami</h1>;
        <CommentsList reviews={this.state.reviews} />
      </>
    );
  }
}

export default CommentArea;
