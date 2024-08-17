import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];

const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function FinancialChart() {
  return (
 <div className=' absolute left-[600px] bg-white rounded-2xl ml-[20px] mt-[30px] border-[3px] border-gray-200 w-[600px] p-[20px]'>
       <h3 className='font-bold'>Fanancial Summary</h3>
       <BarChart
      width={500}
      height={200}
      series={[
        { data: pData, label: '', stack: 'stack1' },
        { data: amtData, label: '' },
       
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
 </div>
  );
}
