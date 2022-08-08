import UserCard from "./UserCard";

// Hook credit to @3DJakob on github 
import TinderCard from 'react-tinder-card';

const UserCardContainer = (props) => {

  // Helper to decide what happens when swiped left or right
  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  };

  // Helper to decide what to do after cards left
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  };

  // Map over users and render profile cards
  const userCards = props.users?.map((user) => {
    return (
      <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']} className="keen-tinder-card w-1/3">
        <UserCard 
          key={user.id}
          id={user.id}
          name={user.name}
          age={user.age}
          bio={user.bio}
          education={user.education}
          occupation={user.occupation}
          location={user.location}
          goal={user.goal}
          drinks={user.drinks}
          exercises={user.exercises}
          gender={user.gender}
          height={user.height_in_cm}
          isActive={user.is_active}
          photos={user.photos}
        />
      </TinderCard>
    )
  });

  return (
      <section className="user-card-container border-8 border-red-500 w-full h-screen place-content-center p-5">
        {userCards ? userCards : "Loading" }
      </section>
  );
};

export default UserCardContainer;