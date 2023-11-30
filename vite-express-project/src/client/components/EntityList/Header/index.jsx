import { SortOptions } from './SortOptions';

export const Header = ({ title }) => {
  return (
    <>
      {/* to override root's bottom padding */}
      <style>
      {`
        #root {
          padding-bottom: 0 !important;
        }
      `}
      </style>
      <header 
        id="entity-list-header"
        className="entity-list-header flex justify-between items-center p-6"
      >
        <h1
          id="entity-list-title"
          className="font-subHeading text-lg font-semibold leading-6 text-accent"
        >
          {title} in your area
        </h1>
        <aside>
          <SortOptions />
        </aside>
      </header>
    </>
  );
};
