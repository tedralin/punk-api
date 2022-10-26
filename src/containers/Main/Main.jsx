import CardList from "../../components/CardList/CardList";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";
import { useEffect, useState } from "react";
import "./Main.scss";

const Main = (props) => {
  const {beersArr} = props;
  const [sliceStart, setSliceStart] = useState(0);
  const [sliceEnd, setSliceEnd] = useState(8);

  useEffect(() => initSlice(), [beersArr]);
  console.log(beersArr)

  const initSlice = () => {
    setSliceStart(0);
    setSliceEnd(8);
  }

  const handleIncrement = () => {
    console.log ("increment")
    if (sliceEnd + 8 > beersArr.length ) {
      setSliceEnd(beersArr.length)
      if (sliceStart + 8 < beersArr.length - 1) {
        setSliceStart(sliceStart + 8)
      }
    } else {
      setSliceStart(sliceStart + 8)
      setSliceEnd(sliceEnd + 8);
    }
    console.log (sliceStart + "-" + sliceEnd)
  };

  const handleDecrement = () => {
    console.log ("decrement")
    if (sliceStart - 8 < 0) {
      setSliceStart (0);
      setSliceEnd (8);
    } else {
      if (sliceEnd === beersArr.length) {
        setSliceEnd (sliceStart)
      } else {
        setSliceEnd(sliceEnd - 8);
      }
      setSliceStart(sliceStart - 8);
    }
    console.log (sliceStart + "-" + sliceEnd)
  };

  

  return (
    <div className="Main">
        <h2>Beer Catalog</h2>
        {/* <CardList beersArr={beersArr}/> */}
        <CardList beersArr={beersArr.slice(sliceStart, sliceEnd)}/>
        <div className="carousel">
          <img src={leftArrow}  alt="left arrow"  onClick={handleDecrement} className={sliceStart===0?"arrow-disabled":"arrow-enabled"}/>
          <img src={rightArrow} alt="right arrow" onClick={handleIncrement} className={sliceEnd>=beersArr.length?"arrow-disabled":"arrow-enabled"}/>
        </div>        
    </div>
  )}

export default Main