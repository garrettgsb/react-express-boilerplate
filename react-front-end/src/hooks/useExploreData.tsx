import { useEffect, useReducer } from "react";
import styled from 'styled-components';
import axios from "axios";

export default function useExploreData() {

  useEffect(() => {
  
    let apiSocket;
    Promise.all([
      axios.get(`/api/days`),
    ]).then((all) => {
      });
  });
};