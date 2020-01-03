import React, {FC, useState, Fragment} from "react";
import styled from 'styled-components';
import axios from "axios";
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
const GOOGLE_KEY = process.env.GOOGLE_API_KEY;

const Input = styled.input`
  margin: 0px auto;
  margin-top: 30px;
  display: grid;
  border-color: #D1D0CC
  border-radius: 5px;
  border-width: thin;
  height: 30px;
  width: 300px;
  color: black;
`;

const DatePick = styled.div`
  display: grid;
  margin: 0px auto;
  grid-template-columns: 100%;
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
    console.log(e.target.value)
    axios.defaults.baseURL = 'http://localhost:8081';
    axios.get(`api/cities`, {
      params: {
        city: e.target.value
      }
    })
  };


  handleSubmit = () => {
    console.log(search);
    console.log(JSON.stringify(startDate));
    console.log(endDate);
    axios.defaults.baseURL = 'http://localhost:8081';
    axios.post(`/explore/city/${search},${"123.com"},${JSON.stringify(startDate)}, ${JSON.stringify(endDate)}`)
    .then((res) => {
      console.log(res);
    })
  };

  //API call for city
  // axios.defaults.baseURL = 'http://localhost:8081';
  // axios.get(`api/cities/${e.target.value}`)
  // .then((res) => {
  //   console.log(res)
  // });
  

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
      <DatePick>
        <div>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>
      </DatePick>
      <DatePick>
        <div>
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
      </DatePick>
      <button onClick={handleSubmit}>Search</button>
    </Fragment>
  );
};

