import CardList from "../../components/CardList/CardList";
import "./Main.scss";

const Main = (props) => {
  const {beersArr} = props;
  

  return (
    <div className="Main">
        <CardList beersArr={beersArr}/>
    </div>
  )}

export default Main