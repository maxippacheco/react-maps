import axios from 'axios'

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
			alternatives: false,
			geometries: 'geojson',
			overview: 'simplified',
			steps: false,
			access_token: 'pk.eyJ1IjoibWF4aXBwYWNoZWNvIiwiYSI6ImNrbDZ6cmFkZjAwcDMyd3J1ZmtyczB1ejUifQ.YxynO1zNwrLS558Z4sYKcg'
    }
})


export default directionsApi;

