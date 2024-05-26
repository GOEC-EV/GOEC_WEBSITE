import Breadcrumbs from '../Utils/Breadcrumbs';
import ShopCard from './ShopCard';

export default function ShopPage() {
	const products = [
		{
			name: 'AC chargers',
			tag: 'VIEW PRODUCTS',
			img: '/images/shop3.jpg',
			url: '/shop/ac-chargers',
		},
		{
			name: 'DC chargers',
			tag: 'VIEW PRODUCTS',
			img: '/images/shop1.jpg',
			url: '/shop/dc-chargers',
		},
		{
			name: 'GO EC Smartcharge',
			tag: 'GET CARD',
			img: '/images/shop2.jpg',
			url: 'https://rzp.io/l/55pc1tZNg',
		},
	];

	return (
		<div>
			<Breadcrumbs
				links={[
					{
						name: 'Home',
						link: '/',
					},
					{
						name: 'Shop',
						link: '/shop',
					},
				]}
			/>

			<div className=' py-14 bg'>
				<div className=' container_wrapper grid grid-cols-1 md:grid-cols-2 gap-10  '>
					{products.map((item, index) => (
						<ShopCard key={`type-${index}`} tag={item.tag} img={item.img} name={item.name} url={item.url} />
					))}
				</div>
			</div>
		</div>
	);
}
