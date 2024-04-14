import CityWidget from "../city-widget/city-widget.component";
import './city-widget-container.styles.scss';
import { data } from '../../assets/city-data';


const CityWidgetContainer = () => {
  console.log(data);
  return (
    <div className="city-widget-container">
      {
        data.map((d, i) => <CityWidget key={i} num={d.for1} per={d.for2} city={d.city} />)
      }
    </div>
  )
}

export default CityWidgetContainer;
