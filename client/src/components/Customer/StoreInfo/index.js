import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { appContext } from '../../appContext';
import './styles.scss'

export default function StoreInfo() {
  const params = useParams();
  const {state} = useContext(appContext)
 
  const storeData = state.stores[params.storeId-1]
  
  return(
    <>
    <div className='store-info-container'>
      <div>
        <h3>{storeData.name}</h3>
        <p>{"store description here"}</p>
      </div>
      <img src={storeData.image} alt={storeData.name} />
    </div>
    </>
  )
}