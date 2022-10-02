import { atom } from "recoil";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { userCoordinatesAtom } from "./getUserCoords";

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};


const userLocation = () => {

    const setUserCoords = useSetRecoilState(userCoordinatesAtom);

  
    useEffect(() => {
      const success = (pos) => {
        let crd = pos.coords;
        setUserCoords({ lat: crd.latitude, lng: crd.longitude });
      }
  
      const error = (err) => {
        console.warn(`There was an error:${err.code}, ${err.message}`)
      }
  

      return navigator.geolocation.getCurrentPosition(success, error, options);    
    }, [setUserCoords]);

  };
  
  export default userLocation;