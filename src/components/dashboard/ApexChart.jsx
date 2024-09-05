import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  // State management using useState hook
  const [series] = useState([
    {
      name: 'This Week',
      data: [31, 40, 28, 51, 42, 109, 100, 60, 70, 80, 90, 100] // Monthly data points
    },
    {
      name: 'Last Week',
      data: [11, 32, 45, 32, 34, 52, 41, 30, 40, 50, 60, 70] // Monthly data points
    }
  ]);

  const [options] = useState({
    chart: {
      height: 400,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: [
        "2024-01-01T00:00:00.000Z", 
        "2024-02-01T00:00:00.000Z", 
        "2024-03-01T00:00:00.000Z", 
        "2024-04-01T00:00:00.000Z", 
        "2024-05-01T00:00:00.000Z", 
        "2024-06-01T00:00:00.000Z", 
        "2024-07-01T00:00:00.000Z",
        "2024-08-01T00:00:00.000Z",
        "2024-09-01T00:00:00.000Z",
        "2024-10-01T00:00:00.000Z",
        "2024-11-01T00:00:00.000Z",
        "2024-12-01T00:00:00.000Z",
      ],
      labels: {
        format: 'MMM', // Format to display only the month
        rotate: -45 // Optional: Rotate labels for better readability
      }
    },
    tooltip: {
      x: {
        format: 'MMM yyyy'
      },
    },
  });

  return (
    <div>
      <div id="chart" className='w-[810px] mt-[30px] h-[420px] bg-white p-[20px] border-[4px] rounded-3xl border-gray-200'>
        <h1 className='font-bold'>School Performance</h1>
        <ReactApexChart options={options} series={series} type="area" height={360} width={735} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default ApexChart;