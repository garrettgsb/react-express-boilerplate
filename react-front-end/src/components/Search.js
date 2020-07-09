import React, { Fragment, useEffect, useRef } from "react";

import SearchBar from "./SearchBar";

export default function Search(props) {
  const { state, setState } = props;

  const prev = useRef("");

  useEffect(() => {
    if (prev.current === "" && state.term === "") return;

    setState((prev) => ({
      ...prev,
      loading: true,
    }));

    prev.current = state.term;
    const result = state.warranties.filter(({ item_name }) =>
      item_name.includes(state.term)
    );
    const filteredResult = result.filter(({ item_category }) => {
      if (state.categoryFilter === "All") {
        return true;
      }
      return item_category === state.categoryFilter;
    });

    setState((state) => ({
      ...state,
      displayedWarranties: filteredResult,
      searchResult: result,
    }));
  }, [state.term]);

  return (
    <Fragment>
      <SearchBar onSearch={(term) => setState({ ...state, term })} />
    </Fragment>
  );
}
