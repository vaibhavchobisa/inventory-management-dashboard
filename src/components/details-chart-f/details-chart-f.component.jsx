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
import './details-chart-f.styles.scss';

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
      text: 'FORECAST',
      position: 'top',
      color: '#38c7d5'
    },
  },
  scales: {
    x: {
      grid: {
        color: '#4b7aa2',
      },
      border: {
        color: '#4b7aa2'
      }
    },
    y: {
      display: false,
      min: 0,
      max: 900,
      stepSize: 100,
      grid: {
        display: false,
      },
    },
  },
  elements: {
    point: { pointStyle: false },
    line: {
      borderDash: [5],
      borderWidth: 1.5
    }
  },
  maintainAspectRatio: false,
};

const labels = ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025'];

const DetailsChartF = ({ chartData }) => {

  const data = {
    labels,
    datasets: [
      {
        label: 'AI Forecast',
        data: chartData[0]?.map(a => (a.replaceAll(',', '')) / 1000),
        borderColor: '#2ec132',
        backgroundColor: '#2ec132',
      },
      {
        label: 'Final Forecast',
        data: chartData[1]?.map(a => (a.replaceAll(',', '')) / 1000),
        borderColor: '#f5eb0a',
        backgroundColor: '#f5eb0a',
      },
      {
        label: 'Previous Quarter Final Forecast',
        data: chartData[2]?.map(a => (a.replaceAll(',', '')) / 1000),
        borderColor: '#cd6686',
        backgroundColor: '#cd6686',
      },
    ],
  };

  return (
    <div className='details-chart-f'>
      <Line options={options} data={data} />
    </div>
  )
}

export default DetailsChartF
