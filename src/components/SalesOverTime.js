import React, { useEffect, useState } from 'react';
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesOverTime = () => {
  const [datasets, setDatasets] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/sales'); // Adjust this URL as needed
      const data = await response.json();
      setDatasets(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const chartData = {
    labels: datasets.map(dataset => dataset.label), // Adjust according to your data
    datasets: [{
      label: 'Total Sales',
      data: datasets.map(dataset => dataset.value), // Adjust according to your data
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    }],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Over Time',
      },
    },
  };

  return (
    <div style={{ maxWidth: '90%', maxHeight: '70vh', margin: '0 auto' }}>
      <h2>Sales Over Time</h2>
      <div style={{ position: 'relative', height: '60vh', width: '100%' }}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default SalesOverTime;
