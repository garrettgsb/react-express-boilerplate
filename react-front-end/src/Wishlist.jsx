import React from "react";
import WishlistItem from "./WishlistItem";
import { getUserById, getWishlistPlants } from "./helpers/selectors";

export default function Wishlist({ users, userId, wishlist }) {
  console.log('WISHLIST', wishlist);

  const user = getUserById(users, userId);
  const plants = wishlist && getWishlistPlants(wishlist, userId);

  const parsedPlants = plants && plants.map(plant =>
    <WishlistItem
      key={plant.id}
      id={plant.id}
      scientificName={plant.scientific_name}
      commonName={plant.common_name}
      photo={plant.photo}
      description={plant.description}
      difficulty={plant.difficulty_level}
    />
  );

  if (!user) {
    return (
      <h2>
        Please login to view wishlist.
      </h2>
    )
  } else {
    return (
      <>
        <h1>
          My Wishlist Plants
        </h1>
        <h2>
          User: {user && user.name}
        </h2>
        <main className="container">
          {parsedPlants}
        </main>
      </>
    );
  }
}