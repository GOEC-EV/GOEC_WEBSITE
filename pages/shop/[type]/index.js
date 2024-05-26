import Head from 'next/head';
import { useRouter } from 'next/router';
import Products from '@/components/Shop/Products';
import React, { useEffect, useState } from 'react';
import { ACchargers, DCchargers } from '../../../data/shopData';
export default function ShopType() {
	const query = useRouter().query;
	const [type, setType] = useState('');

	function getName(type) {
		const splitted = type.split('-');
		const first = splitted[0].toUpperCase();
		return `${first} ${splitted.slice(1).join(' ')}`;
	}

	useEffect(() => {
		if (query?.type) {
			setType(query.type);
		}
	}, [query]);

	return (
		<div>
			<Head>
				<title>{`GOEC Shop - ${getName(type)}`}</title>
			</Head>
			<Products name={getName(type)} data={type === 'dc-chargers' ? DCchargers : ACchargers} />
		</div>
	);
}
