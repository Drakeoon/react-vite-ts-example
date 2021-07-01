import React from "react";

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
  const randomId = Math.random() * 100000;

  const listing = {
    id: `${randomId}`,
    url: "https://google.com",
  };

  const listings = useAppSelector((state) =>
    state.listings.order.map((id) => state.listings.byId[id])
  );

  const dispatch = useAppDispatch();

  const handleCreateClick = () => dispatch(createListing(listing));

  return (
    <div className="App">
      <h1>Hello!</h1>

      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}

      <button onClick={handleCreateClick}>Create listing</button>
    </div>
  );
}

export default App;
