import Timestamp from "./Timestamp/Timestamp";
import Title from "./Title/Title";
import Link from "./Link/Link";

const FeedItem = () => {
  return (
    <div className="feed-item-container">
      <Timestamp />
      <Title />
      <Link />
    </div>
  );
};

export default FeedItem;
