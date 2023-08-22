'use client';

import React, {type ReactNode, useState} from 'react';

import {motion} from 'framer-motion';

import styles from './style.module.scss';
import Image, {type StaticImageData} from 'next/image';

import {AiOutlineCheck, AiOutlineClose} from 'react-icons/ai';

import CardImage from '../../components/Navbar/credit-card.png';

// Icons
import SmallStore from './small-store.png';
import BigStore from './big-store.png';
import NationalTravel from './national-travel.png';
import InternationalTravel from './international-travel.png';
import Zen from './zen.png';
import Game from './game.png';

enum Category {
	COMERCIO = 'Comércio',
	VIAGENS = 'Viagens',
	USO_PESSOAL = 'Uso pessoal',
}

enum SubCategoriesEnum {
	PEQUENO = 'Pequeno',
	GRANDE = 'Grande',
	NACIONAIS = 'Nacionais',
	INTERNACIONAIS = 'Internacionais',
	LAZER = 'Lazer',
	JOGOS = 'Jogos',
}

type SubCategories =
  | 'Pequeno'
  | 'Grande'
  | 'Nacionais'
  | 'Internacionais'
  | 'Lazer'
  | 'Jogos';

type SubCategoryKeys = 'comercio' | 'viagens' | 'uso_pessoal';

const categoriesValues = {
	comercio: ['Pequeno', 'Grande'],
	viagens: ['Nacionais', 'Internacionais'],
	uso_pessoal: ['Lazer', 'Jogos'],
};

type CategorySquareProps = {
	selectedCategory: Category;
	handleCategoryClick: (category: Category) => void;
	title: string;
};

export default function Home() {
	const options = [
		{value: 'Comércio', label: 'Comércio'},
		{value: 'Viagens', label: 'Viagens'},
		{value: 'Uso Pessoal', label: 'Vanilla'},
	];

	const [selectedCategory, setSelectedCategory] = useState<Category>(Category.COMERCIO);
	const [subCategoriesToDisplay, setSubCategoriesToDisplay] = useState<
	string[]
	>(['Pequeno', 'Grande']);

	const [selectedSubCategory, setSelectedSubCategory]
    = useState<SubCategories>('Pequeno');

	function handleCategoryClick(category: Category): void {
		if (category === Category.COMERCIO) {
			setSelectedCategory(Category.COMERCIO);
			setSubCategoriesToDisplay(categoriesValues.comercio);
		} else if (category === Category.VIAGENS) {
			setSelectedCategory(Category.VIAGENS);
			setSubCategoriesToDisplay(categoriesValues.viagens);
		} else if (category === Category.USO_PESSOAL) {
			setSelectedCategory(Category.USO_PESSOAL);
			setSubCategoriesToDisplay(categoriesValues.uso_pessoal);
		}
	}

	function handleSubCategoryClick(subCategory: string) {
		setSelectedSubCategory(subCategory);
	}

	return (
		<div className={styles.container}>
			<motion.div
				initial={{y: 1000, opacity: 0}}
				animate={{y: 0, opacity: 1}}
				transition={{duration: 0.8}}
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					width: '90%',
				}}
			>
				<section id='card-offers' className={styles.title__container}>
					<h2>
            Cartões para todos os <span>gostos</span>
					</h2>
				</section>

				<section className={styles.categories__container}>
					<div
						className={`${styles.categories__item} ${
							selectedCategory === Category.COMERCIO
								? styles.categories__item_selected
								: ''
						}`}
						onClick={() => {
							handleCategoryClick(Category.COMERCIO);
						}}
					>
						<p>Comércio</p>
					</div>

					<div
						className={`${styles.categories__item} ${
							selectedCategory === Category.VIAGENS
								? styles.categories__item_selected
								: ''
						}`}
						onClick={() => {
							handleCategoryClick(Category.VIAGENS);
						}}
					>
						<p>Viagens</p>
					</div>

					<div
						className={`${styles.categories__item} ${
							selectedCategory === Category.USO_PESSOAL
								? styles.categories__item_selected
								: ''
						}`}
						onClick={() => {
							handleCategoryClick(Category.USO_PESSOAL);
						}}
					>
						<p>Uso Pessoal</p>
					</div>
				</section>

				{subCategoriesToDisplay?.length > 0 && (
					<motion.div
						initial={{y: 100}}
						animate={{y: 0}}
						transition={{duration: 0.5}}
					>
						<section className={styles.categories__container}>
							{subCategoriesToDisplay.map((subCat, index) => (
								<div
									className={`${styles.categories__item} ${
										selectedSubCategory === subCat
											? styles.categories__item_selected
											: ''
									}`}
									key={subCat + index}
									onClick={() => {
										handleSubCategoryClick(subCat);
									}}
								>
									<p>{subCat}</p>
								</div>
							))}
						</section>
					</motion.div>
				)}

				<div className={styles.cards__container}>
					<div className={styles.price__card}>
						{selectedSubCategory === 'Pequeno' && (
							<Card
								planTitle='Plano Basis'
								subtitle='Para pequenos négocios'
								imageSrc={SmallStore}
								imageAlt='Small store icon'
							>
								<BenefitItem benefic text='Taxas Competitivas' />
								<BenefitItem benefic text='Limite de Crédito Acessível' />
								<BenefitItem text='Programa de Recompensas Personalizado' />
								<BenefitItem text='Suporte ao Cliente Especializado' />
								<BenefitItem text='Linhas de Crédito Generosas' />
								<BenefitItem text='Programa de Recompensas Premium' />
								<BenefitItem text='Soluções de Gerenciamento Financeiro Avançadas' />
								<BenefitItem text='Atendimento Prioritário' />
								<BenefitItem text='Soluções Personalizadas' />
							</Card>
						)}

						{selectedSubCategory === 'Grande' && (
							<Card
								planTitle='Plano Enterprise'
								subtitle='Para comércios de grande porte'
								imageSrc={BigStore}
								imageAlt='Small store icon'
							>
								<BenefitItem benefic text='Taxas Competitivas' />
								<BenefitItem benefic text='Limite de Crédito Acessível' />
								<BenefitItem
									benefic
									text='Programa de Recompensas Personalizado'
								/>
								<BenefitItem benefic text='Suporte ao Cliente Especializado' />
								<BenefitItem benefic text='Linhas de Crédito Generosas' />
								<BenefitItem benefic text='Programa de Recompensas Premium' />
								<BenefitItem
									benefic
									text='Soluções de Gerenciamento Financeiro Avançadas'
								/>
								<BenefitItem benefic text='Atendimento Prioritário' />
								<BenefitItem benefic text='Soluções Personalizadas' />
							</Card>
						)}

						{selectedSubCategory === 'Nacionais' && (
							<Card
								planTitle='Plano Homeland'
								subtitle='Para conhecer as maravilhas nacionais'
								imageSrc={NationalTravel}
								imageAlt='Small store icon'
							>
								<BenefitItem benefic text='Milhas ou Pontos para Passagens Aéreas Nacionais' />
								<BenefitItem benefic text='Descontos em Hotéis e Alojamento' />
								<BenefitItem benefic text='Seguro de Viagem Nacional' />
								<BenefitItem benefic text='Acesso a Salas VIP em Aeroportos Nacionais' />
								<BenefitItem text='Assistência de Viagem 24/7' />
								<BenefitItem text='Programa de Benefícios para Viagens' />
							</Card>
						)}

						{selectedSubCategory === 'Internacionais' && (
							<Card
								planTitle='Plano Beyond'
								subtitle='Para aventurar-se além'
								imageSrc={InternationalTravel}
								imageAlt='Small store icon'
							>
								<BenefitItem benefic text='Milhas ou Pontos para Passagens Aéreas Nacionais' />
								<BenefitItem benefic text='Descontos em Hotéis e Alojamento' />
								<BenefitItem benefic text='Seguro de Viagem Nacional' />
								<BenefitItem benefic text='Acesso a Salas VIP em Aeroportos Nacionais' />
								<BenefitItem benefic text='Assistência de Viagem 24/7' />
								<BenefitItem benefic text='Isenção de Taxas de Conversão de Moeda' />
								<BenefitItem benefic text='Programa de Benefícios para Viagens' />
							</Card>
						)}

						{selectedSubCategory === 'Lazer' && (
							<Card
								planTitle='Plano Zen'
								subtitle='Para curtir a vida no seu ritmo'
								imageSrc={Zen}
								imageAlt='Small store icon'
							>
								<BenefitItem benefic text='Descontos exclusivos em salas de cinema' />
								<BenefitItem benefic text='Descontos exclusivos em parques de diversões' />
								<BenefitItem benefic text='Cashback para compras online' />
								<BenefitItem benefic text='Desconto na assinatura do Spotify e Deezer' />
								<BenefitItem benefic text='Desconto na compra de ingressos para shows' />

							</Card>
						)}

						{selectedSubCategory === 'Jogos' && (
							<Card
								planTitle='Plano XS9'
								subtitle='Para aproveitar tudo que o mundo dos games tem a oferecer'
								imageSrc={Game}
								imageAlt='Small store icon'
							>
								<BenefitItem benefic text='Descontos em Jogos e Consoles' />
								<BenefitItem benefic text='Recompensas em Plataformas de Jogos' />
								<BenefitItem benefic text='Desconto no XBOX Gamepass' />
								<BenefitItem benefic text='1 Jogo grátis mensalmente à sua escolha' />

							</Card>
						)}
					</div>
				</div>
			</motion.div>
		</div>
	);
}

type CardProps = {
	imageSrc: StaticImageData;
	imageAlt: string;
	planTitle: string;
	subtitle: string;
	children: ReactNode;
};

function Card({
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

type BenefitItemProps = {
	benefic?: boolean;
	text: string;
};

function BenefitItem({benefic = false, text}: BenefitItemProps) {
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
