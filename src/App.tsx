import React, { useEffect } from "react";
import "./App.css";
import { createListing } from "store/actions";
import { Listing } from "store/reducers/listings";
import { useAppDispatch, useAppSelector } from "hooks";

interface ListingCardProps {
  listing: Listing;
}

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <div>
      <div>{listing.id}</div>

      <a href={listing.url}>Click me</a>
    </div>
  );
};

function App() {
  const listing = {
    id: "123123",
    url: "https://google.com",
  };

  const listings = useAppSelector((state) =>
    state.listings.order.map((id) => state.listings.byId[id])
  );

  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <h1>Hello!</h1>

      {listings.map((listing) => (
        <ListingCard listing={listing} />
      ))}
      <button onClick={() => dispatch(createListing(listing))}>
        create listing
      </button>
    </div>
  );
}

export default App;
