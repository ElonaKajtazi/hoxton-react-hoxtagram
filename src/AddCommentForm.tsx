export function AddCommentForm() {
  return (
    <form className="comment-form">
      <input
        className="comment-input"
        type="text"
        name="comment"
        placeholder="Add a comment..."
      />
      <button className="comment-button" type="submit">
        Post
      </button>
    </form>
  );
}
