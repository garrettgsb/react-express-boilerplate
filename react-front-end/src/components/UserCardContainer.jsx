import UserCard from "./UserCard";

const UserCardContainer = (props) => {

  const userCards = props.users?.map((user) => {
    return (
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
    )
  })

  return (
    <section className="user-card-container flex border-8 border-red-500 w-full h-screen place-content-center p-5">
      {userCards ? userCards[0] : "Loading" }
    </section>
  );
};

export default UserCardContainer;