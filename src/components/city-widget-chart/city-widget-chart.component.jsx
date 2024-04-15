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

const labels = ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025'];

const CityWidgetChart = ({ chartData }) => {
  let data = { labels, datasets: [] };
  if (chartData) {
    data = {
      labels,
      datasets: [
        {
          data: chartData[0]?.map(a => (a.replaceAll(',', '')) / 1000),
          borderColor: '#4b7aa2',
          backgroundColor: '#4b7aa2',
        },
        {
          data: chartData[1]?.map(a => (a.replaceAll(',', '')) / 1000),
          borderColor: '#4b7aa2',
          backgroundColor: '#4b7aa2',
          borderDash: [3.5],
        },
      ],
    };
  }


  return (
    <div className='city-widget-chart'>
      <Line options={options} data={data} />
    </div>
  )
}

export default CityWidgetChart;
