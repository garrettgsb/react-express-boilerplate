import React, { useState, useEffect } from "react";

export default function SearchBar(props) {
  const [value, setValue] = useState("");

  useEffect(() => {
    props.onSearch(value);
  }, [value]);

  return (
    <section className="search">
      <form
        className="search__form"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          className="radius"
          spellCheck="false"
          placeholder="Search Artists"
          name="search"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </form>
    </section>
  );
}
