import { createSlice } from "@reduxjs/toolkit";
import hand_hero from "../public/hand_2.png";
import { colors } from "../utils/colors-styles";

const initialState = {
  palleteColor: "#be0505",
  handImage: hand_hero,
  colorsArray: [...colors],
  open: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPalleteColor: (state, action) => {
      state.palleteColor = action.payload;
    },
    setHandImage: (state, action) => {
      state.handImage = action.payload;
    },
    setColorsArray: (state, action) => {
      state.colorsArray = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setPalleteColor, setHandImage, setColorsArray, setOpen } =
  appSlice.actions;

export default appSlice.reducer;
