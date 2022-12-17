import viteLogo from '../../public/vite.svg'

export const ReactLogo = () => {
	return (
		<img 
			src={ viteLogo } 
			style={{
				position: 'fixed',
				bottom: '20px',
				right: '20px',
				width: '70px'
			}}
			alt='vite-logo' />	
	)
}
