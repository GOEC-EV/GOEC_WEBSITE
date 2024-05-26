import React from 'react';
import server from '../../configs/server.json';
import decodeTitle from '@/utilities/decodeTitle';
import InnerBlogPage from '@/components/InnerBlog/InnerBlogPage';

export default function NewsDetails({ data, dataList }) {
	return <InnerBlogPage type='News' data={data} dataList={dataList} />;
}

export async function getServerSideProps({ params }) {
	const { id } = decodeTitle(params.title);

	const dataRes = await fetch(`${server.url}/posts/${id}?_embed`);
	const data = await dataRes.json();

	const catRes = await fetch(`${server.url}/categories?slug=news`);
	const category = await catRes.json();

	const dataListRes = await fetch(`${server.url}/posts?categories=${category[0].id}&page=1&per_page=3&exclude=${id}`);
	const dataList = await dataListRes.json();

	return {
		props: {
			data,
			dataList,
		},
	};
}
