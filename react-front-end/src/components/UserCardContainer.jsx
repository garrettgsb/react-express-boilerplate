import UserCard from "./UserCard";
import NoUsersLeft from './NoUsersLeft';

// Hook credit to @3DJakob on github 
import TinderCard from 'react-tinder-card';

const UserCardContainer = (props) => {

  // Helper to decide what to do after cards left
  const onCardLeftScreen = (id) => {
    console.log(id + ' left the screen')
  };

  // Helper to decide what happens when swiped left or right
  const onSwipe = (direction, id) => {
    if (direction === 'right') {
      props.swipeUser(id, true);
    } else if (direction === 'left') {
      props.swipeUser(id, false);
    }
  };

  // Map over users and render profile cards
  const userCards = props.users?.map((user) => {
    return (
      <TinderCard onSwipe={(direction) => onSwipe(direction, user.id)} onCardLeftScreen={() => onCardLeftScreen(user.id)} className="keen-tinder-card w-full rounded-xl drop-shadow-2xl" key={user.id}>
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

  // Render your profile
  if (props.profile && !props.editMode) {
    return (
      <section className="user-card-container w-full place-content-center">
        <div className="keen-tinder-card w-full rounded-xl drop-shadow-2xl">
          <UserCard 
            key={props.user.id}
            id={props.user.id}
            name={props.user.name}
            age={props.user.age}
            bio={props.user.bio}
            education={props.user.education}
            occupation={props.user.occupation}
            location={props.user.location}
            goal={props.user.goal}
            drinks={props.user.drinks}
            exercises={props.user.exercises}
            gender={props.user.gender}
            height={props.user.height_in_cm}
            isActive={props.user.is_active}
            photos={props.user.photos}
            profile={props.profile}
            editMode={props.editMode}
            updateProfile={props.updateProfile}
            currentProfile={props.user}
          />
        </div>
      </section>
    );
  };
  
  console.log('usercards', userCards);
  // Render other users
  return (
      <section className="user-card-container w-full place-content-center">
        {userCards?.length > 0 
          ? userCards
          : <NoUsersLeft user={props.user}/>
        }
      </section>
  );
};

export default UserCardContainer;