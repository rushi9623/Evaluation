import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const CustomerLifetimeValue = () => {
  const [data, setData] = useState([]);

  const getCLVData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/customer-lifetime-value');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getCLVData();
  }, []);

  const chartData = {
    labels: data.map(entry => entry.cohort),
    datasets: [{
      label: 'Customer Lifetime Value',
      data: data.map(entry => entry.value),
      backgroundColor: 'rgba(75, 192, 192, 1)',
    }],
  };

  return <Bar data={chartData} />;
};

export default CustomerLifetimeValue;
