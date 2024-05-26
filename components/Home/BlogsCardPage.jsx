import { usePosts, useType } from '@/hooks/api';
import BlogsCard from '../Blog/BlogsCard';
import Button from '../Utils/Button';
import LoadingCircle from '../Utils/LoadingCircle';
import styles from './BlogsCardPage.module.css';

export default function BlogsCardPage() {
	const { data: typeData } = useType({ slug: 'blogs' });
	const { data, isLoading } = usePosts({ category: typeData?.[0]?.id, limit: 2, page: 1 });

	return (
		<div className={styles.warper}>
			{isLoading ? <LoadingCircle /> : null}
			<div className='  container_wrapper  '>
				<div className=' flex pb-12'>
					<p className={styles.hadarText}>Blogs</p>
				</div>
				{data?.length ? (
					<div className=' grid grid-cols-1 md:grid-cols-2 gap-5 mt-[2rem]'>
						{data.map((item, index) => (
							<div key={`blog-${index}`}>
								<BlogsCard data={item} />
							</div>
						))}
					</div>
				) : null}
				<div className='pt-[4rem] w-full flex items-center justify-center'>
					<Button text='View more blogs' link='/blogs' />
				</div>
			</div>
		</div>
	);
}
