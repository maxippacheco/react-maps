import axios from 'axios'

const searchApi = axios.create({
	baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
	params: {
		limit: 5,
		language: 'es',
		access_token: 'pk.eyJ1IjoibWF4aXBwYWNoZWNvIiwiYSI6ImNrbDZ6cmFkZjAwcDMyd3J1ZmtyczB1ejUifQ.YxynO1zNwrLS558Z4sYKcg'
	}
})

export default searchApi;