const { useSelector } = require("react-redux");

const ListSelector = () => {
  const { list } = useSelector((state) => state.list);
  return {
    list
  }
};

export default ListSelector;