const ShoeCard = ({ imgURL }) => {
  return (
    <div className="border-2 rounded-xl ">
      <img src={imgURL} alt="" />
    </div>
  );
};

export default ShoeCard;
