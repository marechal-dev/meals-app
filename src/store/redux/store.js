import { configureStore } from "@reduxjs/toolkit";

import { favoritesSliceReducer } from "./favorites";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesSliceReducer,
  },
});
