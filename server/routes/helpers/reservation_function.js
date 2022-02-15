
const getReservationDate = (day) => {
  const curr = new Date();
  const first = curr.getDate() - curr.getDay() + 1; // Start from Monday
  const monday = new Date(curr.setDate(first));
  let today;
  if (day === "Monday") {
    today = new Date(curr.setDate(first));
  }
  if (day === "Tuesday") {
    today = new Date(curr.setDate(monday.getDate() + 1));
  }
  if (day === "Wednesday") {
    today = new Date(curr.setDate(monday.getDate() + 2));
  }
  if (day === "Thursday") {
    today = new Date(curr.setDate(monday.getDate() + 3));
  }
  if (day === "Friday") {
    today = new Date(curr.setDate(monday.getDate() + 4));
  }
  if (day === "Saturday") {
    today = new Date(curr.setDate(monday.getDate() + 5));
  }
  if (day === "Sunday") {
    today = new Date(curr.setDate(monday.getDate() + 6));
  }

  const formatted = today.toISOString().slice(0, 10);
  return formatted;
};

console.log(getReservationDate("Friday"));