import React, { useState, useEffect } from "react";

export default function CategoryFilter(props) {
  const { state, setState } = props;

  let categories = state.warranties.map((warranty) => {
    return warranty.item_category;
  });
  let filteredCategories = categories.filter(
    (category, index) => categories.indexOf(category) === index
  );
  let categoryOptions = filteredCategories.map((category, index) => {
    return <option key={index}>{category}</option>;
  });

  useEffect(() => {
    const filteredResult = state.searchResult.filter(({ item_category }) => {
      if (state.categoryFilter === "All") {
        return true;
      }
      return item_category === state.categoryFilter;
    });

    setState((state) => ({
      ...state,
      displayedWarranties: filteredResult,
    }));
  }, [state.categoryFilter]);

  return (
    <div>
      <label>Category: </label>
      <select
        value={state.categoryFilter}
        onChange={(event) =>
          setState({ ...state, categoryFilter: event.target.value })
        }
      >
        <option> All </option>
        {categoryOptions}
      </select>
    </div>
  );
}
