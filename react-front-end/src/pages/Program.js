import React from "react";
import { useParams } from "react-router-dom";

//Mockdata
const Programs = [
  {
    id: 1,
    user_id: 1,
    name: "Full Body",
    description: "Three workouts per week targetting all major muscle groups",
    start_date: "2022-10-01",
    end_date: "2022-11-30",
    public: true,
    author: 'Jason "Chad" Ling',
  },
  {
    id: 2,
    user_id: 1,
    name: "Bro Split",
    description: "Three workouts per week targetting all major muscle groups",
    start_date: "2022-10-01",
    end_date: "2022-11-30",
    public: true,
    author: 'Jason "Chad" Ling',
  },
  {
    id: 3,
    user_id: 1,
    name: "Upper Lower",
    description: "Three workouts per week targetting all major muscle groups",
    start_date: "2022-10-01",
    end_date: "2022-11-30",
    public: true,
    author: 'Jason "Chad" Ling',
  },
];

const programListItems = Programs.map((program) => {
  return (
    <div>

      <p>{program.name}</p>
      <p>{program.description}</p>
      <p>{program.start_date}</p>
      <p>{program.end_date}</p>

    </div>
  )
})

export default function Program() {
  const params = useParams();
  return (
    <div>
      <span>{`This is Program page for program ${params.id}`} </span>

    </div>


    )
}

// const dayListItems = days.map(day => {

//   return (

//       <DayListItem 
//           key={day.id}
//           name={day.name}
//           spots={day.spots}
//           selected={day.name === props.day}
//           setDay={props.setDay}
//       />
  
//   )
// });

// return (
//   <ul>
//       {dayListItems}
//   </ul>
// );