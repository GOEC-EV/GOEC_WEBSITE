import Head from 'next/head';
import CalculatorWrapper from '@/components/ChargingCalculators/CalculatorWrapper';
import HomeCalculatorLayout from '@/components/ChargingCalculators/components/HomeCalculator/HomeCalculatorLayout';

const Calculator = () => {
	return (
		<div>
			<Head>
				<title>EV Charging Calculator</title>
				<meta
					name='description'
					content='Stay up-to-date on the latest trends, market trends, and insights in the electric vehicle industry with GO EC News. subscribe to GO EC News Today'
				/>
			</Head>
			<CalculatorWrapper type='Home'>
				<HomeCalculatorLayout />
			</CalculatorWrapper>
		</div>
	);
};

export default Calculator;
