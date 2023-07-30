import React, { useState, FC } from 'react'
import { Title } from './App.style'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { useAccessibilityContext } from '../contexts/AccessibilityContext'
interface CalendarDateProps {
    isDatePickerOpen: boolean;
    setDatePickerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalendarDate: FC<CalendarDateProps> = ({ isDatePickerOpen, setDatePickerOpen }) => {
    const [currentTime] = useState<Date>(new Date())
    const {tabIndex} = useAccessibilityContext();
    const handleDateClick = () => {
        setDatePickerOpen(true)
    }

    const handleClose = () => {
        if (isDatePickerOpen) {
            setDatePickerOpen(!isDatePickerOpen)
        }
    }

    const handleDateChange = () => {
        setDatePickerOpen(false)
    }

    const formattedDate = currentTime ? currentTime.toLocaleDateString() : ''

    return (
        <>
            <div
                onClick={handleClose}
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
                      cursor: "pointer"
                  }}
                  tabIndex={tabIndex}
                  onKeyDown={(e) => {
                    if(e.key == " " ||e.key == "Enter" ){
                        handleDateClick()
                    }
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

export default CalendarDate
