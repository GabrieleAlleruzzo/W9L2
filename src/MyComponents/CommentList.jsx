import React from "react";
import SingleComment from "./SingleComment";

function CommentsList({ comments }) {
  return (
    <div>
      <ListGroup>
        {comments.reviews.map((recensione) => {
          return (
            <ListGroup key={recensione._id}>
              {recensione.comment} | {recensione.rate}/5
            </ListGroup>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default CommentsList;
