import {AiOutlineCheck, AiOutlineClose} from 'react-icons/ai';
import styles from './style.module.scss';

type BenefitItemProps = {
	benefic?: boolean;
	text: string;
};

export default function BenefitItem({benefic = false, text}: BenefitItemProps) {
	return (
		<div className={styles.benefit__box}>
			{benefic ? (
				<AiOutlineCheck size={30} color='green' />
			) : (
				<AiOutlineClose size={30} color='red' />
			)}

			<p className={styles.benefit__text}>{text}</p>
		</div>
	);
}
