import { useLocation } from 'react-router-dom';
import { EntityContextProvider } from './EntityListContext';
import { EntityTable } from './EntityTable';

export const EntityList = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitPath = pathname.split("/");
  const url = splitPath[splitPath.length - 1];

  return (
    <EntityContextProvider url={url}>
      <EntityTable url={url} />
    </EntityContextProvider>
  );
}