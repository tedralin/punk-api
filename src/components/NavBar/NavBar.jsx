import Filter from "../Filter/Filter";
import SearchBox from "../SearchBox/SearchBox"

import "./NavBar.scss";
const NavBar = (props) => {
  // const {searchTerm, handleInput, toggleABV, togglePH, toggleClassic} = props;
  const { searchTerm, handleInput, filterArr, toggleCheckedFilter } = props;

  const filterJSX = filterArr.map((filter) => {
    return (
      <div key={filter.id} className="filter">
        <Filter
          label={filter.text}
          value={filter.checked}
          onChange={toggleCheckedFilter}
          filterId={filter.id}
        />
      </div>
    );
  });

  return (
    <div className="Nav">
      <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
      {filterJSX}
    </div>
  );
};

export default NavBar;
