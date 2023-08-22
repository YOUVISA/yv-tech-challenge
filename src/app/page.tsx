import React from 'react';
import Navbar from './components/Navbar/Navbar';

import './global.scss';
import styles from './style.module.scss';

import Home from './pages/Home/page';

export default function page() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main className={styles.main}>
				<Home />
			</main>
		</>
	);
}

