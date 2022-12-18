const CategoryButton = ({ category, className, onChangeCatgory }) => {
  return (
    <button className={className} onClick={onChangeCatgory}>
      {category}
    </button>
  );
};

export default CategoryButton;
