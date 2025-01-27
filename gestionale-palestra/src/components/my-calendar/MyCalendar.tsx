import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
  resource: string;
}

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#f0f0f0',
  position: 'relative',
  zIndex: 1
};

const calendarWrapperStyle = {
  width: '80%',
  maxWidth: '1200px',
};

const localizer = momentLocalizer(moment);

const events: CalendarEvent[] = [
  {
    title: 'Blow Dry',
    start: new Date(2025, 0, 27, 9, 0),
    end: new Date(2025, 0, 27, 10, 0),
    resource: 'Alice'
  },
  // Aggiungi altre eventi qui
];

const customEventPropGetter = (event: CalendarEvent) => {
  const backgroundColor = event.title === 'Blow Dry' ? 'red' : '#32CD32';
  return { style: { backgroundColor } };
};

export const MyCalendar: React.FC = () => (
  <div style={containerStyle}>
    <div style={calendarWrapperStyle}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={customEventPropGetter}
      />
    </div>
  </div>
);
