import { atom } from "recoil";


const userCoordinatesAtom = atom({
  key: "userCoordinatesAtom",
  default: { lat: 43.6532, lng: -79.3832 },
});
export default userCoordinatesAtom;

