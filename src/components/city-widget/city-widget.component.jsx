import './city-widget.styles.scss';

const CityWidget = ({ num, per, city }) => {
  return (
    <div className="widget">
      <h2>{city}</h2>
      <div className="no-forecast-container">
        <h3>Forecast</h3>
        <div className="no-forecast">
          <span>{num}</span>
        </div>
      </div>
      <div className="per-forecast-container">
        <h3>Forecast</h3>
        <span>{per}%</span>
        <div className="per-forecast"></div>
      </div>
    </div>
  )
}

export default CityWidget;