import React from 'react'
import { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';

export const BtnLocation = () => {

	const { map, isMapReady } = useContext(MapContext)
	const { userLocation } = useContext(PlacesContext)

	const onClick = () => { 
		if( !isMapReady ) throw new Error('Mapa no esta listo')
		if( !userLocation ) throw new Error('NO hay ubicacion de usuario')
	
		map?.flyTo({
			zoom: 14,
			center: userLocation
		})
	}

	return (
		<button 
			className='btn btn-primary' 
			style={{
				position: 'fixed',
				top: '20px',
				right: '20px',
				zIndex: 10
			}}
			onClick={ onClick }
		>Mi ubicación</button>
	)
}
