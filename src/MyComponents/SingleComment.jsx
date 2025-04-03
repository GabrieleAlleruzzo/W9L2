import React from "react";

function SingleComment({ comment }) {
  return (
    <div>
      <p>{comment.comment}</p>
      <p>Rate: {comment.rate}</p>
      <button onClick={() => handleDelete(comment._id)}>Delete</button>
    </div>
  );
}

export default SingleComment;
