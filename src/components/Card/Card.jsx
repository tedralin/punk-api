import CardDetails from "../CardDetails/CardDetails";
import "./Card.scss";

const Card = (props) => {
  const {beer} = props;
  const otherInfoArr = [{label: "ABV", value: beer.abv},
    {label: "PH", value: beer.ph},
    {label: "First Brewed", value: beer.first_brewed}]

    const lastSentenceIndex = beer.description.indexOf(".", 300) + 1;
    const shortenedText = beer.description.substring(0, lastSentenceIndex);
  
  return (
    <div className="beer-tile">
      <img className="beer-tile__img"
          src={beer.image_url}
          alt={beer.name}
      />
      <h3>{beer.name}</h3>
      {/* <div className="beer-tile__tagline">{beer.tagline}</div> */}
      <CardDetails otherInfoArr={otherInfoArr}/>
      <div className="beer-tile__desc">{shortenedText || beer.description}</div>

    </div>
  )
}

export default Card