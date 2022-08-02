import Name from "./Name/Name";
import Price from "./Price/Price";
import Change from "./Change/Change";

const TickerItem = () => {
  return (
    <div className="ticker-item-container">
      <Name />
      <Price />
      <Change />
    </div>
  );
};

export default TickerItem;
