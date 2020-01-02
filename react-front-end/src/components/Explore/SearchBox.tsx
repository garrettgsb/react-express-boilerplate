import React, {FC, useState, Fragment} from "react";
import styled from 'styled-components';
import axios from "axios";
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Input = styled.input`
  border-radius: 5px
  height: 30px
  weight: auto
  color: black
`;

interface SearchProps {
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selected?: string | null,
  date?: Date | null
};

export const SearchBar: FC<SearchProps> = ({handleInputChange, handleSubmit}) => {
  
  //user city input
  const [search, setSearch] = useState('');

  //user date input
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  handleInputChange = (e) => {
    setSearch(e.target.value)
  };

  handleSubmit = (e) => {
    console.log(search);
    console.log(startDate);
    console.log(endDate);
  };

  //API call for city

  axios.defaults.baseURL = 'https://maps.googleapis.com';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  axios.get(`/maps/api/place/findplacefromtext/json?input=${search}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${process.env.GOOGLE_API_KEY}`)
  .then(results => console.log(results));

  return (
    <Fragment>
      <div className="SearchBar">
        <label className="search-label" htmlFor="search-input">
          <Input
              type="text"
              id="search-input"
              placeholder="Please enter your destination"
              onChange ={handleInputChange}
              value = {search}
          />
        </label>
      </div>
      <div className="DatePicker">
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
          selected={endDate}
          onChange={date => setEndDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </div>
      <button onClick={handleSubmit}>Search</button>
    </Fragment>
  );
};

