import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const SalesGrowthRate = () => {
  const [data, setData] = useState([]);

  const getSalesGrowthData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/sales-growth-rate');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getSalesGrowthData();
  }, []);

  const chartData = {
    labels: data.map(entry => entry.date),
    datasets: [{
      label: 'Sales Growth Rate',
      data: data.map(entry => entry.growthRate),
      backgroundColor: 'rgba(75, 192, 192, 1)',
    }],
  };

  return <Bar data={chartData} />;
};

export default SalesGrowthRate;
