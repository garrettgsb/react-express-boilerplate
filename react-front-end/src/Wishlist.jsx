import React from "react";
import { getUserById } from "./helpers/selectors";

export default function Wishlist({users, userId}) {

  // console.log('users', users)
  // console.log('userId', userId)

  const user = getUserById(users, userId);
  // const name = user && user.name;
  // const wishlistforUser = getWishlistForUser(wishlists, userId);

  // if (plant) {
  //   const user_id = plant.user_id;
  //   user = getUserById(users, user_id);
  // }

  return (
    <h2>
      My Wishlist Plants.
      Name: {user && user.name}
    </h2>
  );
}