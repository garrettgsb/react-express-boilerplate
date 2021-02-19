import { useContext } from "react";
import { useParams } from "react-router-dom";
import { appContext } from "../../appContext";
import "./styles.scss";

export default function StoreInfo() {
  const params = useParams();
  const { state } = useContext(appContext);
  
  const storeData = state.stores[params.storeId - 1];
  
  const storeInfoContainerStyle = {
    image: { 
      backgroundImage: `url(${storeData.image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    },

    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
    }
  }

  return (
    <>
      <div className="store-info-container" style={storeInfoContainerStyle.image}>
        <div className="store-name-desc" style={storeInfoContainerStyle.content}>
          <h3>{storeData.name}</h3>
          <p>{storeData.description}</p>
        </div>
      </div>
    </>
  );
}
