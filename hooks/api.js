import { useQuery } from 'react-query';

const apiUrl = 'https://wordpress.goecworld.com/wp-json/wp/v2';

const config = {
	headers: {
		'Content-Type': 'application/json; charset=UTF-8',
		token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJuYXllZW1yb2NrczIyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGFWWTZtRFloU2tZaUVwUFIxb0tqTGVmTEtLR2tnZGJUUkNIazZvdktHZDhmQ1YzdFRqSTdXIiwiaWF0IjoxNjc3ODAzMzk2LCJleHAiOjIxNTExNjczOTZ9._amDLV4xob2prR1AlTPdERHiNxZtDS8d-AA4UNlMkGo',
	},
	// mode: 'no-cors'
};

const options = {
	refetchOnWindowFocus: false,
};

export function useType({ slug }) {
	return useQuery([slug], () => fetch(`${apiUrl}/categories?slug=${slug}`, config).then(res => res.json()), {
		...options,
		enabled: slug !== undefined,
	});
}

export function usePosts({ category, page, limit }) {
	return useQuery(
		[category, page, limit],
		() =>
			fetch(`${apiUrl}/posts?page=${page}&per_page=${limit}&categories=${category}&_embed`, config).then(res =>
				res.json()
			),
		{ ...options, enabled: category !== undefined }
	);
}

// export function usePost({ id }) {
// 	return useQuery([id], () => fetch(`${apiUrl}/posts/${id}&_embed`, config).then(res => res.json()), {
// 		...options,
// 		enabled: id !== undefined,
// 	});
// }

// export function useAuthor({ id }) {
// 	return useQuery([id], () => fetch(`${apiUrl}/users/${id}`, config).then(res => res.json()), {
// 		...options,
// 		enabled: id !== undefined,
// 	});
// }

export function useTags() {
	return useQuery([], () => fetch(`${apiUrl}/tags`, config).then(res => res.json()), { ...options });
}

export function useCategories({ parent }) {
	return useQuery([parent], () => fetch(`${apiUrl}/categories?parent=${parent}`, config).then(res => res.json()), {
		...options,
		enabled: parent !== undefined,
	});
}

export function useCategory({ id }) {
	return useQuery([id], () => fetch(`${apiUrl}/categories/${id}`, config).then(res => res.json()), {
		...options,
		enabled: id !== undefined,
	});
}

export function useStationById({ id }) {
	return useQuery(
		[id],
		() => fetchStationData(id)
	)
}

async function fetchStationData(id) {
	const url = new URL('https://panel-api.goecworld.com/api/v1/station/getall-stations');
	url.search = new URLSearchParams({ id }).toString();
	console.log(url)

	const headers = {
		'Content-Type': 'application/json',
		'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmRlNDZiMjRhOTk4MGJlYjg3ZGY5NyIsImlhdCI6MTcxNDQwMjEyNCwiZXhwIjoxNzE2OTk0MTI0fQ.LDgwU1rzbt7D-XMBGLGuZ2ECXhxR5tS3huuZO4AQL5o' // Replace YOUR_API_TOKEN with the actual token
	};

	const response = await fetch(url, { method: 'GET', headers });

	if (!response.ok) {
		const errorDetails = await response.text();
		throw new Error(`Network response was not ok: ${response.status} - ${errorDetails}`);
	}

	return response.json(); // Assuming the server returns JSON

}

export function useStationsMap({ isGoec, state, city }) {
	return useQuery(
		[ isGoec, state, city], // Array of dependencies to uniquely identify and cache the query
		() => {

			const url = new URL('https://panel-api.goecworld.com/api/v1/station/getall-map');

			// Create a new instance of URLSearchParams
			const params = new URLSearchParams();

			// Conditionally add parameters only if they have meaningful values
			if (isGoec !== undefined && isGoec !== null) params.append('goecOnly', isGoec ? 'true' : 'false');
			if (state && state.trim() !== '') params.append('state', state.toLowerCase());
			if (city && city.trim() !== '') params.append('city', city);
			url.search = params.toString();


			const headers = {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmRlNDZiMjRhOTk4MGJlYjg3ZGY5NyIsImlhdCI6MTcxNDQwMjEyNCwiZXhwIjoxNzE2OTk0MTI0fQ.LDgwU1rzbt7D-XMBGLGuZ2ECXhxR5tS3huuZO4AQL5o' // Replace YOUR_API_TOKEN with the actual token
			};

			return fetch(url, { method: 'GET', headers }).then(res => {
				if (!res.ok) {
					throw new Error(`Network response was not ok: ${res.status}`);
				}
				return res.text();
			});
		},
		{
			keepPreviousData: true, // Example option: keep previous data until new data is fetched
			staleTime: 5000, // Time in milliseconds after which a fresh background refetch is triggered
			cacheTime: 60000, // How long the query data is cached in memory
		}
	);
}

export function useStations({ page, limit, isGoec, state, city }) {
	return useQuery(
		['stations', page, limit, isGoec, state, city], // Array of dependencies to uniquely identify and cache the query
		() => {
			const url = new URL('https://panel-api.goecworld.com/api/v1/station/getall');

			// Create a new instance of URLSearchParams
			const params = new URLSearchParams();

			// Conditionally add parameters only if they have meaningful values
			if (page !== undefined && page !== null) params.append('page', page);
			if (limit !== undefined && limit !== null) params.append('limit', limit);
			if (isGoec !== undefined && isGoec !== null) params.append('goecOnly', isGoec ? 'true' : 'false');
			if (state && state.trim() !== '') params.append('state', state.toLowerCase());
			if (city && city.trim() !== '') params.append('city', city);

			// Set the search property of the URL
			url.search = params.toString();


			const headers = {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmRlNDZiMjRhOTk4MGJlYjg3ZGY5NyIsImlhdCI6MTcxNDQwMjEyNCwiZXhwIjoxNzE2OTk0MTI0fQ.LDgwU1rzbt7D-XMBGLGuZ2ECXhxR5tS3huuZO4AQL5o' // Replace YOUR_API_TOKEN with the actual token
			};

			return fetch(url, { method: 'GET', headers }).then(res => {
				if (!res.ok) {
					throw new Error(`Network response was not ok: ${res.status}`);
				}
				return res.text();
			});
		},
		{
			keepPreviousData: true, // Example option: keep previous data until new data is fetched
			staleTime: 5000, // Time in milliseconds after which a fresh background refetch is triggered
			cacheTime: 60000, // How long the query data is cached in memory
		}
	);
}

export function useStation({ id }) {
	return useQuery([id], () => fetch(`/api/get/chargestation?id=${id}`, config).then(res => res.json()), {
		...options,
		enabled: id !== undefined,
	});
}

export function useYoutube() {
	return useQuery([], () => fetch('/api/get/youtube-list', config).then(res => res.json()), { ...options });
}
