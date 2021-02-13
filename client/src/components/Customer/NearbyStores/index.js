import './styles.scss'
import Distance from "./Distance"
import StoresGrid from "./StoresGrid"

function NearbyStores() {
  return(
    <div className='nearby-stores-container'>
      <div className='nearby-stores-header'>
    <h3>Nearby Stores</h3>
    <Distance />
      </div>
    <StoresGrid />
    </div>
  )
}

export default NearbyStores