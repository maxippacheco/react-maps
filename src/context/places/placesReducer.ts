import { Feature } from "../../interfaces/places";
import { PlacesState } from "./PlacesProvider";

type PlacesActionType = 
	| { type: 'setUserLocation', payload: [ number, number ] }
	| { type: 'setLoadingPlaces' }
	| { type: 'setPlaces', payload: Feature[] }	
;


export const placesReducer = ( state: PlacesState, action: PlacesActionType ): PlacesState => {  

 switch ( action.type ) {  

	case 'setUserLocation':
		return {
			...state,
			isLoading: false,
			userLocation: action.payload
		}
	
	case 'setLoadingPlaces':
		return {
			...state,
			isLoadingPlaces: true,
			places: []
		}

	case 'setPlaces':
		return {
			...state,
			isLoadingPlaces: false,
			places: action.payload
		}
	
	default:
		return state;
	}
 

}