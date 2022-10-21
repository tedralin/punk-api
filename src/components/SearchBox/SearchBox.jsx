import "./SearchBox.scss";

const SearchBox = ({ searchTerm, handleInput }) => {
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
