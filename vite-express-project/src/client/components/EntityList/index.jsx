import { useLocation } from 'react-router-dom';
import { EntityContextProvider } from './EntityListContext';
import { EntityTable } from './EntityTable';
import { TITLE_BY_URL } from './constants';

export const EntityList = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitPath = pathname.split("/");
  const url = splitPath[splitPath.length - 1];
  const title = TITLE_BY_URL[url];

  return (
    <EntityContextProvider url={url}>
      <EntityTable title={title} url={url} />
    </EntityContextProvider>
  );
}