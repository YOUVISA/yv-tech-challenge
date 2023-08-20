import React from 'react';
import Navbar from './components/Navbar/Navbar';

import './global.scss';

export default function page() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<h1>Hello</h1>
			</main>
		</>
	);
}

