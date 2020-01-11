import React, {FC, useState, Fragment} from "react";
import { Redirect, useHistory} from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Input, Suggestion, DatePick, Button, Header } from "./SearchBox.component"


interface SearchProps {
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selected?: string | null,
  date?: Date | null,
  city?: string | null
};

interface SearchObj {
  query: string | number | string[] | undefined,
  results: Array<any>
};

export const SearchBar: FC<SearchProps> = ({ handleInputChange, handleSubmit }) => {
  
  //user city input
  const [search, setSearch] = useState<SearchObj>({ query: '', results: [] });

  //user date input
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const history = useHistory()
  const [itinerariesId, setItinerariesId] = useState<number | null>();
  
  handleInputChange = (e) => {
    const city = e.target.value
    axios.get(`/api/itineraries/`, {
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
    const city = search.query;
    const cityImg = 'https://vancouver.ca/images/cov/feature/about-vancouver-landing-size.jpg';
    const tripStart = Math.round(startDate.getTime() / 1000);
    const tripEnd = Math.round(endDate.getTime() / 1000);
    Promise.all([
      axios(`/api/itineraries`, {
        method: "post",
        data: {
          city,
          cityImg,
          tripStart, 
          tripEnd
        },
        withCredentials: true
      }),
    ])
    .then((res) => {
      setItinerariesId(res[0].data);
    })

  };

  return (
    itinerariesId ? <Redirect to={`/explore/${itinerariesId}`} />
    :
    <Fragment>
      <Header>Where do you travel to next?</Header>
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
          />
        </div>
      </DatePick>
      <DatePick>
        <div>
        <h4>End Date</h4>
          <DatePicker
            selected={endDate}
            onChange={date => setEndDate(date)}
          />
        </div>  
      </DatePick>
      <Button onClick={handleSubmit}>Search</Button>

    </Fragment>
  );
};
