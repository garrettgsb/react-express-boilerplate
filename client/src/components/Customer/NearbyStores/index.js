import './styles.scss'
import Distance from "./Distance"
import StoresGrid from "./StoresGrid"
import { useState } from 'react'

export default function NearbyStores() {

  //distance state for getting nearby stores
  const [distance, setDistance] = useState(10)

 return(
    <div className='nearby-stores-container'>
      <div className='nearby-stores-header'>
    <h3>Nearby Stores</h3>
    <Distance setDistance={setDistance}/>
      </div>
    <StoresGrid distance={distance}/>
    </div>
  )
}