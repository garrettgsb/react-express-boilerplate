import { useParams } from 'react-router-dom';
import './styles.scss'

function StoreInfo() {
  const params = useParams();
  console.log(params.storeId)

  // call selector function using store id 

  // mock data
  const store = {
    id: 1,
    img: "https://images.unsplash.com/photo-1446226760091-cc85becf39b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    name: 'Think Coffee',
    description: 'Come on think about coffee',
  }

  return(
    <>
    <div className='store-info-container'>
      <div>
        <h3>{store.name}</h3>
        <p>{store.description}</p>
      </div>
      <img src="https://images.unsplash.com/photo-1446226760091-cc85becf39b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" alt={store.name} />
    </div>
    </>
  )
}

export default StoreInfo