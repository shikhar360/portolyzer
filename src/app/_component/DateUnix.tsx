import React, { useState } from 'react';
import { useStore } from '../store/Store';

const DateComponent = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [error, setError] = useState('');
  const setFrom = useStore(state => state.setFromUnix)
  const setTo = useStore(state => state.setToUnix)
  const handleFromDateChange = (e: any) => {
    setFromDate(e.target.value);
    setError('');
  }

  const handleToDateChange = (e: any) => {
    setToDate(e.target.value);
    setError('');
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const fromTimestamp = Date.parse(fromDate);
    const toTimestamp = Date.parse(toDate);

    if (isNaN(fromTimestamp) || isNaN(toTimestamp)) {
      setError('Please enter valid dates');
      return;
    }

    const differenceInDays = (toTimestamp - fromTimestamp) / (1000 * 3600 * 24);

    if (differenceInDays > 90) {
      setError('The difference between dates should not be more than 90 days');
      return;
    }

    // Both dates are valid and within the 90-day limit.
    // Convert to Unix timestamps if needed.
    const fromUnixTimestamp = Math.floor(fromTimestamp / 1000);
    const toUnixTimestamp = Math.floor(toTimestamp / 1000);

    console.log('From Unix Timestamp:', fromUnixTimestamp);
    setFrom(fromUnixTimestamp)
    console.log('To Unix Timestamp:', toUnixTimestamp);
    setTo(toUnixTimestamp)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>From Date:</label>
          <input type="date" value={fromDate} onChange={handleFromDateChange} />
        </div>
        <div>
          <label>To Date:</label>
          <input type="date" value={toDate} onChange={handleToDateChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default DateComponent;
