import { createAction } from "@reduxjs/toolkit";
import { Listing } from "./index";

export const createListing = createAction<Listing>("listings/create");
export const removeListing = createAction<number>("listings/remove");
