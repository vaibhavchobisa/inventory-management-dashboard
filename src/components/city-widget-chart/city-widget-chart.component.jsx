import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import './city-widget-chart.styles.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      // display: false,
      grid: {
        display: false,
        // color: '#4b7aa2', // Color of grid lines parallel to y-axis
      },
      border: {
        color: '#4b7aa2'
      },
      ticks: {
        display: false,
      }
    },
    y: {
      display: false,
      min: 0,
      max: 900,
      stepSize: 100,
      grid: {
        // display: false, // Remove grid lines parallel to x-axis
      },
    },
  },
  elements: {
    point: { pointStyle: false },
    line: {
      borderWidth: 2,
      tension: 1,
    }
  },
  // maintainAspectRatio: false,
};

faker.seed(2);
const labels = ['Q3 2022', 'Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023'];
const data = {
  labels,
  datasets: [
    {
      data: labels.slice(3).map(() => faker.finance.amount({ min: 400, max: 880, dec: 0 })),
      borderColor: '#4b7aa2',
      backgroundColor: '#4b7aa2',
    },
    {
      data: labels.map(() => faker.finance.amount({ min: 400, max: 880, dec: 0 })),
      borderColor: '#4b7aa2',
      backgroundColor: '#4b7aa2',
    },
  ],
};

const CityWidgetChart = () => {
  return (
    <div className='city-widget-chart'>
      <Line options={options} data={data} />
    </div>
  )
}

export default CityWidgetChart;
