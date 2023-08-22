import React from 'react';

import styles from './styles.module.scss';

import HeroSectionLogo from './assets/credit-card.png';
import Brand from './assets/logo.svg';
import Image, {type StaticImageData} from 'next/image';

export default function HeroSection() {
	return (
		<div id='hero-section' className={styles.hero__container}>
			<section className={styles.hero__info}>
				<h1 className={styles.hero__title}>Cartões para todos os gostos</h1>
				<p className={styles.hero__text}>Procura soluções de crédito personalizado?</p>

				<a href='#card-offers'><button className={styles.button}>Conheça nossos planos</button></a>
			</section>

			<section className={styles.hero__logo}>
				<Image src={Brand as StaticImageData} alt='Logo' width={500} height={500} priority unoptimized />
			</section>

		</div>
	);
}
