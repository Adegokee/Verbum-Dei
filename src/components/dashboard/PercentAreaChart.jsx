import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const time = [
  new Date(2015, 1, 0),
  new Date(2015, 2, 0),
  new Date(2015, 3, 0),
  new Date(2015, 4, 0),
  new Date(2015, 5, 0),
  new Date(2015, 6, 0),
  new Date(2015, 7, 0),
];
const a = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const b = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const c = [2400, 2210, 2290, 2000, 2181, 2500, 2100];

const getPercents = (array: number[]) =>
  array.map((v, index) => (100 * v) / (a[index] + b[index] + c[index]));

export default function PercentAreaChart() {
  return (
   <div className="mt-[30px] absolute bg-white rounded-2xl border-[3px] border-gray-200 w-[600px] p-[20px]">
    <h3 className='font-bold'>Attendance Summary</h3>
<LineChart
      width={500}
      height={200}
      series={[
        {
          data: getPercents(a),
          type: 'line',
          label: 'Montly',
          area: true,
          stack: 'total',
          showMark: false,
        },
        {
          data: getPercents(b),
          type: 'line',
          label: 'Students',
          area: true,
          stack: 'total',
          showMark: false,
        },
       
        
      ]}
      xAxis={[
        {
          scaleType: 'time',
          data: time,
          min: time[0].getTime(),
          max: time[time.length - 1].getTime(),
        },
      ]}
    />
   </div>
  );
}
