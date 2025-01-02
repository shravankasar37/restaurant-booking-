import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import AvailabilityDisplay from '../components/AvailabilityDisplay';
import BookingSummary from '../components/BookingSummary';

export default function Home() {
  const [booking, setBooking] = useState(null);

  return (
    <div>
      <h1>Restaurant Table Booking</h1>
      {!booking ? (
        <>
          <BookingForm onBookingSuccess={setBooking} />
          <AvailabilityDisplay date={new Date()} />
        </>
      ) : (
        <BookingSummary booking={booking} />
      )}
    </div>
  );
}