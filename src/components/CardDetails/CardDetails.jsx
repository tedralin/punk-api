import "./CardDetails.scss";


const CardDetails = (props) => {
  const {otherInfoArr} = props;
  const infoArr = otherInfoArr.map(info => {
    return (
        <div className="beer-tile__detail">
            <div className = "beer-tile__detail__label">{info.label}: </div>
            <div className = "beer-tile__detail__value">{info.value}  </div>
        </div>
    )
  } 
);

  return (
    <div className="beer-tile__detail">
            {infoArr}
    </div>
     )
}

export default CardDetails;