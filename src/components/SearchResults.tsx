import { useContext, useState } from 'react';
import { MapContext, PlacesContext } from '../context';
import { LoadingPlaces } from './';
import { Feature } from '../interfaces/places';

export const SearchResults = () => {
	
	const { places, isLoadingPlaces, userLocation } = useContext( PlacesContext );
	const { map, getRouteBetweenPoints } = useContext( MapContext );

	const [activePlaceId, setActivePlaceId ] = useState('');

	const onPlaceClicked = ( place: Feature ) => {

		const [ lng, lat ] = place.center;
		setActivePlaceId( place.id );

		map?.flyTo({
			zoom: 14,
			center: [ lng, lat ]
		});
	}

	const getRoute = ( place: Feature ) => {
		if( !userLocation ) return;
		const [ lng, lat ] = place.center;


		getRouteBetweenPoints( userLocation, [ lng, lat ]);
	}

	if( isLoadingPlaces ){
		return <LoadingPlaces />
	}

	if( places.length === 0 ){
		return <></>
	}

	return (
		<ul className="list-group mt-3">
			{
				places.map( place => (
					<li 
						key={ place.id }
						className={`list-group-item list-group-item-action pointer ${ activePlaceId === place.id ? 'active' : '' }`}
						onClick={ () => onPlaceClicked( place ) }
					>
						<h6>{ place.text_es }</h6>
						<p style={{
							fontSize: '12px'
						}}>
							{ place.place_name_es }

						</p>
						<button 
							onClick={ () => getRoute( place ) }
							className={`btn ${ activePlaceId === place.id ? 'btn-outline-light' : 'btn-outline-primary'} btn-sm`}>Direcciones</button>
					</li>
				))
			}
		</ul>
	)
}
