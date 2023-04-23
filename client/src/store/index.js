import { configureStore } from "@reduxjs/toolkit";
import planesSlice from "./planes/planesSlice"

export const store = configureStore(({
  reducer: {
    planes: planesSlice
  }
}))