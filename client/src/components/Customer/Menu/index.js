import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { filterMenuItems } from '../../../helpers/selectors';


import './styles.scss'

export default function Menu(props) {

  console.log('menu is from store:', props.menuItems[0].store_id)
  
    // mock data
  const menu = {
    coffee: [
      {
        id: 1,
        name: 'latte',
        description: 'with milk',
        price: '$2:30',
        image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
      },
      {
        id: 2,
        name: 'latte',
        description: 'with milk',
        price: '$2:30',
        image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
      },
      {
        id: 3,
        name: 'latte',
        description: 'with milk',
        price: '$2:30',
        image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
      },
      {
        id: 4,
        name: 'latte',
        description: 'with milk',
        price: '$2:30',
        image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
      },
      {
        id: 5,
        name: 'latte',
        description: 'with milk',
        price: '$2:30',
        image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
      }
    ],
    tea: [
      {
        id: 6,
        name: 'london fog',
        description: 'LDN',
        price: '$2.15',
        image: 'https://images.unsplash.com/photo-1560106426-c90ed1729664?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80'
      },
      {
        id: 7,
        name: 'london fog',
        description: 'LDN',
        price: '$2.15',
        image: 'https://images.unsplash.com/photo-1560106426-c90ed1729664?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80'
      },
      {
        id: 8,
        name: 'london fog',
        description: 'LDN',
        price: '$2.15',
        image: 'https://images.unsplash.com/photo-1560106426-c90ed1729664?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80'
      },
      {
        id: 9,
        name: 'london fog',
        description: 'LDN',
        price: '$2.15',
        image: 'https://images.unsplash.com/photo-1560106426-c90ed1729664?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80'
      },
      {
        id: 10,
        name: 'london fog',
        description: 'LDN',
        price: '$2.15',
        image: 'https://images.unsplash.com/photo-1560106426-c90ed1729664?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80'
      }
     
    ]
  }

  return(
    Object.entries(filterMenuItems(props.menuItems)
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