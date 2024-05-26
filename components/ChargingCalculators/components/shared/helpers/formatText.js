export function formatText(savedAmt, chargePerFuelPerKm, ogAmt) {
	console.log(savedAmt, chargePerFuelPerKm, ogAmt);
	console.log(
		`You will save approximately ₹${savedAmt} with this electric vehicle. As a conventional petrol or diesel vehicle costs around ₹${chargePerFuelPerKm} per km.The total cost for the same journey with a conventional petrol or diesel vehicle would be around ₹${ogAmt}.`
	);
	if (savedAmt && chargePerFuelPerKm && ogAmt)
		return `You will save approximately ₹${savedAmt} with this electric vehicle. As a conventional petrol or diesel vehicle costs around ₹${chargePerFuelPerKm} per km.The total cost for the same journey with a conventional petrol or diesel vehicle would be around ₹${ogAmt}.`;
	else return '';
}
