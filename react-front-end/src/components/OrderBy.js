import React, { useEffect } from "react";

export default function OrderBy(props) {
  const { state, setState } = props;
  // let day2 = new Date(Date.now() + 20000000000);
  function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }
  function monthsLeft(warranty) {
    return (
      warranty.duration_in_months -
      monthDiff(
        new Date(parseInt(warranty.start_date, 10)),
        new Date(Date.now())
      )
    );
  }
  function compareDateNewest(a, b) {
    if (parseInt(a.start_date, 10) > parseInt(b.start_date, 10)) return -1;
    if (parseInt(b.start_date, 10) > parseInt(a.start_date, 10)) return 1;

    return 0;
  }
  function compareDateOldest(a, b) {
    if (parseInt(a.start_date, 10) > parseInt(b.start_date, 10)) return 1;
    if (parseInt(b.start_date, 10) > parseInt(a.start_date, 10)) return -1;

    return 0;
  }
  function compareMonthsLeftSmallest(a, b) {
    if (monthsLeft(a) > monthsLeft(b)) return 1;
    if (monthsLeft(b) > monthsLeft(a)) return -1;

    return 0;
  }
  function compareMonthsLeftLargest(a, b) {
    if (monthsLeft(a) > monthsLeft(b)) return -1;
    if (monthsLeft(b) > monthsLeft(a)) return 1;

    return 0;
  }

  // const sorted = state.displayedWarranties.sort(compareDateNewest);
  // console.log(sorted);

  useEffect(() => {
    let sorted;
    switch (state.orderBy) {
      case "Newest":
        sorted = state.displayedWarranties.sort(compareDateNewest);
        break;
      case "Oldest":
        sorted = state.displayedWarranties.sort(compareDateOldest);
        break;
      case `Months left ↑`:
        sorted = state.displayedWarranties.sort(compareMonthsLeftSmallest);
        break;
      case `Months left ↓`:
        sorted = state.displayedWarranties.sort(compareMonthsLeftLargest);
        break;
      default:
    }

    setState((state) => ({
      ...state,
      displayedWarranties: sorted,
    }));
  }, [state.orderBy]);

  return (
    <div>
      <label>Order By: </label>
      <select
        value={state.orderBy}
        onChange={(event) =>
          setState({ ...state, orderBy: event.target.value })
        }
      >
        <option> Newest </option>
        <option> Oldest </option>
        <option> Months left ↑</option>
        <option> Months left ↓</option>
      </select>
    </div>
  );
}
