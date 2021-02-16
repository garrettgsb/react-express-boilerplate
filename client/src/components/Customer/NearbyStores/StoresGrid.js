import { useHistory } from 'react-router-dom'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

function StoresGrid(props) {
  const history = useHistory();
    
  const tileData = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1446226760091-cc85becf39b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      title: 'Think Coffee',
      author: 'Come on think about coffee',
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1446226760091-cc85becf39b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      title: 'Think Coffee',
      author: 'Come on think about coffee',
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1446226760091-cc85becf39b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      title: 'Think Coffee',
      author: 'Come on think about coffee',
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1446226760091-cc85becf39b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      title: 'Think Coffee',
      author: 'Come on think about coffee',
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1446226760091-cc85becf39b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      title: 'Think Coffee',
      author: 'Come on think about coffee',
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1446226760091-cc85becf39b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      title: 'Think Coffee',
      author: 'Come on think about coffee',
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1446226760091-cc85becf39b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      title: 'Think Coffee',
      author: 'Come on think about coffee',
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1446226760091-cc85becf39b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      title: 'Think Coffee',
      author: 'Come on think about coffee',
    },
    {
      id: 9,
      img: "https://images.unsplash.com/photo-1446226760091-cc85becf39b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      title: 'Think Coffee',
      author: 'Come on think about coffee',
    }
  ]

  const onClick = (id) => {
    props.setStore(id)
     history.push(`/stores/${id}/menu`)
  }

  return(
    <div>
    <GridList cellHeight={180} className='gridList'>
      {props.stores.map((store) => (
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