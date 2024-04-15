import DetailsChartH from "../details-chart-h/details-chart-h.component"
import DetailsChartF from "../details-chart-f/details-chart-f.component"
import './details-chart-container.styles.scss'

const DetailsChartContainer = ({ chartData }) => {
  return (
    <div className="details-chart-contianer">
      <DetailsChartH chartData={chartData.slice(0, 4)} />
      <DetailsChartF chartData={chartData.slice(3)} />
    </div>
  )
}

export default DetailsChartContainer;