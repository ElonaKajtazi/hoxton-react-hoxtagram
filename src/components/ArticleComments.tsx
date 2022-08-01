import { CommentType } from "../App";

type Props = {
  comment: CommentType;
};
export function ArticleComments({ comment }: Props) {
  return (
    <ul className="comments">
      <li className="comment">{comment.content}</li>
    </ul>
  );
}
