import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import './styles.css'

// Function to determine CSS class based on day number
const getDayClass = (day) => {
  const dayNumber = day.date();
  switch (dayNumber) {
    case 1:
      return 'day-red';
    case 2:
      return 'day-blue';
    case 3:
      return 'day-green';
    case 4:
      return 'day-purple';
    // Add more cases as needed
    default:
      return 'day-default'; // Default class for other days
  }
};

export default function BasicDateCalendar() {
  return (
    <div className='border-2 p-[20px] border-gray-200 ml-[50px] h-[340px] rounded-md bg-white'>
      <h3 className='font-bold'>School Calendar</h3>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          renderDay={(day, selectedDate, DayComponent) => (
            <DayComponent
              className={getDayClass(day)}
            />
          )}
        />
      </LocalizationProvider>
    </div>
  );
}
