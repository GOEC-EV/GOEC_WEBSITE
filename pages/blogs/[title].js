import React from 'react';
import server from '../../configs/server.json';
import decodeTitle from '@/utilities/decodeTitle';
import InnerBlogPage from '@/components/InnerBlog/InnerBlogPage';

export default function BlogDetails({ data, dataList }) {
	return <InnerBlogPage type='Blogs' data={data} dataList={dataList} />;
}

export async function getServerSideProps({ params }) {
	const { id } = decodeTitle(params.title);

	const dataRes = await fetch(`${server.url}/posts/${id}?_embed`);
	const data = await dataRes.json();

	const catRes = await fetch(`${server.url}/categories?slug=blogs`);
	const category = await catRes.json();

	const dataListRes = await fetch(`${server.url}/posts?categories=${category[0].id}&page=1&per_page=3&exclude=${id}`);
	const dataListData = await dataListRes.json();
	const dataList = dataListData?.filter(item => item.id !== id);

	return {
		props: {
			data,
			dataList,
		},
	};
}
