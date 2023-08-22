import React from 'react';

import styles from './style.module.scss';
import Image, {type StaticImageData} from 'next/image';

import LogoImage from './credit-card.svg';

export default function Navbar() {
	return (
		<nav className={styles.navbarContainer}>
			<div className={styles.navbar__logo}>
				<Image src={LogoImage as StaticImageData} alt='Credit Card as Logo image' className={styles.navbar__logo__image} />
				<h1><a href='#' className={styles.navbar__logo__link}>Credit4Card</a></h1>
			</div>

			<div className={styles.navbar__sections}>
				<ul className={styles.navbar__links}>
					<a href='#hero-section' className={styles.list__link}><li>Sobre nós</li></a>
					<a href='#card-offers' className={styles.list__link}><li>Planos</li></a>
					<a href='#footer' className={styles.list__link}><li>Fale conosco</li></a>
				</ul>
			</div>
		</nav>
	);
}
