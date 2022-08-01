import { AddCommentForm } from "../AddCommentForm";
import { ImageType } from "../App";
import { CommentType } from "../App";

import { ArticleComments } from "./ArticleComments";

type Props = {
  image: ImageType;
  comments: CommentType[];
  deleteComment: (commentId: number) => void;
  deleteArticle: (imageId: number) => void;
};
export function Article({
  image,
  comments,
  deleteComment,
  deleteArticle,
}: Props) {
  return (
    <article className="image-card">
      <div className="image__top-section">
        <h2 className="title">{image.title}</h2>
        <button
          className="image__delete-button"
          onClick={() => {
            deleteArticle(image.id);
          }}
        >
          ❌
        </button>
      </div>
      <img src={image.image} className="image" />
      <div className="likes-section">
        <span className="likes">{image.likes}</span>
        <button className="like-button">♥</button>
      </div>

      {comments.map((comment) =>
        image.id === comment.imageId ? (
          <ArticleComments comment={comment} deleteComment={deleteComment} />
        ) : null
      )}
      <AddCommentForm />
    </article>
  );
}
