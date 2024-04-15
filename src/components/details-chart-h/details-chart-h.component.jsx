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
import './details-chart-h.styles.scss';

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
      position: 'top',
    },
    title: {
      display: true,
      text: 'HISTORICAL',
    },
  },
  scales: {
    x: {
      grid: {
        color: '#4b7aa2', // Color of grid lines parallel to y-axis
      },
      border: {
        color: '#4b7aa2'
      }
    },
    y: {
      min: 0,
      max: 900,
      stepSize: 100,
      grid: {
        display: false, // Remove grid lines parallel to x-axis
      },
    },
  },
  elements: {
    point: { pointStyle: false },
    line: {
      borderWidth: 1.5
    }
  },
  maintainAspectRatio: false,
};

const labels = ['Q3 2022', 'Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023'];

const DetailsChartH = ({ chartData }) => {

  const data = {
    labels,
    datasets: [
      {
        label: 'AI FORECAST',
        data: chartData[1]?.map(a => (a.replaceAll(',', '')) / 1000),
        borderColor: '#2ec132',
        backgroundColor: '#2ec132',
      },
      {
        label: 'FINAL FORECAST',
        data: chartData[2]?.map(a => (a.replaceAll(',', '')) / 1000),
        borderColor: '#f5eb0a',
        backgroundColor: '#f5eb0a',
      },
      {
        label: 'CONSUMPTION',
        data: chartData[0]?.map(a => (a.replaceAll(',', '')) / 1000),
        borderColor: '#76bbf8',
        backgroundColor: '#76bbf8',
      },
    ],
  };

  return (
    <div className='details-chart-h'>
      <Line options={options} data={data} />
    </div>
  )
}

export default DetailsChartH
