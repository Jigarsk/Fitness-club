import React from 'react'

import Hero from '../Hero/Hero'

import Lastpage from '../Lastpage/Lastpage'
// import Login from '../Login'

import Programs from '../Programs/Programs'
import Reasons from '../Reasons/Reasons'
import Form from '../Form'




function Home(userDetails) {

	const user = userDetails.user;
	const logout = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/logout`,
			"_self"
		);
	};
	return (
	<div className='Main'>
<Hero/>
<Programs/>

<Reasons/>
<Lastpage/>
<Form/>



	</div>
	);
}

export default Home;