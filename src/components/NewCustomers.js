import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const NewCustomers = () => {
  const [data, setData] = useState([]);

  const getNewCustomersData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/new-customers');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getNewCustomersData();
  }, []);

  const chartData = {
    labels: data.map(entry => entry.date),
    datasets: [{
      label: 'New Customers',
      data: data.map(entry => entry.count),
      backgroundColor: 'rgba(153, 102, 255, 1)',
    }],
  };

  return <Bar data={chartData} />;
};

export default NewCustomers;
