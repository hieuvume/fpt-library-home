import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ChartData, ChartOptions } from 'chart.js';
import useSWR from 'swr';
import { dashboardPaymentApi } from '@/api/payment';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface MonthlyData {
  totalAmount: number;
  month: number;
  year: number;
}

interface MonthlyPaymentChartProps {
  initialData?: MonthlyData[]; // Đặt dữ liệu ban đầu là tùy chọn
}

export default function MonthlyPaymentChart({ initialData }: MonthlyPaymentChartProps) {
  const { data: fetchedData, error } = useSWR('/api/payments/monthly-statistics', dashboardPaymentApi.monthlyStatistics, {
    fallbackData: initialData,
  });

  if (error) return <div>Failed to load data</div>;
  if (!fetchedData) return <div>Loading...</div>;

  const labels = fetchedData.map((item) => `${item.month}/${item.year}`);
  const totalAmounts = fetchedData.map((item) => item.totalAmount);

  const chartData: ChartData<'bar'> = {
    labels,
    datasets: [
      {
        label: 'Total Payment Amount',
        data: totalAmounts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Total Monthly Payment Amount',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Amount (VND)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Monthyly/Yearly',
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}
