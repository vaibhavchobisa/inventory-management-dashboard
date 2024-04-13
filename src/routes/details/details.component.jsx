import HeaderDP from '../../components/header-details-page/header-details-page.component';
import DetailsChartContainer from '../../components/details-chart-container/details-chart-container.component';
import DetailsTable from '../../components/details-table/details-table.component';
import './details.styles.scss';

const Details = () => {
  return (
    <div className='details-container'>
      <HeaderDP />
      <DetailsChartContainer />
      <DetailsTable />
    </div>
  )
}

export default Details;
