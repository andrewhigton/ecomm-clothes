import React from 'react';
import './homepage.styles.scss'; 
import Directory from '../../components/directory/directory.component';
// import MenuItem from '../../components/menu-item/menu-item.component';
//needed - directory and menuitem
const HomePage = () => {
	//only use render when elements in a component need to update 
	return (
		<div className='homepage'>
			<Directory />
		</div>
		)
	}

export default HomePage;