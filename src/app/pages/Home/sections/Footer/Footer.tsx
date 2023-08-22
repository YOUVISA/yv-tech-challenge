import React from 'react';

import styles from './style.module.scss';
import Brand from '@/app/components/Brand/Brand';
import Image, {type StaticImageData} from 'next/image';

import LogoImage from '../../../../components/Brand/assets/credit-card.svg';

export default function Footer() {
	return (
		<footer id='footer' className={styles.footer__container}>
			<div className={styles.footer__info}>
				<div className={styles.footer__brand}>
					<Image
						src={LogoImage as StaticImageData}
						alt='Credit Card as Logo image'
						className={styles.footer__logo__image}
						width={40}
						height={40}
					/>
					<h1>
						<a href='#' className={styles.footer__logo__link}>
            Credit4Card
						</a>
					</h1>
				</div>

			</div>

			<div className={styles.footer__contact}>
				<h3 className={styles.footer__subtitle}>Contato</h3>

				<p className={styles.contact__text}>Fale Conosco</p>
				<p className={styles.contact__text}>Whatsapp</p>
				<p className={styles.contact__text}>Trabalhe Conosco</p>
			</div>

			<div className={styles.footer__help}>
				<h3 className={styles.footer__subtitle}>Ajuda</h3>

				<p className={styles.contact__text}>F.A.Q</p>
				<p className={styles.contact__text}>Termo de Serviço</p>
				<p className={styles.contact__text}>Suporte</p>
			</div>

			<div className={styles.footer__newsletter}>
				<h3 className={styles.footer__subtitle}>Newsletter</h3>

				<input type='text' placeholder='Seu E-mail aqui' className={styles.newsletter__input} />
				<button className={styles.newsletter__button}>Inscrever</button>
			</div>
		</footer>
	);
}
