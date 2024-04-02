import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';



const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const generateCalendarDays = () => {
    const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
    const calendarDays = [];

  
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(<td key={`empty-${i}`} className="px-4 py-2"></td>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
      calendarDays.push(
        <td key={day} className={`px-4 py-2 font-bold cursor-pointer ${isSelectedDate(date) ? 'bg-blue-500 text-white' : ''}`} onClick={() => handleDateChange(date)}>
          {day}
        </td>
      );
    }

    return calendarDays;
  };

  const isSelectedDate = (date) => {
    return date.toDateString() === selectedDate.toDateString();
  };

  return (
    <div>
      <div className="flex justify-between mt-8">
        <button className="mr-2" onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, selectedDate.getDate()))}><ArrowRightAltIcon fontSize='large' className="w-6 h-6 transform rotate-180" /></button>
        <h2 align="center" style={{ color: 'gray', fontSize:'22px' }}>{`${selectedDate.toLocaleString('default', { month: 'long' })} ${selectedDate.getFullYear()}`}</h2>
        <button className="ml-2" onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, selectedDate.getDate()))}><ArrowRightAltIcon fontSize='large'/></button>
      </div>
      <table className="border-collapse bg-neutral-900 text-white mx-auto mt-4" cellSpacing="20">
        <thead>
          <tr className='border-b border-zinc-500'>
            <th className="px-2 py-2 bg-none font-bold text-zinc-500">Sun</th>
            <th className="px-2 py-2 bg-none font-bold text-zinc-500">Mon</th>
            <th className="px-2 py-2 bg-none font-bold text-zinc-500">Tue</th>
            <th className="px-2 py-2 bg-none font-bold text-zinc-500">Wed</th>
            <th className="px-2 py-2 bg-none font-bold text-zinc-500">Thu</th>
            <th className="px-2 py-2 bg-none font-bold text-zinc-500">Fri</th>
            <th className="px-2 py-2 bg-none font-bold text-zinc-500">Sat</th>
          </tr>
        </thead>
        <tbody>
          {renderCalendarRows(generateCalendarDays())}
        </tbody>
      </table>
    </div>
  );
};

const renderCalendarRows = (calendarDays) => {
  const rows = [];
  const chunkSize = 7;
  for (let i = 0; i < calendarDays.length; i += chunkSize) {
    rows.push(
      <tr key={i}>
        {calendarDays.slice(i, i + chunkSize)}
      </tr>
    );
  }
  return rows;
};

export default Calendar;
