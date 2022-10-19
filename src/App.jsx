import './App.scss';
import { useState } from "react";
import Main from './containers/Main/Main';
import NavBar from './containers/NavBar/NavBar';
import beers from './data/beers';

const App = ()  => {
  const [searchTerm, setSearchTerm] = useState("");
  const initFilterArr = [
    {id: 1, text: "High ABV (>6/0%)", checked: false, field: "abv", operator: ">", value: 6 },
    {id: 2, text: "Classic Range", checked: false, field: "first_brewed", operator: "<", value: 2010 },
    {id: 3, text: "Acidic (ph < 4)", checked: false, field: "ph", operator: "<", value: 4 },
  ];

  const [filterArr, updateFilterArr] = useState(initFilterArr);

  const toggleCheckedFilter = (filterId) => {
    const updatedFilterArr = filterArr.map(filter => 
       filter.id === filterId ? {...filter, checked: !filter.checked} : {...filter}
      )
    updateFilterArr (updatedFilterArr)
  }

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredBeersArr = beers
      .filter((beer) => {
      const beerNameLower = beer.name.toLowerCase();
      // let filterStr = `${beerNameLower}.includes(${searchTerm})`
      // filterArr.forEach(filterCond => {
      //   console.log()
      //   if (filterCond.checked) {
      //     filterStr += ` && beer.${filterCond.field} ${filterCond.operator} ${filterCond.value}`
      //   }
      // })
      // console.log(filterStr)
      // return {filterStr};
      return beerNameLower.includes(searchTerm)
         && (filterArr[0].checked ? beer.abv > 6: true )
         && (filterArr[1].checked ? beer.first_brewed.substr(3,6) < 2010: true )
         && (filterArr[2].checked ? beer.ph < 4: true )
})
    
 
  return (
    <div className="App">
        <NavBar searchTerm={searchTerm} handleInput={handleInput} filterArr={filterArr} toggleCheckedFilter={toggleCheckedFilter}/>
        <Main beersArr={filteredBeersArr} />
    </div>
  );
}

export default App;
