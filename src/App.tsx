import { useEffect, useState } from "react";
// Instructions
// - Start a new React project ✅
// - Copy the assets and the DB folder into your new project ✅
// - Use the HTML inside index.html as a reference to build your React App and components. ✅
// - Separate the CSS into smaller files
// - Just like before in the original, start your database server with npx json-server --watch db/db.json --routes db/routes.json ✅
// - Use fetch along with what we learned about useEffect to get the data from your API
// - Use the data to render your components on the page
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/images")
      .then((resp) => resp.json())
      .then((imagesFromServer) => setImages(imagesFromServer));
    fetch("http://localhost:3000/comments")
      .then((resp) => resp.json())
      .then((commentsFromServer) => setComments(commentsFromServer));
  }, []);
  return (
    <div className="App">
      <img className="logo" src="assets/hoxtagram-logo.png" />

      <section className="image-container">
        {images.map((image) => (
          <article className="image-card">
            <h2 className="title">{image.title}</h2>
            <img src={image.image} className="image" />
            <div className="likes-section">
              <span className="likes">{image.likes}</span>
              <button className="like-button">♥</button>
            </div>

            {comments.map((comment) =>
              image.id === comment.imageId ? (
                <ul className="comments">
                  <li className="comment">
                    {comment.content}
                  </li>
                
                </ul>
              ) : null
              
            )}
          </article>
        ))}
      </section>
    </div>
  );
}

export default App;
{}