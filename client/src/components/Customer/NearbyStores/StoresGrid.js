import { useHistory } from 'react-router-dom'
import { useContext } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { appContext } from '../../appContext';
import { filterStoresByDistance } from '../../../helpers/selectors';

function StoresGrid(props) {
  const history = useHistory();
  const {state, setStore} = useContext(appContext)
  
  const onClick = (id) => {
    setStore(id)
     history.push(`/stores/${id}/menu`)
  }
  
  return(
    <div>
    <GridList cellHeight={180} className='gridList'>
      {filterStoresByDistance(state.stores, props.distance).map((store) => (
        <GridListTile key={store.id} onClick={() => onClick(store.id)}>
          <img src={store.image} alt={store.name} />
          <GridListTileBar
            title={store.name}
            subtitle={<span>"Description goes here"</span>}
          />
        </GridListTile>
      ))}
    </GridList>
  </div>
  )
}

export default StoresGrid