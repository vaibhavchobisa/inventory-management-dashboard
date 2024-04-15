import CityWidget from "../city-widget/city-widget.component";
import './city-widget-container.styles.scss';
import { useContext } from 'react';
import { DataContext } from '../../contexts/data.context';

const CityWidgetContainer = () => {
  const { appData } = useContext(DataContext);
  return (
    <div className="city-widget-container">
      {
        appData.map((c, i) => <CityWidget key={i} num={c.for1} per={c.for2} city={c.city} chartData1={[c.aiForeHis, c.finalForeHis]} chartData2={[c.aiForeFuture, c.finalForeFuture]} />)
      }
    </div>
  )
}

export default CityWidgetContainer;
