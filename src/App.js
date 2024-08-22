import React from 'react';
import SalesOverTime from './components/SalesOverTime'; // Import your existing chart component
import GeographicalDistribution from './components/GeographicalDistribution'; // Import the GeographicalDistribution component

const App = () => {
  // Sample customer data (you can replace this with your actual data fetching logic later)
  const customers = [
    { name: 'Customer 1', latitude: 51.505, longitude: -0.09 },
    { name: 'Customer 2', latitude: 51.51, longitude: -0.1 },
    // Add more customers here...
  ];

  return (
    <div>
      <h1>E-commerce Data Visualization</h1>
      <SalesOverTime /> {/* Your existing sales chart */}
      <GeographicalDistribution customers={customers} /> {/* Add the geographical distribution chart */}
      {/* Include other charts here */}
    </div>
  );
};

export default App;
