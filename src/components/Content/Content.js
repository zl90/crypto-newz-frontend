import Feed from "./Feed/Feed";
import Article from "./Article/Article";
import TickerFeed from "./TickerFeed/TickerFeed";

const Content = () => {
  return (
    <div className="content-container">
      <Feed />
      <Article />
      <TickerFeed />
    </div>
  );
};

export default Content;
