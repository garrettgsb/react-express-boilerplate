import React, {useState} from "react";
import axios from "axios";

export default function Autocomplete({ searchText, setName }) {

  const text = searchText;

  const [address, setAddress] = useState("")

  const handleChange = (value) => {
    setAddress(value);
  }

  const options = {
    method: 'GET',
    url: 'https://google-maps28.p.rapidapi.com/maps/api/place/queryautocomplete/json',
    params: {input: text, language: 'en'},
    headers: {
      'X-RapidAPI-Host': 'google-maps28.p.rapidapi.com',
      'X-RapidAPI-Key': '5c41b0e00fmsh909a8fa79575aafp1e7795jsna8ea2a497dd3'
    }
  };
  
  axios.request(options).then(function (response) {
    setAddress(response.data.predictions[0].description);
  }).catch(function (error) {
    console.error(error);
  });


    return (
      <div className="App" value={address} onChange={handleChange}>
      {address !== "" ? (
        <div>
          <button onClick={() => setName(address)}>
            <h2>
            {address}
          </h2>
          </button>
        </div>
      ) : (
        <div/>
      )}
    </div>
  );
}


/* <div>
      <div value={address} onChange={handleChange} />
      {({getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input> {getInputProps({
            placeHolder: "Enter Address...",
          })} 
          </input>
          <div>
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion => {
              const style = suggestion.active ?
              {background: "#a83232", cursor: "pointer"} :
              {background: "#ffffff", cursor: "pointer"}

              return (
                <div {...getSuggestionItemProps(suggestion, {style})}>
                  {suggestion.description}
                </div>
              )
            }))}
          </div>
        </div>
      )}

    </div>
  } else {
    return <div></div>
  }

      
    ) 
} */