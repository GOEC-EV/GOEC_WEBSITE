export class Elements {
	constructor(label, value) {
		this.label = label;
		this.value = value;
	}
}

class VehicleModel {
	constructor(name, batteryCapacity, range) {
		this.label = name;
		this.value = name;
		this.batteryCapacity = batteryCapacity;
		this.range = range;
	}
}
export const defaultElement = new Elements('Select an option', '');

export const vehicleSegments = [
	defaultElement,
	new Elements('2 Wheelers', '2'),
	new Elements('3 Wheelers', '3'),
	new Elements('4 Wheelers', '4'),
];

export const vehicles = {
	2: {
		'': [new VehicleModel('Select an option', 0, 0)],
		'Ather Energy': [new VehicleModel('450X Gen 3', 3.38, 108), new VehicleModel('450S Gen 3', 2.93, 82)],
		'Bajaj Auto': [new VehicleModel('Chetak', 2.15, 90)],
		'Hero Electric': [new VehicleModel('Photon HX', 2.86, 107), new VehicleModel('Flash LX', 1.26, 70)],
		'Okinawa Autotech': [new VehicleModel('Praise Pro', 2.88, 100)],
		'Ola Electric': [new VehicleModel('S1 Pro', 3.97, 125), new VehicleModel('S1', 3.3, 101)],
		'Revolt Motors': [new VehicleModel('RV400', 3.62, 130)],
		'Simple Energy': [new VehicleModel('One', 4.7, 235)],
		'TVS Motor Company': [new VehicleModel('iQube Electric', 2.14, 75)],
	},

	3: {
		'': [new VehicleModel('Select an option', 0, 0)],
		Mahindra: [
			new VehicleModel('Treo', 4.8, 131),
			new VehicleModel('Treo Yaari', 8.1, 195),
			new VehicleModel('Zor Grand', 4.8, 122),
		],
		Bajaj: [new VehicleModel('Maxima Z', 8.3, 144), new VehicleModel('Maxima C', 4.3, 100)],
		Piaggio: [new VehicleModel('Ape Electric', 7.4, 126), new VehicleModel('Ape E City', 5.1, 96)],
		'Kinetic Green': [new VehicleModel('Safar Smart', 8, 80)],
		Altigreen: [new VehicleModel('neEV', 11, 150)],
		'Omega Electric Vehicles': [new VehicleModel('Oja', 4.8, 120)],
	},

	4: {
		'': [new VehicleModel('Select an option', 0, 0)],
		Tata: [
			new VehicleModel('Punch EV', 24.2, 312),
			new VehicleModel('Nexon EV', 30.2, 312),
			new VehicleModel('Tiago EV', 24, 250),
			new VehicleModel('Tigor EV', 21.5, 250),
		],
		Mahindra: [new VehicleModel('XUV400', 39.5, 419)],
		MG: [new VehicleModel('Comet EV', 14.9, 250), new VehicleModel('ZS EV', 44.5, 419)],
		Citroen: [new VehicleModel('eC3', 29.0, 324)],
		Hyundai: [new VehicleModel('Kona Electric', 39.2, 407)],
		Kia: [new VehicleModel('EV6', 77.4, 521)],
		BMW: [new VehicleModel('i4', 80.7, 590)],
		'Mercedes-Benz': [new VehicleModel('EQC', 80, 428)],
		Volvo: [new VehicleModel('XC40 Recharge', 78, 418)],
		Porsche: [new VehicleModel('Taycan', 83.7, 484)],
		BYD: [new VehicleModel('Atto 3', 68, 521)],
		Audi: [new VehicleModel('e-tron GT', 85.7, 488), new VehicleModel('e-tron', 83.7, 484)],
		Jaguar: [new VehicleModel('I-Pace', 90, 470)],
		'Rolls-Royce': [new VehicleModel('Spectre', 103.0, 516)],
	},
};

export const distanceBatteryLevel = [
	defaultElement,
	new Elements('Distance', 'distance'),
	new Elements('Battery Level', 'batteryLevel'),
];

export const fuelTypes = [defaultElement, new Elements('Petrol', 'petrol'), new Elements('Diesel', 'diesel')];

class State {
	constructor(name, petrol, diesel, domesticTariff) {
		this.label = name;
		this.value = name;
		this.petrol = petrol;
		this.diesel = diesel;
		this.domesticTariff = domesticTariff;
	}
}
export const states = [
	new State('', 0, 0, 0),
	new State('Andhra Pradesh', 102.65, 91.27, 9.95),
	// new State('Arunachal Pradesh', 106.6, 93.08, 10000),
	new State('Assam', 105.33, 90.26, 7.15),
	new State('Bihar', 107.29, 94.45, 8.05),
	new State('Chhattisgarh', 108.05, 93.68, 4.85),
	new State('Delhi', 96.72, 94.38, 8),
	new State('Goa', 106.91, 96.64, 4.25),
	new State('Gujarat', 102.72, 92.9, 5.2),
	new State('Haryana', 97.81, 93.91, 7.1),
	new State('Himachal Pradesh', 105.92, 93.25, 5.45),
	// new State('Jammu and Kashmir', 109.4, 96.92, 10000),
	new State('Jharkhand', 107.98, 95.8, 4.25),
	new State('Karnataka', 101.94, 95.45, 8.15),
	new State('Kerala', 108.63, 99.65, 7.9),
	new State('Madhya Pradesh', 108.79, 97.01, 6.65),
	new State('Maharashtra', 106.14, 94.96, 11.82),
	new State('Manipur', 101.71, 96.54, 6.75),
	new State('Meghalaya', 106.56, 93.93, 5.9),
	new State('Mizoram', 107.04, 93.2, 6),
	new State('Nagaland', 106.19, 94.66, 7),
	new State('Odisha', 105.23, 96.3, 6.2),
	new State('Punjab', 101.18, 95.22, 6.63),
	new State('Rajasthan', 103.24, 97.46, 7.95),
	new State('Sikkim', 107.73, 95.1, 4),
	new State('Tamil Nadu', 102.65, 96.06, 6.6),
	new State('Telangana', 106.19, 97.56, 9.5),
	new State('Tripura', 106.18, 94.11, 7.2),
	new State('Uttar Pradesh', 101.84, 94.01, 7),
	new State('Uttarakhand', 104.72, 93.06, 6.25),
	new State('West Bengal', 107.79, 95.3, 8.99),
];

export const StateNames = states.map(state => state.label);

export const pages = {
	LOADING: 'loading',
	INPUT: 'input',
	OUTPUT: 'output',
};
