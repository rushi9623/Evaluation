import React from 'react';
import { Chart } from 'chart.js';

const ChartComponent = ({ data }) => {
  // Use a ref to create a chart instance
  const chartRef = React.useRef();

  React.useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: 'bar', // Change the chart type as needed
      data: {
        labels: data.map(item => item.label), // Adjust according to your dataset
        datasets: data,
      },
      options: {
        // Add chart options here
      },
    });

    return () => {
      chartInstance.destroy(); // Clean up chart instance on unmount
    };
  }, [data]);

  return <canvas ref={chartRef} />; // Render the chart in a canvas element
};

export default ChartComponent;
