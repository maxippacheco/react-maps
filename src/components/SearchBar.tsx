import { ChangeEvent, useRef, useContext } from 'react';
import { PlacesContext } from '../context';
import { SearchResults } from './';

export const SearchBar = () => {

	const { searchPlacesByTerm } = useContext( PlacesContext )

	// Debounce: Ayuda a que una función no se ejecute a menos que haya pasado un tiempo después de la última llamada
	const debounceRef = useRef<NodeJS.Timeout>();

	const onQueryChanged = (event: ChangeEvent<HTMLInputElement> ) => {
		if( debounceRef.current ){
			clearTimeout( debounceRef.current )
		}

		debounceRef.current = setTimeout(() => {
			// buscar o ejecutar consulta
			searchPlacesByTerm(event.target.value)

			// console.log('debounced value: ', event.target.value);

			
		}, 350);
	}

	return (
		<div className='search-container'>
			<input 
				type="text" 
				className="form-control" 
				placeholder="Buscar lugar..." 
				onChange={ onQueryChanged }
			/>
			<SearchResults />
		</div>
	)
}
