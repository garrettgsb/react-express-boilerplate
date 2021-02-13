import { useParams } from 'react-router-dom';

function StoreInfo() {
  const params = useParams();
  return(
    <h1>I am the store info for store #{params.storeId}</h1>
  )
}

export default StoreInfo