import React from 'react';
import NavBar from '../NavBar/NavBar';
import Button from '@mui/material/Button';
import ProductsInCar from '../ProductsInCar/ProductsInCar';
import style from './Shopping.module.css';

const productsInCar = [
	{
		id: 1,
		title: 'Remera Animal',
		unit_price: 2200,
		quantity: 5,
		category: 'Indumentaria',
		description:
			'Remera fit con la cara del futuro del Bodybuilding Manu Casanueva',
		imgUrl:
			'https://http2.mlstatic.com/D_NQ_NP_780600-MLA51811641970_102022-O.webp',
	},
	{
		id: 2,
		title: 'Remera Animal',
		unit_price: 2000,
		quantity: 3,
		category: 'Indumentaria',
		description:
			'Remera fit con la cara del futuro del Bodybuilding Manu Casanueva',
		imgUrl:
			'https://http2.mlstatic.com/D_NQ_NP_613482-MLA52418021813_112022-O.webp',
	},
	{
		id: 3,
		title: 'Remera Animal',
		unit_price: 2500,
		quantity: 1,
		category: 'Indumentaria',
		description:
			'Remera fit con la cara del futuro del Bodybuilding Manu Casanueva',
		imgUrl:
			'https://http2.mlstatic.com/D_NQ_NP_613482-MLA52418021813_112022-O.webp',
	},
];

let total = 0;
productsInCar?.forEach((product) => (total = total + product.unit_price));

const Shopping = () => {
	return (
		<div>
			<NavBar />
			<div className={style.mainContainer}>
				<div className={style.shopCartContainer}>
					<div className={style.cardsContainer}>
						{/* map productos en carrito */}
						{productsInCar?.map((product) => (
							<ProductsInCar
								key={product.id}
								id={product.id}
								title={product.title}
								price={product.unit_price}
								stock={product.quantity}
								category={product.category}
								description={product.description}
								imgUrl={product.imgUrl}
							/>
						))}
					</div>
					<div className={style.infoContainer}>
						<h1>Carrito de compras</h1>
						<div className={style.priceContainer}>
							{/* map precios */}
							{productsInCar?.map((product, i) => (
								<h2 key={i}>$ {product.unit_price} ARS</h2>
							))}
							<hr />
							<h1 className={style.total}>Total: $ {total}</h1>
						</div>
						<div className={style.buttonContainer}>
							<Button
								variant='contained'
								sx={{
									backgroundColor: '#18a0fb',
									'&:hover': {
										background: '#2785c3',
									},
								}}
							>
								Comprar
							</Button>
							<Button
								variant='outlined'
								sx={{
									borderColor: '#18a0fb',
								}}
							>
								Vaciar carrito
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shopping;