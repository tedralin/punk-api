import "./SearchBox.scss";

const SearchBox = (props) => {
  const { searchTerm, handleInput } = props;

  return (
    <form className="search-box">
      <input
        type="text"
        value={searchTerm}
        onInput={handleInput}
        className="search-box__input"
        placeholder="search here ..."
      />
    </form>
  );
};

export default SearchBox;
