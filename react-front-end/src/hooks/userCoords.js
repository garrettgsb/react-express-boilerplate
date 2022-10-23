import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userCoordinatesAtom = atom({
  key: "userCoordinatesAtom",
  default: { lat: 43.6532, lng: -79.3832 },
  effects_UNSTABLE: [persistAtom],
});


