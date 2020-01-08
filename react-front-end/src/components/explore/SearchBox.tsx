import React, {FC, useState, Fragment} from "react";
import { Redirect, useHistory} from "react-router-dom";
import styled from 'styled-components';
import axios from "axios";
import PropTypes, { string } from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Input = styled.input`
  margin: 0px auto;
  margin-top: 30px;
  display: grid;
  border-color: #D1D0CC
  border-radius: 5px;
  border-width: thin;
  padding: 0px 10px;
  height: 40px;
  width: 300px;
  color: black;
`;

const Suggestion = styled.p`
  color: red;
`;
const DatePick = styled.div`
  margin: 5px auto;
  display: inline-block;
  // width: 100px;
`;

const Button = styled.button`
  margin: 5px auto;
  // width: 100px;
`;

interface SearchProps {
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selected?: string | null,
  date?: Date | null,
};

interface SearchObj {
  query: string | number | string[] | undefined,
  results: Array<any>
};

export const SearchBar: FC<SearchProps> = ({handleInputChange, handleSubmit}) => {
  
  //user city input
  const [search, setSearch] = useState<SearchObj>({ query: '', results: [] });

  //user date input
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const history = useHistory()
  
  handleInputChange = (e) => {
    const city = e.target.value
    axios.defaults.baseURL = 'http://localhost:8081';
    axios.get(`api/cities`, {
      params: {
        city: e.target.value
      }
    })
    .then(res => {
      let result: Array<any>;
      let suggestion: Array<any>;
      result = res.data.predictions
      suggestion =[];
      result.map(each => {
        suggestion.push(each.description.split(',')[0])
      })
      setSearch({ query: city, results: suggestion })
    }) 
  };

  handleSubmit = () => {
    axios.defaults.baseURL = 'http://localhost:8081';
    Promise.all([
      axios.post(`/explore/city/${search.query},${"123.com"},${JSON.stringify(startDate)}, ${JSON.stringify(endDate)}`),
      axios.post(`/api/latlong/${search.query}`)
    ])
    .then(() => {
      history.push(`/explore/:${search.query}`);
    })

  };

  return (
    <Fragment>
      <div className="SearchBar">
          <form>
            <Input
                type="text"
                id="search-input"
                placeholder="Please enter your destination"
                onChange ={handleInputChange}
                value = {search.query}
            />
            <Suggestion>{search.results}</Suggestion>
          </form>
      </div>
      <DatePick>
        <div>
          <h4>Start Date</h4>
          <DatePicker 
            selected={startDate}
            onChange={date => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="time"
            dateFormat="yyyy/MM/dd"
          />
        </div>
      </DatePick>
      <DatePick>
        <div>
        <h4>End Date</h4>
          <DatePicker
            selected={endDate}
            onChange={date => setEndDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="yyyy/MM/dd"
          />
        </div>  
      </DatePick>
      <Button onClick={handleSubmit}>Search</Button>

    </Fragment>
  );
};

