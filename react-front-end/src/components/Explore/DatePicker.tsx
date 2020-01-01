import React, { FC, useState, Fragment } from "react";
import styled from 'styled-components';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

type DatePickerProps = {
  selected?: string | null,
  date?: Date | null
};


// export default class DatePick extends React.Component<DatePickProps, {}> {
export const DatePick: FC<DatePickerProps> = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <Fragment>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </Fragment>
  );
// };
}


