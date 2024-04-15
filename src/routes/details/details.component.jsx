import HeaderDP from '../../components/header-details-page/header-details-page.component';
import DetailsChartContainer from '../../components/details-chart-container/details-chart-container.component';
import DetailsTable from '../../components/details-table/details-table.component';
import { useContext, useEffect } from 'react';
import { DataContext } from '../../contexts/data.context';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import './details.styles.scss';

const Details = () => {
  const { appData } = useContext(DataContext);
  let location = useLocation();

  const [stackId, setStackId] = useState('validIdNumberComesHere');
  const [cityName, setCityName] = useState('validIdNumberComesHere');
  const [forecastNum, setForecastNum] = useState('0');
  const [forecastPer, setForecastPer] = useState('0');
  const [chartData, setChartData] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    let city = location.pathname.replaceAll('/', '').toLocaleLowerCase();
    for (let i = 0; i < appData.length; i++) {
      if (appData[i].city.replaceAll(' ', '').toLocaleLowerCase() === city) {
        setCityName(appData[i].city);
        setStackId(appData[i].stackId);
        setForecastNum(appData[i].for1);
        setForecastPer(appData[i].for2);
        let tableData = [
          { name: 'Consumption', data: appData[i]?.consumption?.concat(Array.from({ length: 6 }).fill('0')) },
          { name: 'AI Forecast', data: appData[i]?.aiForeHis?.concat(appData[i].aiForeFuture) },
          { name: 'Final Forecast', data: appData[i]?.finalForeHis?.concat(appData[i].finalForeFuture) },
        ]
        let chartData = [
          appData[i].consumption, appData[i].aiForeHis, appData[i].finalForeHis, appData[i].aiForeFuture, appData[i].finalForeFuture, appData[i].prevQuarterFore
        ];
        setTableData(tableData);
        setChartData(chartData);
        break;
      }
    }

  }, [location, appData])

  return (
    <div className='details-container'>
      <HeaderDP cityName={cityName} stackId={stackId} forecastNum={forecastNum} forecastPer={forecastPer} />
      <DetailsChartContainer chartData={chartData} />
      <DetailsTable tableData={tableData} />
    </div>
  )
}

export default Details;
