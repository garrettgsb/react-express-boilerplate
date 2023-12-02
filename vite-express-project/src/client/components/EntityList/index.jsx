import { useLocation } from 'react-router-dom';
import { EntityContextProvider } from './EntityListContext';
import { EntityTable } from './EntityTable';
import { useFetchLikesData } from '../LikeList/likeHooks';
import { useAuth } from '../../hooks/AuthContext';

export const EntityList = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitPath = pathname.split("/");
  const url = splitPath[splitPath.length - 1];
  const { loggedInUser } = useAuth();
  const {likesData, error} = useFetchLikesData(loggedInUser.id);

  console.log("Likes data on index:", likesData);

  return (
    <EntityContextProvider url={url}>
      <EntityTable url={url} likesData={likesData} />
    </EntityContextProvider>
  );
}