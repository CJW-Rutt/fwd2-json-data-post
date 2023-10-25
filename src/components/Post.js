import React, { useState, useEffect } from "react";

const Post = ({ post }) => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      .then((response) => response.json())
      .then((data) => setAuthor(data));
  }, [post.userId]);

  return (
    <div>
      
      <h2>{post.title}</h2>
      {
        author && (
          <p>
            <strong>Author: {author.name}</strong>
          </p>
        )
      }
      <p>{post.body}</p>

    </div>
  );
};

export default Post;
