import React, { useState } from "react";
import styled from 'styled-components';
import moment from 'moment';
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";

type DatePickProps = { selected: string, date: string };

export default class DatePick extends React.Component<DatePickProps, {}> {
  
  render() {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    );
  };
}

