import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'

  const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Wilkommen in meiner Heimat</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD_g5Dc3E8BarplIzdT0IwaCFk8uVQqsqg' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
        </GoogleMapReact>
      </div>
    </div>
  )
 export default Map;

