import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img className="logo" src="assets/hoxtagram-logo.png" />

      <section className="image-container">
        <article className="image-card">
          <h2 className="title">Title of image goes here</h2>
          <img src="./assets/image-placeholder.jpg" className="image" />
          <div className="likes-section">
            <span className="likes">0 likes</span>
            <button className="like-button">♥</button>
          </div>
          <ul className="comments">
            <li>Get rid of these comments</li>
            <li>And replace them with the real ones</li>
            <li>From the server</li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default App;
