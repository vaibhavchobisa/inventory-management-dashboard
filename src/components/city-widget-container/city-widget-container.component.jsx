import './city-widget-container.styles.scss';
import CityWidget from "../city-widget/city-widget.component";
import WidgetAlign from '../widget-align/widget-align.component';
import { useContext } from 'react';
import { DataContext } from '../../contexts/data.context';
import { useState } from 'react';

const CityWidgetContainer = () => {
  const { appData } = useContext(DataContext);
  const [selected, setSelected] = useState('top');

  const buttonClickHandler = (e) => {
    setSelected(e.target.innerText.toLocaleLowerCase());
  }

  return (
    <div className={selected === 'top' ? "city-widget-container" : `${selected} city-widget-container`}>
      <WidgetAlign selected={selected} buttonClickHandler={buttonClickHandler} />
      <div className="city-widgets">
        {
          appData.map((c, i) => <CityWidget key={i} num={c.for1} per={c.for2} city={c.city} chartData1={[c.aiForeHis, c.finalForeHis]} chartData2={[c.aiForeFuture, c.finalForeFuture]} />)
        }
      </div>
    </div>
  )
}

export default CityWidgetContainer;
