import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../Utils/Breadcrumbs';
import InnerBlogCard from './InnerBlogCard';
import styles from './InnerBlogPage.module.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useRouter } from 'next/router';
import LoadingCircle from '../Utils/LoadingCircle';
import textToHtml from 'html-react-parser';
import getDate from '@/utilities/getDate';
import { useTags } from '@/hooks/api';
import Head from 'next/head';
import HtmlContent from './HtmlContent';
import cleanHtml from './CleanHtml';

export default function InnerBlogPage({ type, data, dataList }) {
	const [copyUrl, setCopyUrl] = useState();
	const { title } = useRouter().query;
	const tagsApi = useTags();




	useEffect(() => {
		setCopyUrl('');
	}, [title]);

	return (
		<div style={{ backgroundColor: 'var(--bgDark)' }}>
			<Head>
				<title>{`GOEC - ${data.title.rendered}`}</title>
			</Head>
			{tagsApi.isLoading ? <LoadingCircle /> : null}
			<Breadcrumbs
				links={
					type === 'News'
						? [
								{
									name: 'Home',
									link: '/',
								},
								{
									name: 'News',
									link: '/news',
								},
								{
									name: 'News inner',
									link: `/news/${title}`,
								},
						  ]
						: [
								{
									name: 'Home',
									link: '/',
								},
								{
									name: 'Blogs',
									link: '/blogs',
								},
								{
									name: 'Blog inner',
									link: `/blogs/${title}`,
								},
						  ]
				}
			/>
			{tagsApi.data?.length ? (
				<div className='  container_wrapper  '>
					<div className=' pt-16 pb-12'>
						<h1 className='text-[#FFFFFF] font-[700] text-[32px] leading-normal'>
							{textToHtml(data.title.rendered)}
						</h1>
						<p className='mt-2 text-[#F2F2F2]'>
							By<span className=' text-blue-500'> {data._embedded.author[0].name} </span>/ {getDate(data.date)} /
							<span className=' text-blue-500'> {type}</span>
						</p>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 gap-10 lg:gap-20 '>
						<div className=' col-span-1  sm:col-span-4 md:col-span-4'>
							<img
								//src={postApi.data.jetpack_featured_media_url}
								src={data.images.large}
								className=' w-full h-auto aspect-[1.65] object-cover rounded-md '
								alt=''
							/>
							<br />
							<HtmlContent html={data.content.rendered} />
							<br />
							<div className=' w-full flex flex-col md:items-center'>
								<div className=' flex  gap-3 py-2'>
									<div className=' relative'>
										<button
											className={` ${copyUrl ? styles.CopiedBtn : styles.CopyLink}`}
											onClick={() => {
												window.navigator.clipboard.writeText(window.location.href);
												setCopyUrl(window.location.href);
											}}>
											{copyUrl ? 'Copied!' : 'Copy Link'}
										</button>
									</div>

									<a
										href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
										target='_blank'
										rel='noreferrer'
										className={styles.socialLink}>
										<FaFacebookF />
									</a>
									<a
										href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${data.title.rendered}`}
										target='_blank'
										rel='noreferrer'
										className={styles.socialLink}>
										<FaTwitter />
									</a>
									<a
										href={`https://www.instagram.com/?url=${window.location.href}`}
										target='_blank'
										rel='noreferrer'
										className={styles.socialLink}>
										<FaInstagram />
									</a>
								</div>
								<div className=' flex  gap-3 pt-4 pb-8'>
									{data.tags.map((item, index) => {
										const tag = tagsApi.data.find(t => t.id === item);
										if (tag?.name)
											return (
												<a key={`tag-${index}`} className={styles.TextLink}>
													{tag.name}
												</a>
											);
									})}
								</div>
							</div>
						</div>
						<div className=' col-span-1   sm:col-span-4  md:col-span-2 '>
							<div className=' grid grid-cols-1    sm:grid-cols-2  md:grid-cols-1'>
								{dataList.map((item, index) => (
									<InnerBlogCard key={`extra-${type}-${index}`} data={item} type={type} />
								))}
							</div>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
}
