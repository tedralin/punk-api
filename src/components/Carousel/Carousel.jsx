import "./Carousel.scss";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";


const Carousel = (props) => {
  const {sliceStart, sliceEnd, arrayLen, handleIncrement, handleDecrement} = props;
  
  return (
    <div className="carousel">
        <img src={leftArrow}  alt="left arrow"  onClick={handleDecrement} className={sliceStart===0?"arrow-disabled":"arrow-enabled"}/>
        <img src={rightArrow} alt="right arrow" onClick={handleIncrement} className={sliceEnd>=arrayLen?"arrow-disabled":"arrow-enabled"}/>
    </div>        

  )
}

export default Carousel