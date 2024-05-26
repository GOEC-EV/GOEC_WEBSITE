'use client';

import { useEffect, useState } from 'react';
import { vehicles } from '../data';
import { formatText } from '../helpers/formatText';

const trim = a => a.toFixed(2);

export const useVehicleProvider = () => {
	const [segment, setSegment] = useState('');
	const [manufacturer, setManufacturer] = useState('');
	const [manufacturerArray, setManufacturerArray] = useState([]);
	const [model, setModel] = useState('');
	const [modelArray, setModelArray] = useState([]);
	const clearAll = () => {
		setManufacturer('');
		setManufacturerArray([]);
		setModel('');
		setModelArray([]);
	};
	useEffect(() => {
		clearAll();
		if (['2', '3', '4'].includes(segment)) {
			setManufacturerArray(Object.keys(vehicles[segment]));
		}
	}, [segment]);
	useEffect(() => {
		if (manufacturer === '') {
			setModelArray([]);
			setModel('');
		} else {
			setModelArray(vehicles[segment][manufacturer]);
		}
	}, [manufacturer]);
	useEffect(() => {
		if (model === '') {
			setModel('');
		} else {
			setModel(model);
		}
	}, [model]);

	const calculatePublic = (data, manufacturer, model, choice) => {
		const ans = {
			chargingTime: 0,
			kmsAdded: 0,
			chargingCost: 0,
			chargingCostPerKm: 0,
			unitsAdded: 0,
		};
		try {
			// finding details and data required and float parsing
			const modelDetails = vehicles[data.vehicleSegment][manufacturer].filter(m => m.label === model)[0];
			if (!modelDetails) throw new Error('Model not found');
			const batteryCapacityFloat = parseFloat(modelDetails.batteryCapacity);
			const rangeFloat = parseFloat(modelDetails.range);
			const costPerKwhFloat = parseFloat(data.costPerKwh);
			const outputFloat = parseFloat(data.chargerPowerOutput);

			// finding units added, charging cost and charging time
			if (isNaN(batteryCapacityFloat) || isNaN(rangeFloat)) throw new Error('Invalid battery capacity or range');
			const unitsTemp = (batteryCapacityFloat * data.distanceToBeTravelled) / rangeFloat;
			ans.unitsAdded = trim(unitsTemp);
			ans.chargingCost = trim(unitsTemp * costPerKwhFloat);
			const chargingSpeed = batteryCapacityFloat / outputFloat;
			ans.chargingTime = trim(chargingSpeed * 60);

			// finding kms added and charging cost per km: for 2 cases
			if (choice === 'distance') {
				ans.kmsAdded = data.distanceToBeTravelled;
				ans.chargingCostPerKm = trim(ans.chargingCost / ans.kmsAdded);
			}
			if (choice === 'batteryLevel') {
				const bS = parseFloat(data.batteryStartLevel);
				const bE = parseFloat(data.batteryEndLevel);
				if (isNaN(bS) || isNaN(bE)) throw new Error('Invalid battery start or end level');
				ans.kmsAdded = trim((rangeFloat * (bE - bS)) / 100);
				ans.chargingCostPerKm = trim(ans.chargingCost / ans.kmsAdded);
			}

			// debugging
			console.log(modelDetails);
			console.log(ans);
		} catch (err) {
			console.error(err);
		}

		return ans;
	};

	const calculateHome = (data, manufacturer, model, choice, fuelPrice, tariff) => {
		const ans = {
			chargingTime: 0,
			kmsAdded: 0,
			chargingCost: 0,
			chargingCostPerKm: 0,
			unitsAdded: 0,
			text: '',
		};
		try {
			// finding details and data required and float parsing
			const modelDetails = vehicles[data.vehicleSegment][manufacturer].filter(m => m.label === model)[0];
			if (!modelDetails) throw new Error('Model not found');
			const batteryCapacityFloat = parseFloat(modelDetails.batteryCapacity);
			const rangeFloat = parseFloat(modelDetails.range);
			const costPerKwhFloat = parseFloat(tariff);
			const outputFloat = parseFloat(data.chargerPowerOutput);
			// finding units added, charging cost and charging time
			if (isNaN(batteryCapacityFloat) || isNaN(rangeFloat)) throw new Error('Invalid battery capacity or range');
			const unitsTemp = (batteryCapacityFloat * data.distance) / rangeFloat;
			ans.unitsAdded = trim(unitsTemp);
			ans.chargingCost = trim((batteryCapacityFloat / rangeFloat) * data.distance * costPerKwhFloat);
			const chargingSpeed = batteryCapacityFloat / outputFloat;
			ans.chargingTime = trim(chargingSpeed * 60);

			// finding kms added and charging cost per km: for 2 cases
			ans.kmsAdded = data.distance;
			ans.chargingCostPerKm = trim(ans.chargingCost / ans.kmsAdded);

			// for the text
			const savedAmt = trim((data.distance / data.cMileage) * fuelPrice - ans.chargingCost);
			const chargePerFuelPerKm = trim(fuelPrice / data.cMileage);
			const ogAmt = trim(fuelPrice * (data.distance / data.cMileage));
			ans.text = formatText(savedAmt, chargePerFuelPerKm, ogAmt);

			// debugging
			console.log(modelDetails);
			console.log(ans);
		} catch (err) {
			console.error(err);
		}

		return ans;
	};
	return {
		segment,
		setSegment,
		manufacturer,
		setManufacturer,
		manufacturerArray,
		setManufacturerArray,
		model,
		setModel,
		modelArray,
		setModelArray,
		calculatePublic,
		calculateHome,
	};
};
