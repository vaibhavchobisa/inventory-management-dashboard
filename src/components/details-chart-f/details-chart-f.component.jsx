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
import './details-chart-f.styles.scss';
import { color } from 'chart.js/helpers';

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
faker.seed([19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
export const data = {
  labels,
  datasets: [
    {
      label: 'AI Forecast',
      data: labels.map(() => faker.finance.amount({ min: 400, max: 880, dec: 0 })),
      borderColor: '#2ec132',
      backgroundColor: '#2ec132',
    },
    {
      label: 'Final Forecast',
      data: labels.slice(1, 4).map(() => faker.finance.amount({ min: 400, max: 880, dec: 0 })),
      borderColor: '#f5eb0a',
      backgroundColor: '#f5eb0a',
    },
    {
      label: 'Previous Quarter Final Forecast',
      data: labels.map(() => faker.finance.amount({ min: 400, max: 880, dec: 0 })),
      borderColor: '#cd6686',
      backgroundColor: '#cd6686',
    },
  ],
};

const DetailsChartF = () => {
  return (
    <div className='details-chart-f'>
      <Line options={options} data={data} />
    </div>
  )
}

export default DetailsChartF
