// import Card from "../Card/Card";
import "./CardList.scss";

const CardList = (props) => {
  const {beersArr} = props;

  const beerListJSX = beersArr.map ((beer) => {
    return (
        <div className="beer-tile" key={beer.id}>
            <img className="beer-tile__img"
                src={beer.image_url}
                alt={beer.name}
            />
            <h1>{beer.name}</h1>
            <div className="beer-tile__tagline">{beer.tagline}</div>
            <div className="beer-tile__details">
                <div>ABV: {beer.abv} </div>
                <div>PH : {beer.ph} </div>
                <div>First Brewed: {beer.first_brewed} </div>
            </div>
            <div className="beer-tile__desc">{beer.description}</div>
    
        </div>
      )
  } );

  return (
    <div className="beer-container">
        {beerListJSX}
    </div>
  )
}

export default CardList;