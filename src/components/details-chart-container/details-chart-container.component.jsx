import DetailsChartH from "../details-chart-h/details-chart-h.component"
import DetailsChartF from "../details-chart-f/details-chart-f.component"
import './details-chart-container.styles.scss'

const DetailsChartContainer = () => {
  return (
    <div className="details-chart-contianer">
      <DetailsChartH />
      <DetailsChartF />
    </div>
  )
}

export default DetailsChartContainer
