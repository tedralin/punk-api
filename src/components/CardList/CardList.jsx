// import Card from "../Card/Card";
import Card from "../Card/Card";
import "./CardList.scss";

const CardList = (props) => {
  const {beersArr} = props;

  const beerListJSX = beersArr.map ((beer) => {
    return (
        <Card beer={beer} key={beer.id}/>
      )
  } );

  return (
    <div className="beer-container">
        {beerListJSX}
    </div>
  )
}

export default CardList;