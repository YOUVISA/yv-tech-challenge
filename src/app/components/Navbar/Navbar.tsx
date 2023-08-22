import styles from './style.module.scss';

import Brand from '../Brand/Brand';

export default function Navbar() {
	return (
		<nav className={styles.navbarContainer}>
			<Brand />

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

