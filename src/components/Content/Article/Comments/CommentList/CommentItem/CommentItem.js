import Name from "./Name/Name";
import Content from "./Content/Content";

const CommentItem = () => {
  return (
    <div className="article-comment-item-container">
      <Name />
      <Content />
    </div>
  );
};

export default CommentItem;
