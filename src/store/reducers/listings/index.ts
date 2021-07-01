import { createReducer } from "@reduxjs/toolkit";
import { createListing, removeListing } from "./actions";

export interface Listing {
  id: string;
  url: string;
}

export interface ListingsState {
  byId: {
    [x: string]: Listing;
  };
  order: Array<string | number>;
}

const initialState = {
  byId: {
    "1": {
      id: "1",
      url: "https://google.com",
    },
  },
  order: ["1"],
} as ListingsState;

export const listingsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createListing, (state, action) => {
      console.log("create Listing");
      state.order.push(action.payload.id);

      state.byId[action.payload.id] = action.payload;

      return state;
    })
    .addCase(removeListing, (state, action) => {
      state.order.filter((id) => id !== action.payload);

      delete state.byId[action.payload];

      return state;
    });
});
