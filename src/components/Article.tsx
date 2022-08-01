import { ImageType } from "../App";
import { CommentType } from "../App";
import { ArticleComments } from "./ArticleComments";

type Props = {
  image: ImageType;
  comments: CommentType[];
};
export function Article({ image, comments }: Props) {
  return (
    <article className="image-card">
      <h2 className="title">{image.title}</h2>
      <img src={image.image} className="image" />
      <div className="likes-section">
        <span className="likes">{image.likes}</span>
        <button className="like-button">♥</button>
      </div>

      {comments.map((comment) =>
        image.id === comment.imageId ? (
       <ArticleComments comment={comment}/>
        ) : null
      )}
    </article>
  );
}
