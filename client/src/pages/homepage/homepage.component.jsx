import React from 'react';
import './homepage.styles.scss'; 
import Directory from '../../components/directory/directory.component';
import styled from 'styled-components';
// import MenuItem from '../../components/menu-item/menu-item.component';
//needed - directory and menuitem

const HomePageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 80px;	
`
const HomePage = () => {
	//only use render when elements in a component need to update 
	return (
		<div className='homepage'>
			<Directory />
		</div>
		)
	}

export default HomePage;