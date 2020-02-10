import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    //what the hell is history? why do we push to it? 
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);

// import React from 'react';
// import './menu-item.styles.scss';  
// // import Directory from '../directory/directory.component'

// const MenuItem = ({ title, id, imageUrl, size }) => (
// 		// const { title, subtitle } = this.state.sections
// 		<div className={`${size} menu-item`}>
// 			<div className='background-image' 
// 			style={{
// 				backgroundImage: `url(${imageUrl})`
// 			}}
// 			/>
// 			<div className='content'>
// 				<h1 className='title'>{ title.toUpperCase() }</h1>
// 				<span className='subtitle'>SHOP NOW</span>
// 			</div>
// 		</div>
// 		)	
// export default MenuItem;

