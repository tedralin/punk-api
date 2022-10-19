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

  // const [filterABV, setFilterABV] = useState(false);
  // const [filterPH, setFilterPH] = useState(false);
  // const [filterClassic, setFilterClassic] = useState(false);

  // const toggleFilterABV = () => setFilterABV(!filterABV);
  // const toggleFilterPH = () => setFilterPH(!filterPH);
  // const toggleFilterClassic = () => setFilterClassic(!filterClassic);


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
})
    
    
  // .map(beer => 
  //   {beer.id, beer.name, beer.tagline, beer.description, beer.abv, beer.first_brewed, beer.ph})

  return (
    <div className="App">
        {/* <NavBar searchTerm={searchTerm} handleInput={handleInput} 
                toggleABV={toggleFilterABV} togglePH={toggleFilterPH} toggleClassic={toggleFilterClassic}/> */}
        <NavBar searchTerm={searchTerm} handleInput={handleInput} filterArr={filterArr} toggleCheckedFilter={toggleCheckedFilter}/>
        <Main beersArr={filteredBeersArr} />
    </div>
  );
}

export default App;
