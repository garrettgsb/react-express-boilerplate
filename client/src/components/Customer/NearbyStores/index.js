import './styles.scss'
import Distance from "./Distance"
import StoresGrid from "./StoresGrid"

function NearbyStores() {
  return(
    <>
    <h3>Nearby Stores</h3>
    <Distance />
    <StoresGrid />
    </>
  )
}

export default NearbyStores