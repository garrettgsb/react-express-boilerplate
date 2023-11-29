export const Header = ({ title }) => {
  return (
    <header 
      id="entity-list-header"
      className="entity-list-header flex justify-between items-center p-6"
    >
      <h1
        id="entity-list-title"
        className="font-subHeading text-lg font-semibold leading-6 text-accent hover:text-accentHover"
      >
        {title} in your area
      </h1>
      <aside>
        Sorting/filtering options will be here
      </aside>
    </header>
  );
}
