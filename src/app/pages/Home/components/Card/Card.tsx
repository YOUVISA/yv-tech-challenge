import Image, {type StaticImageData} from 'next/image';
import React, {type ReactNode} from 'react';

import styles from './style.module.scss';

type CardProps = {
	imageSrc: StaticImageData;
	imageAlt: string;
	planTitle: string;
	subtitle: string;
	children: ReactNode;
};

export default function Card({
	planTitle,
	subtitle,
	imageSrc,
	imageAlt,
	children,
}: CardProps) {
	return (
		<div className={styles.card}>
			<Image src={imageSrc} alt={imageAlt} width={125} height={125} />

			<h3>{planTitle}</h3>
			<p className={styles.subtitle}>{subtitle}</p>

			<div className={styles.card__benefits}>{children}</div>

			<button className={styles.engage__button}>Contratar</button>
		</div>
	);
}
