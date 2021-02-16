import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useContext } from 'react';
import { filterMenuItems } from '../../../helpers/selectors';
import { appContext } from '../../appContext';
import './styles.scss'

export default function Menu() {

  const {state} = useContext(appContext) 

  console.log('menu is from store:', state.menuItems[0].store_id)
  
  return(
    Object.entries(filterMenuItems(state.menuItems)
    ).map(([key, value]) => {
      return(
        <>
        <div>
          {key}
        </div>
        <div className='category-container'>
        <GridList style={{flexWrap: 'nowrap'}} className='menuList' cols={2.5}>
          {value.map((tile) => (
            <GridListTile key={tile.id}>
              <img src={tile.image} alt={tile.name} />
              <GridListTileBar className='titleBar'
                title={tile.name}
                actionIcon={
                  <IconButton aria-label={`star ${tile.title}`}>
                    <StarBorderIcon className='title' />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
      </>
      )
    })  

  )
}