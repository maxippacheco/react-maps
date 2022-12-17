import { useEffect, useReducer } from 'react';
import { FC } from 'react';
import { getUserLocation } from '../../helpers';
import { PlacesContext, placesReducer } from '..';
import { searchApi } from '../../apis';
import { Feature, PlacesResponse } from '../../interfaces/places';

interface FCProps{
 children: React.ReactNode;
}

export interface PlacesState {
	isLoading: boolean;
	userLocation?: [ number, number];
	isLoadingPlaces: boolean;
	places: Feature[];
}


const PLACES_INITIAL_STATE: PlacesState = {
	isLoading: true,
	userLocation: undefined,
	isLoadingPlaces: false,
	places: []
}



export const PlacesProvider: FC<FCProps> = ({ children }) => {

	const [state, dispatch] = useReducer(placesReducer, PLACES_INITIAL_STATE)

	useEffect(() => {
		getUserLocation()
				.then( lngLat => dispatch({ type: 'setUserLocation', payload: lngLat }))
	}, []);

	const searchPlacesByTerm = async( query: string ): Promise<Feature[]> => {
		if( query.length === 0 ) {
			dispatch({ type: 'setPlaces', payload: [] })
			
			return [];
		}

		if( !state.userLocation ) throw new Error('No hay ubicación del usuario');

		dispatch({ type: 'setLoadingPlaces' });

		const resp = await searchApi.get<PlacesResponse>(`/${ query }.json`, {
			params: {
				proximity: state.userLocation.join(',')
			}
		});

		dispatch({ type: 'setPlaces', payload: resp.data.features })

		return resp.data.features;
	}
	


	return(
		<PlacesContext.Provider value={{
			...state,

			// methods
			searchPlacesByTerm
		}}>
			{ children}
		</PlacesContext.Provider>
	)
}