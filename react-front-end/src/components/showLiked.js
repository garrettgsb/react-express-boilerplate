import React, { useEffect } from "react";
import "./showLiked.css";
import { useState, Component } from "react"; 
import ClearIcon from '@material-ui/icons/Clear';
import { DataGrid } from '@material-ui/data-grid';
import Axios from "axios";

const columns = [
  {
    field: 'gitavatar',
    headerName: 'Avatar',
    renderCell: (params) => (
      <img id="row-image" src={`${params.value}`} alt="nothing"></img>
    )
  },
  // { field: 'id'},
  // { field: 'user_id'},


  {
    field: 'repoowner',
    headerName: 'Owner',
    width: 130,
  },
  { field: 'reponame', headerName: 'Repository', width: 130 },
  { field: 'repolanguage', headerName: 'Language', width: 130 },

];


export default function ShowLiked(props) {

  const [state, setState] = useState({favouritesData:[{"id": 1, "user_id": 1, "reponame": "hi", "repolanguage": "hi", "repodescription": "hi", "gitavatar":"hi"}]});
  
  useEffect(() => {
    Axios.get('http://localhost:8081/favourites', {params: {
      userId:localStorage.getItem('username')
  }})
      .then(res => setState({favouritesData: res.data}));
  }, [])

  // const getFavourites = () => {
  //   return Axios.get('http://localhost:8081/favourites')
  //     .then(res => setState({favouritesData: res.data}));
  // }

  return (
    // <div className="liked">
    //   <h1>My favorite</h1>
    //   <button
    //     className="close-btn"
    //     onClick={() => {
    //       props.toMain();
    //     }}
    //   >
    //     <ClearIcon></ClearIcon>
    //   </button>
    //   <button onClick={getState}></button>
      
      
    // {/* <div>{state.favouritesData[1].reponame}</div> */}
    // </div>
    <div className="liked">
       <button
        className="close-btn"
        onClick={() => {
          props.toMain();
        }}
      >
        <ClearIcon></ClearIcon>
      </button>
    <div id="data-grid">
    <h1>My favorite</h1>
    <DataGrid
        columns={columns}
        rows={state.favouritesData}
      />
    </div>
    </div>
  );
}
