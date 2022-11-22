import { useEffect, useState } from 'react';
import { InvestorsList } from '../cmps/investors-list';

export const InvestorsApp = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('https://youngstartup.io/api/cwebsite/get_speakers_dyn')
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setData(result);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);
	console.log(data);
	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<div className='container'>
				<InvestorsList data={data}/>
			</div>
		);
	}
};

