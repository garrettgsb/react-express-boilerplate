import React from "react";
import "./Application.scss";
import useApplicationData from "../hooks/useApplicationData";
import SidebarList from "./SidebarList";
import Tab from "./Tab";

export default function Application(props) {
  // Destructing custom hook
  const {
    state,
    setTab,
    setState,
    setCurrentItem,
    setWarranties,
    setRenderForm,
    addItem,
  } = useApplicationData();

  return (
    <main className="layout">
      <section className="sidebar">
        <h1 className="sidebar__lhl sidebar--centered">Warden</h1>
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <SidebarList
            tabs={state.tabs}
            tab={state.tab}
            setState={setState}
            state={state}
          />
        </nav>
      </section>
      <section className="schedule">
        <Tab
          name={state.tab}
          state={state}
          setCurrentItem={setCurrentItem}
          setWarranties={setWarranties}
          setRenderForm={setRenderForm}
          addItem={addItem}
        />
      </section>
    </main>
  );
}
