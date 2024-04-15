import './city-widget.styles.scss';
import CityWidgetChart from '../city-widget-chart/city-widget-chart.component';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import { useNavigate } from 'react-router-dom';

const CityWidget = ({ num, per, city, chartData1, chartData2 }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/${city.toLocaleLowerCase()}`);
  }

  return (
    <div className="widget" onClick={clickHandler} >
      <h2>{city}</h2>
      <div className='forecast-container'>
        <div className="no-forecast-container">
          <div className="no-forecast">
            <h3>Forecast</h3>
            <span className='num'>{num}</span>
          </div>
          <div className='chart'>
            <CityWidgetChart chartData={chartData1} />
            <ArrowUpwardOutlinedIcon />
          </div>
        </div>
        <div className="per-forecast-container">
          <div className="per-forecast">
            <h3>Forecast</h3>
            <span className='per'>{per}%</span>
          </div>
          <div className='chart'>
            <CityWidgetChart chartData={chartData2} />
            <ArrowDownwardOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityWidget;