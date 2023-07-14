import React, { useState, useEffect } from 'react'
import { Title } from './App.style'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
const Datecalendar = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isDatePickerOpen, setDatePickerOpen] = useState(false)

  const handleDateClick = () => {
    setDatePickerOpen(true)
  }

  const handleDateChange = (date) => {
    setCurrentTime(date)
    setDatePickerOpen(false)
  }

  const formattedDate = currentTime ? currentTime.toLocaleDateString() : ''
  const formattedTime = currentTime
    ? currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : ''
  return (
    <>
      <div
        style={{
          textAlign: 'center',
          color: 'white',
          marginTop: '-70px',
        }}
      >
        {isDatePickerOpen ? (
          <DatePicker
            selected={currentTime}
            onChange={handleDateChange}
            inline
          />
        ) : (
          <Title>
            <p
              style={{
                fontSize: '16px',
                marginBottom: '0px',
                marginTop: '-40px',
              }}
            >
              <span
                style={{
                  WebkitBackgroundClip: 'text',
                }}
                onClick={handleDateClick}
              >
                {formattedDate}
              </span>
            </p>
          </Title>
        )}
      </div>
    </>
  )
}

export default Datecalendar
