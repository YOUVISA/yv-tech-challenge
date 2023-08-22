
'use client';

import React, {useState} from 'react';
import Select from 'react-select';

import styles from './style.module.scss';

type OptionType = {
	value: string;
	label: string;
};

type Props = {
	options: OptionType[];
};

export default function Dropdown({options}: Props) {
	const [isOpen, setIsOpen] = useState(false);
	/* Const options = [
		{value: 'Comércio', label: 'Comércio'},
		{value: 'Viagens', label: 'Viagens'},
		{value: 'Uso Pessoal', label: 'Vanilla'},
	]; */

	const categories = ['Comércio', 'Viagens', 'Uso pessoal'];

	/* Const categories = {
		'Comércio': ['Pequeno', 'Médio', 'Grande'],
		'Viagens': ['Nacionais', 'Internacionais'],
		'Uso pessoal': ['Uso individual', 'Uso familiar'],
	}; */

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.dropdown__container}>
			<Select placeholder='Categorias' options={options} />
		</div>
	);
}
