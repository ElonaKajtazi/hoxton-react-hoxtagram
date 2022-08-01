import { CommentType } from "../App";

type Props = {
  comment: CommentType;
    deleteComment: (commentId: number) => void;
};
export function ArticleComments({ comment, deleteComment }: Props) {
  return (
    <ul className="comments">
      <li className="comment">
        {comment.content}
        <button
          onClick={() => {
            deleteComment(comment.imageId);
          }}
        >
          🗑️
        </button>
      </li>
    </ul>
  );
}
