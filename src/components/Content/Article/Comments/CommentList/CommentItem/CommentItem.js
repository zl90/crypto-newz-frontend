import Name from "./Name/Name";
import Content from "./Content/Content";
import Timestamp from "./Timestamp/Timestamp";

const CommentItem = () => {
  return (
    <div className="article-comment-item-container">
      <Name />
      <Content />
      <Timestamp />
    </div>
  );
};

export default CommentItem;
