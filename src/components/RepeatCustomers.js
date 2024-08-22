import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const RepeatCustomers = () => {
  const [data, setData] = useState([]);

  const getRepeatCustomersData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/repeat-customers');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getRepeatCustomersData();
  }, []);

  const chartData = {
    labels: data.map(entry => entry.date),
    datasets: [{
      label: 'Repeat Customers',
      data: data.map(entry => entry.count),
      backgroundColor: 'rgba(255, 159, 64, 1)',
    }],
  };

  return <Bar data={chartData} />;
};

export default RepeatCustomers;
