import React from "react";

import { Button, Box, Grid, Text, Badge } from "@chakra-ui/react";
import { createListing } from "store/actions";
import { Listing } from "store/reducers/listings";
import { useAppDispatch, useAppSelector } from "hooks";

interface ListingCardProps {
  listing: Listing;
}

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <Box p={4} bg="gray.100" borderRadius={4}>
      <div>{listing.id}</div>

      <a href={listing.url}>Click me</a>
    </Box>
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
    <Box p={24}>
      <Box display="flex">
        <Text as="h1" fontSize="3xl">
          Hello in an example Vite app built with:
        </Text>

        <Button ml="auto" mt={4} colorScheme="teal" onClick={handleCreateClick}>
          Create listing
        </Button>
      </Box>

      <Box>
        <Badge bg="blue.100">React</Badge>
        <Badge bg="blue.100" ml={2}>
          Redux
        </Badge>
        <Badge bg="blue.100" ml={2}>
          Typescript
        </Badge>
        <Badge bg="blue.100" ml={2}>
          Vite
        </Badge>
      </Box>

      <Grid templateColumns="repeat(3, 1fr)" mt={4} gap={6}>
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </Grid>
    </Box>
  );
}

export default App;
