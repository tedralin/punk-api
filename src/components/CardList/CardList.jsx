// import Card from "../Card/Card";
import Card from "../Card/Card";
import "./CardList.scss";

const CardList = (props) => {
  const {beersArr} = props;

  return (
    <div className="beer-container">
        {beersArr.map ((beer) => (<Card beer={beer} key={beer.id}/>))}
    </div>
  )
}

export default CardList;