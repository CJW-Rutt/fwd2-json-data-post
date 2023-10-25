import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostList from "./components/PostList";

export default function App() {
  return (
    <div className="App" style={{ margin: 0, padding: 0 }}>
      <Header />
      <div className="container">
        <h1>Posts for User 1</h1>
        <PostList />
      </div>
      <Footer />
    </div>
  );
}
