import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./PostList.css";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

  return (
    <div className="container">
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="post">
            <Post post={post} />
          </div>
        ))
      )}
    </div>
  );
}
