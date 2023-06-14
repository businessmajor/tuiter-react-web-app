import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
  "userName": "Stephano",
  "handle": "businessmajor",
  "image": "businessmajor.jpeg",
};

const templateTuit = {
  ...currentUser,
  "topic": "Finance",
  "time": "Just now",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
};

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: { tuits: tuits },
  reducers: {
    createTuit(state, action) {
      state.tuits.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      });
    },
  },
});

export const { createTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
