const Input = () => {
  return (
    <div className="article-comments-input-container">
      <textarea
        name="content"
        id="content"
        className="comment-content-input"
        placeholder="What are your thoughts?"
      ></textarea>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        id="name"
        className="comment-name-input"
        defaultValue="Anonymous"
      />
      <button type="submit" className="comment-submit-button">
        Comment
      </button>
    </div>
  );
};

export default Input;
