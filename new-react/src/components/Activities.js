import Activity from "./Activity";

//diff list for different cities
const activitiesList = [
  {
    name: "activity 1",
    img: "img",
    desc: "Enim nisi labore cupidatat dolore aute.",
  },
  {
    name: "activity 2",
    img: "img",
    desc: "Enim nisi labore cupidatat dolore aute.",
  },
  {
    name: "activity 3",
    img: "img",
    desc: "Enim nisi labore cupidatat dolore aute.",
  },
];

const Activities = () => {
  const activityCard = activitiesList.map((act, id) => {
    return <Activity name={act.name} desc={act.desc} />;
  });
  return (
    <div>
      <h3>{activityCard}</h3>
    </div>
  );
};

export default Activities;
