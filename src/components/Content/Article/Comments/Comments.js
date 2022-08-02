import Counter from "./Counter/Counter";
import Input from "./Input/Input";
import CommentList from "./CommentList/CommentList";

const Comments = () => {
  return (
    <div className="article-comments-container">
      <Counter />
      <Input />
      <CommentList />
    </div>
  );
};

export default Comments;
