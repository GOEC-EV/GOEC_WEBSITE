import PrivacyPolicyPage from '@/components/PrivacyPolicy/PrivacyPolicyPage';
import Head from 'next/head';
import React from 'react';

export default function PrivacyPolicy() {
	return (
		<div>
			<Head>
				<title>GO EC | Privacy policy</title>
				<meta
					name='description'
					content="Stay informed on GO EC's detailed privacy policy, which defines how we gather, and handle your data. Learn how GO EC prioritizes your privacy and security"
				/>
			</Head>
			<PrivacyPolicyPage />
		</div>
	);
}
