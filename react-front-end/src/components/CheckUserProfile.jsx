import { useParams } from "react-router-dom";
import UserCard from "./UserCard";

const UserProfile = (props) => {
  const params = useParams();

  if(!props.matchedUsers) {
    return null;
  }
  
  const matchedUser = props.matchedUsers.find(user => {
    return user.id.toString() === params.id
  })

  if(!matchedUser){
    return null
  }

  return (
    <section className="user-card-container w-full place-content-center">
    <div className="keen-tinder-card w-full rounded-xl drop-shadow-2xl">
      {}
      <UserCard
        key={matchedUser.id}
        id={matchedUser.id}
        name={matchedUser.name}
        age={matchedUser.age}
        bio={matchedUser.bio}
        education={matchedUser.education}
        occupation={matchedUser.occupation}
        location={matchedUser.location}
        goal={matchedUser.dating_goal}
        drinks={matchedUser.drink}
        exercises={matchedUser.exercises}
        gender={matchedUser.value}
        height={matchedUser.height_in_cm}
        isActive={matchedUser.is_active}
        photos={matchedUser.photos}
      />
    </div>
    </section>
  )
}

export default UserProfile;