import { useEffect, useState } from "react";
import { AddArticleForm } from "./AddArticleForm";
// Instructions
// - Start a new React project ✅
// - Copy the assets and the DB folder into your new project ✅
// - Use the HTML inside index.html as a reference to build your React App and components. ✅
// - Separate the CSS into smaller files
// - Just like before in the original, start your database server with npx json-server --watch db/db.json --routes db/routes.json ✅
// - Use fetch along with what we learned about useEffect to get the data from your API ✅
// - Use the data to render your components on the page ✅
import "./App.css";
import { Article } from "./components/Article";
export type ImageType = {
  id: number;
  title: string;
  image: string;
  likes: number;
  comments: Comment[];
};
export type CommentType = {
  id: number;
  content: string;
  imageId: number;
};

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

  function deleteComment(id: number) {
    const commentsCopy = comments.filter((comment) => comment.id !== id);
    fetch(`http://localhost:3000/comments/${id}`, {
      method: "DELETE",
    });
    setComments(commentsCopy);
    // const todosCopy = todos.filter(todo => todo.id !== id)

    // fetch(`http://localhost:3000/todos/${id}`, {
    //   method: 'DELETE'
  }
  return (
    <div className="App">
 
      <img className="logo" src="assets/hoxtagram-logo.png" />
      <AddArticleForm />


      <section className="image-container">
        {images.map((image) => (
          <Article
            image={image}
            comments={comments}
            deleteComment={deleteComment}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
