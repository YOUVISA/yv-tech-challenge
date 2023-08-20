import React from 'react';

import styles from './style.module.scss';
import Image from 'next/image';

import LogoImage from './credit-card.png';

export default function Navbar() {
	return (
		<nav className={styles.navbarContainer}>
			<div className={styles.navbar__logo}>
				<Image src={LogoImage} alt='Credit Card as Logo image' className={styles.navbar__logo__image} />
				<h1><a href='#' className={styles.navbar__logo__link}>Credit4Card</a></h1>
			</div>

			<div className={styles.navbar__sections}>
				<ul className={styles.navbar__links}>
					<li className={styles.list__link}>Sobre nós</li>
					<li className={styles.list__link}>Planos</li>
					<li className={styles.list__link}>Fale conosco</li>
				</ul>
			</div>
		</nav>
	);
}
