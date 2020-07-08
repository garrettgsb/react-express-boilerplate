import React, { useState, useEffect } from "react";
import WarrantyList from "./WarrantyList";
import CategoryFilter from "./CategoryFilter";
import Search from "./Search";
import OrderBy from "./OrderBy";
import WarrantyDashboard from "./WarrantyDashboard";

export default function Warranties(props) {
  // const warrantyItems = props.warranties.map((warranty) => {
  //   return <WarrantyListItem key={warranty.id} warranty={warranty} />;
  // {categoryFilter , setCategoryFilter , orderBy , setOrderBy} = useState
  // });
  // const [categoryFilter, setCategoryFilter] = useState();
  // const [orderBy, setOrderBy] = useState({
  //     term: "",
  //       results: [],
  //       loading: false,
  //     });
  // console.log(props.warranties);

  const [state, setState] = useState({
    term: "",
    categoryFilter: "All",
    orderBy: "Newest",
    displayedWarranties: [],
    warranties: [],
    searchResult: [],

    // loading: false,
  });
  useEffect(() => {
    setState((prev) => ({
      ...prev,
      displayedWarranties: props.warranties,
      warranties: props.warranties,
      searchResult: props.warranties,
    }));
    // console.log(state.displayedWarranties);
  }, [props.warranties]);
  // console.log("Warranties.js rerender");
  return (
    <div>
      <WarrantyDashboard warranties={state.warranties} />
      <Search state={state} setState={setState} />
      <CategoryFilter state={state} setState={setState} />
      {/* setCategoryFilter={setCategoryFilter} */}
      <OrderBy state={state} setState={setState} />

      <button onClick={(e) => props.setRenderForm(true)}>
        <i class="fa fa-plus" aria-hidden="true"></i>
      </button>
      <WarrantyList
        warranties={state.displayedWarranties}
        setCurrentItem={props.setCurrentItem}
      />
      {/* {warrantyItems} */}
      {/* {props.warranties.map((warranty) => (
        <WarrantyListItem warranty={warranty} />
      ))} */}
    </div>
  );
}
