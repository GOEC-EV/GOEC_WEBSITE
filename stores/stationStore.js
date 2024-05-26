import { create } from 'zustand'

const useStationStore = create((set) => ({
    stations: [], // Array of all stations
    selectedStation: {}, // Currently selected station
    filtered_stations:[],

    // Function to set the entire list of stations
    setStations: (stations) => set({ 
        stations: stations,
        filtered_stations: stations,
     }),

    // filter by socket type
    filterBySocket: (socket) => 
        set((state) => {
            // Logging the socket type to the console for debugging purposes
            console.log('Filtering stations by socket type:', socket);

            // Filter the stations by the socket type
            const filteredStations = state.stations?.data?.filter(
                station => station?.chargers?.some(
                    charger => charger?.socketType.toLowerCase().trim() === socket.toLowerCase().trim()
                ));

            console.log(filteredStations)

            // Check if any stations were found before setting them
            if (filteredStations) {
                return { filtered_stations: { data: filteredStations } };
            } else {
                console.warn('No stations found with the socket type:', socket);
                return {}; // Return empty object if no stations are found (optional)
            }
        }),

    
    // filter by vechicle type
    filterByVehicle: (vehicle) => 
        set((state) => {
            // Logging the vehicle type to the console for debugging purposes
            console.log('Filtering stations by vehicle type:', vehicle);

            // Filter the stations by the vehicle type
            const filteredStations = state.stations?.data?.filter(
                station => station?.chargers?.some(
                    charger => charger?.vehicleType.toLowerCase().trim() === vehicle?.toLowerCase().trim()
                ));

            console.log(filteredStations)

            // Check if any stations were found before setting them
            if (filteredStations) {
                return { filtered_stations: { data: filteredStations } };
            } else {
                console.warn('No stations found with the vehicle type:', vehicle);
                return {}; // Return empty object if no stations are found (optional)
            }
        }),

    // Function to select a station by its ID
    selectStationById: (station_id) => 
        set((state) => {
            // Logging the station_id to the console for debugging purposes
            console.log('Selecting station with ID:', station_id);

            // Finding the station by ID from the stations array
            const foundStation = state.stations?.data?.find(station => station._id === station_id);

            // Check if the station was found before setting it
            if (foundStation) {
                return { selectedStation: foundStation };
            } else {
                console.warn('No station found with the ID:', station_id);
                return {}; // Return empty object if no station is found (optional)
            }
        }),

    
        filterByCity:(city) => {
            set((state) => {
                // Logging the city to the console for debugging purposes
                console.log('Filtering stations by city:', city);
    
                // Filter the stations by the city
                const filteredStations = state.stations?.data?.filter(
                    station => station?.location?.city.toLowerCase().includes(city.toLowerCase())
                );
    
                console.log(filteredStations)
    
                // Check if any stations were found before setting them
                if (filteredStations) {
                    return { filtered_stations: { data: filteredStations } };
                } else {
                    console.warn('No stations found with the city:', city);
                    return {}; // Return empty object if no stations are found (optional)
                }
            })
        }
}))

export default useStationStore;
