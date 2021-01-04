import { atom } from "recoil";

export const userSelectedState = atom({
  key: "userSelectedState", 
  default: null,
});


export const userPageState = atom({
    key: "userPageState", 
    default: 1
  });
  