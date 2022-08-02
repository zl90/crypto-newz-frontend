import Title from "./Title/Title";
import Timestamp from "./Timestamp/Timestamp";
import Source from "./Source/Source";

const Details = () => {
  return (
    <div className="article-details-container">
      <Title />
      <Timestamp />
      <Source />
    </div>
  );
};

export default Details;
