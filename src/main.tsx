
import React from 'react'

import ReactDOM from 'react-dom/client'
import { MapsApp } from './MapsApp'
import './styles.css'
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoibWF4aXBwYWNoZWNvIiwiYSI6ImNsYmJibXBmNjBoejAzcG50endsOGhkMXAifQ.-0ku5ZVSeiD5KkDjVymnDg';

if( !navigator.geolocation ) {
  alert('Tu navegador no tiene opción de Geolocation');
  throw new Error('Tu navegador no tiene opción de Geolocator')
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
)
