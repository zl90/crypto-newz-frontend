import ShareIcon from "@mui/icons-material/Share";

const Counter = () => {
  return (
    <div className="article-comments-counter-container">
      <div className="article-comments-counter">6 comments</div>
      <button>
        <ShareIcon />
        Share
      </button>
    </div>
  );
};

export default Counter;
