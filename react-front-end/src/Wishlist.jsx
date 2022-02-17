import React from "react";
import WishlistItem from "./WishlistItem";
import { getUserById } from "./helpers/selectors";

export default function Wishlist({ users, userId, wishlist }) {

  // console.log('users', users)
  // console.log('userId', userId)
  console.log('wishlist', wishlist);

  const user = getUserById(users, userId);
  // const plants = getWishlistPlants(wishlist, userId);

  // const parsedPlants = plants.map(plant =>
  //   <WishlistItem
  //     key={plant.id}
  //     id={plant.id}
  //     scientificName={plant.scientific_name}
  //     commonName={plant.common_name}
  //     photo={plant.photo}
  //     description={plant.description}
  //     nickname={plant.nickname}
  //   />
  // );

  return (
    <>
      <h2>
        My Wishlist Plants.
        Name: {user && user.name}
      </h2>
      <main className="container">
        {/* {parsedPlants} */}
      </main>
    </>
  );
}