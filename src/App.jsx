import './App.scss';
import { useEffect, useState } from "react";
import Main from './containers/Main/Main';
import NavBar from './containers/NavBar/NavBar';
// import beers from './data/beers';

const App = ()  => {
  const [beersArr, setBeersArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const initFilterArr = [
    {id: 1, text: "High ABV (>6/0%)", checked: false, param: "abv_gt", value: 6 },
    {id: 2, text: "Classic Range", checked: false, param: "brewed_before", value: "01-2010" },
    {id: 3, text: "Acidic (ph < 4)", checked: false, param: "", value: 4 },
  ];

  const [filterArr, updateFilterArr] = useState(initFilterArr);
  useEffect(() => getBeersArr(), [filterArr, searchTerm]);


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

//   const filteredBeersArr = beers
//       .filter((beer) => {
//       const beerNameLower = beer.name.toLowerCase();
//       // let filterStr = `${beerNameLower}.includes(${searchTerm})`
//       // filterArr.forEach(filterCond => {
//       //   console.log()
//       //   if (filterCond.checked) {
//       //     filterStr += ` && beer.${filterCond.field} ${filterCond.operator} ${filterCond.value}`
//       //   }
//       // })
//       // console.log(filterStr)
//       // return {filterStr};
//       return beerNameLower.includes(searchTerm)
//          && (filterArr[0].checked ? beer.abv > 6: true )
//          && (filterArr[1].checked ? beer.first_brewed.substr(3,6) < 2010: true )
//          && (filterArr[2].checked ? beer.ph < 4: true )
// })

// Filter on ph is not available in the api
  const filteredBeersArr = beersArr
      .filter((beer) => {
      console.log (`name: ${beer.name}  ph: ${beer.ph}`)
      return (filterArr[2].checked ? beer.ph < 4: true )
})


const getBeersArr = () => {
  let url = 'https://api.punkapi.com/v2/beers?'
  if (searchTerm.length > 0) {
    url = `${url}beer_name=${searchTerm}`
  }
  filterArr.forEach(filterCond => {
        if (filterCond.checked && filterCond.param) {
          url = `${url}&${filterCond.param}=${filterCond.value}`
        }
      })
  console.log(url)
  callBeerUrl(url);
}

const callBeerUrl = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  setBeersArr(data);
}

  return (
    <div className="App">
        <NavBar searchTerm={searchTerm} handleInput={handleInput} filterArr={filterArr} toggleCheckedFilter={toggleCheckedFilter}/>
        <Main beersArr={filteredBeersArr} />
    </div>
  );
}

export default App;
