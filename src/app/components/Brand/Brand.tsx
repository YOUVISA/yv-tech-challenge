import React from 'react';
import Image, {type StaticImageData} from 'next/image';

import LogoImage from './assets/credit-card.svg';

import styles from './style.module.scss';

export default function Brand() {
	return (
		<div className={styles.navbar__logo}>
			<Image src={LogoImage as StaticImageData} alt='Credit Card as Logo image' className={styles.navbar__logo__image} />
			<h1><a href='#' className={styles.navbar__logo__link}>Credit4Card</a></h1>
		</div>
	);
}
