import Comments from "./Comments/Comments";
import Details from "./Details/Details";
// don't forget to include a back button here at some point

const Article = () => {
  return (
    <div className="article-container">
      <Details />
      <Comments />
    </div>
  );
};

export default Article;
