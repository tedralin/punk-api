import './App.scss';
import { useEffect, useState } from "react";
import Main from './containers/Main/Main';
import NavBar from './components/NavBar/NavBar';
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

  // Instead of getting the new set of beers from api everytime I get a new filter criteria, I will just get everything once
  // and apply filter array
  // useEffect(() => getBeersArr(), [filterArr, searchTerm]);
    useEffect(() => getBeersArr(), []);


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

  const filteredBeersArr = beersArr
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

// Filter on ph is not available in the api
//   const filteredBeersArr = beersArr
//       .filter((beer) => {
//       // console.log (`name: ${beer.name}  ph: ${beer.ph}`)
//       return (filterArr[2].checked ? beer.ph < 4: true )
// })


const getBeersArr = () => {
  
  //removing this since api cannot handle filter on ph; this causes inconsistent results
  // if (searchTerm.length > 0) {
  //   url = `${url}&beer_name=${searchTerm}`
  // }
  // filterArr.forEach(filterCond => {
  //       if (filterCond.checked && filterCond.param) {
  //         url = `${url}&${filterCond.param}=${filterCond.value}`
  //       }
  //     })
  callBeerUrl();
}

const callBeerUrl = async () => {
  const url = 'https://api.punkapi.com/v2/beers?per_page=80&page='
  const urls = [`${url}1`, `${url}2`, `${url}3`, `${url}4`, `${url}5`];
  const promises = urls.map(url => fetch(url));
  const responses = await Promise.all(promises)
  const dataArr = await Promise.all(responses.map(response => response.json()));
  const result = dataArr.flat();
  setBeersArr(result);

}


  return (
    <div className="App">
        <NavBar searchTerm={searchTerm} handleInput={handleInput} filterArr={filterArr} toggleCheckedFilter={toggleCheckedFilter}/>
        <Main beersArr={filteredBeersArr} />
    </div>
  );
}

export default App;

// const callBeerUrl = async () => {
//   let url = 'https://api.punkapi.com/v2/beers?per_page=80'
//   let page=1;
//   let morePages=true;
//   let pagesArray = [];
//   // let pageUrl="";
//   for (page; morePages && page<6; page++) {
//     const data = await callBeerPageUrl(page);
//     // pageUrl=`${url}&page=${page}`
//     // console.log(pageUrl)
//     // const res = await fetch(pageUrl);
//     // const data = await res.json();
//     //   if (data.length>0) {
//       // await setBeersArr(current => [...current, data]); 

//       console.log(`page ${page} with array size ${beersArr.length}`) ;
//       console.log(beersArr)
      
//     //   } else {page = 0}
//     }
//   // }
//   // setBeersArr(pagesArray);

// }

// const callBeerPageUrl = async (page) => {
//   const res = await fetch(`https://api.punkapi.com/v2/beers?per_page=80&page=${page}`);
//   const data = await res.json();
//   await console.log(data);
//   await setBeersArr(current => [...current, data]); 
// }

// const callBeerUrl = async () => {
//   let url = 'https://api.punkapi.com/v2/beers?per_page=80'
//   let page=1;
//   let pagesArray = [];
//   let morePages=true;

//   for (page; morePages; page++) {
//     url=`${url}&page=${page}`
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data.length)
//       if (data.length>0 && page <3) {
//         pagesArray.push(data);
//         console.log(`page: ${page} now has ${pagesArray.length}`);
//         console.log(url)
//       } else {page = 0;
//       morePages=false;}
//     })
//   setBeersArr(pagesArray);
// }
// }


