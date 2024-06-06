import React, { useEffect, useState } from 'react';
import ChargersCard from './ChargersCard';
import { HiOutlineSearch } from 'react-icons/hi';
import Breadcrumbs from '../Utils/Breadcrumbs';
import styles from './ExploreChargersPage.module.css';
import LoadingCircle from '../Utils/LoadingCircle';
import { State, City } from 'country-state-city';
import { useRouter } from 'next/router';
import { CgPushChevronLeft, CgPushChevronRight, CgChevronLeft, CgChevronRight } from 'react-icons/cg';
import Head from 'next/head';
import { useStations, useStationsMap } from '@/hooks/api';
import Mapview from '../Mapview/Mapview';
import useStationStore from '@/stores/stationStore';

export default function ExploreChargersPage({ state, city ,cordinates}) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [sInput, setSInput] = useState('');

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(8);
    const [search, setSearch] = useState(sInput);
    const [isGoec, setIsGoec] = useState(true);

    const [vehicle, setVehicle] = useState('');
    const [socket, setSocket] = useState('');
    const [stateInput, setStateInput] = useState(state || '');
    const [selectedCity, setSelectedCity] = useState(city || '');
    const [selectedStateCode, setSelectedStateCode] = useState('');

    const [cities, setCities] = useState([]);

    const { filtered_stations, setStations, filterBySocket, filterByVehicle, filterByCity, setMapStation, map_station } = useStationStore();

    const stationsApi = useStations({ page, limit, search, isGoec, vehicle, socket, state: stateInput, city: selectedCity });

    const stationsMapApi = useStationsMap({ isGoec, state: stateInput, city: selectedCity });

    useEffect(() => {
        let isMounted = true;
        if (isMounted && stationsApi.data) {
            setStations(JSON.parse(stationsApi.data));
        }
        if (isMounted && stationsMapApi.data) {
            setMapStation(JSON.parse(stationsMapApi.data));
        }
        return () => {
            isMounted = false;
        };
    }, [stationsApi.data, stationsMapApi.data]);

    useEffect(() => {
        if (state) {
            setStateInput(state);
        }
        if (stateInput) {
            const selectedState = State.getStatesOfCountry('IN').find(item => item.name === stateInput);
            if (selectedState) {
                setSelectedStateCode(selectedState.isoCode);
                const cities = City.getCitiesOfState('IN', selectedState.isoCode);
                setCities(cities);
            }
        }
    }, [state, stateInput]);

    function getPageRange() {
        let start = limit * (page - 1) + 1;
        let end = start + limit - 1;
        if (filtered_stations?.data?.totalItems < end) end = filtered_stations.data?.totalItems;
        return `${start}–${end}`;
    }

    const handleStateChange = (value) => {
        if (value) {
            setStateInput(value);
            const stateCode = State.getStatesOfCountry('IN').find(item => item.name === value).isoCode;
            setSelectedStateCode(stateCode);
            setSelectedCity('');
            const newUrl = `/ev-charging-stations-in-${value.replace(/[ -]+/g, '-').toLowerCase()}`;
            router.push(newUrl);
        }
    };

    const handleCityChange = (value) => {
        if (value && selectedStateCode) {
            setSelectedCity(value);
            const newUrl = `/ev-charging-stations-in-${value.replace(/[ -]+/g, '-').toLowerCase()}`;
            router.push(newUrl);
        }
    };

    return (
        <div className={styles.warper}>
            <Head>
                <title>{`GOEC - Explore Charging Stations in ${state || city || 'India'}`}</title>
            </Head>
            {stationsApi.isLoading ? <LoadingCircle /> : null}
            <Breadcrumbs
                mod='white'
                links={[
                    {
                        name: 'Home',
                        link: '/',
                    },
                    {
                        name: 'Explore chargers',
                        link: '/ev-charging-stations',
                    },
                ]}
            />
            <div className='container_wrapper pb-16'>
                <div className='max-w-[850px] pt-10 pb-6'>
                    <p className='text-[32px] text-[#1B1B1B] font-[700]'>
                        Explore EV Charging station in {state || city || 'India'}
                    </p>
                    <p className='text-lg py-2'>
                        Are you tired of searching for an Electric vehicle charging station near you? GO EC explore option now
                        allows you to search, filter, and navigate to EV charging stations across India.
                    </p>
                </div>
                <div>
                    <div className='relative col-span-3'>
                        <input
                            className={styles.search}
                            type='text'
                            placeholder='Search by city'
                            value={sInput}
                            onKeyDown={e => {
                                if (e.key === 'Enter') {
                                    setSInput(e.target.value);
                                    filterByCity(sInput);
                                }
                            }}
                            onChange={e => {
                                setSInput(e.target.value);
                                filterByCity(sInput);
                            }}
                        />
                        <div className={styles.searchIcon} onClick={() => setSearch(sInput)}>
                            <HiOutlineSearch />
                        </div>
                    </div>
                    <div className='grid grid-cols-4 md:grid-cols-9 gap-3 justify-between'>
                        <div className='col-span-3'>
                            <select
                                className={styles.selectBox}
                                value={vehicle}
                                onChange={e => {
                                    setVehicle(e.target.value);
                                    filterByVehicle(e.target.value);
                                }}>
                                <option value=''>Sort by Vehicle type</option>
                                <option value='2 Wheelers'>2 Wheelers</option>
                                <option value='3 Wheelers'>3 Wheelers</option>
                                <option value='4 Wheelers'>4 Wheelers</option>
                                <option value='Heavy Vehicle'>Heavy Vehicle</option>
                            </select>
                        </div>
                        <div className='col-span-2'>
                            <select
                                className={styles.selectBox}
                                value={socket}
                                onChange={e => {
                                    setSocket(e.target.value);
                                    filterBySocket(e.target.value);
                                }}>
                                <option value=''>Sort by socket type</option>
                                <option value='CCS'>CCS</option>
                                <option value='CHAdeMO'>CHAdeMO</option>
                                <option value='GB/T Gun'>GB/T Gun</option>
                                <option value='Type2'>Type 2</option>
                                <option value='16 Amp Socket'>16 Amp Socket</option>
                                <option value='AC Type 1'>AC Type 1</option>
                            </select>
                        </div>

                        <div className='col-span-2'>
                            <select
                                className={styles.selectBox}
                                required
                                value={selectedCity}
                                onChange={e => handleCityChange(e.target.value)}>
                                <option value='' hidden>
                                    City
                                </option>
                                {cities &&
                                    cities.map(item => (
                                        <option key={item.isoCode} value={item.name}>
                                            {item.name}
                                        </option>
                                    ))}
                            </select>
                        </div>

                        <div className='col-span-2'>
                            <select
                                className={styles.selectBox}
                                required
                                value={stateInput}
                                onChange={e => handleStateChange(e.target.value)}>
                                <option value='' hidden>
                                    State
                                </option>
                                {State &&
                                    State.getStatesOfCountry('IN').map(item => (
                                        <option id={item.isoCode} key={item.isoCode} value={item.name}>
                                            {item.name}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='h-[2px] bg-[#dddddd] mt-6'></div>
                <div className='flex justify-between pt-6 h-fit items-center'>
                    <p className='text-[#1B1B1B] font-bold text-xl'>{filtered_stations?.data?.length} results</p>
                    <p onClick={() => setOpen(!open)} className={styles.SwitchBtn}>
                        {open ? 'Switch to lists' : 'Switch to maps'}
                    </p>
                </div>
                {open ? (
                    <div className='py-5 pb-32'>
                        <Mapview data={map_station.data} cordinates={cordinates} />
                    </div>
                ) : (
                    <div>
                        {filtered_stations?.data?.length ? (
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8 pb-8'>
                                {filtered_stations?.data?.map((item, index) => (
                                    <div key={`station-${index}`} className='h-full'>
                                        <ChargersCard data={item} />
                                    </div>
                                ))}
                            </div>
                        ) : null}
                        <div className='p-4 px-6 rounded-2xl bg-white shadow-lg flex justify-between items-center'>
                            <aside className='flex items-center gap-4'>
                                <p className='text-[#8B8A8F] text-[14px] font-[500]'>Chargestations on the page</p>
                                <select
                                    className='border border-[#ccc] p-1 px-2 rounded-md text-[#1D1E26]'
                                    value={String(limit)}
                                    onChange={e => setLimit(Number(e.target.value))}>
                                    <option value='8'>8</option>
                                    <option value='12'>12</option>
                                    <option value='16'>16</option>
                                    <option value='20'>20</option>
                                    <option value='24'>24</option>
                                </select>
                            </aside>
                            <aside className='flex items-center gap-6'>
                                <p className='text-[#8B8A8F] text-[14px] font-[500]'>
                                    Showing {getPageRange()} of {filtered_stations.data?.totalItems}
                                </p>
                                <div className='flex items-center gap-4 select-none'>
                                    <CgPushChevronLeft
                                        className={`cursor-pointer ${page === 1 ? 'text-[#BDBDBD]' : 'text-[#1D1E26]'}`}
                                        onClick={() => setPage(1)}
                                    />
                                    <CgChevronLeft
                                        className={`cursor-pointer ${page === 1 ? 'text-[#BDBDBD]' : 'text-[#1D1E26]'}`}
                                        onClick={() => {
                                            if (page > 1) setPage(prev => prev - 1);
                                        }}
                                    />
                                    <CgChevronRight
                                        className={`cursor-pointer ${
                                            filtered_stations.data?.totalPage === page ? 'text-[#BDBDBD]' : 'text-[#1D1E26]'
                                        }`}
                                        onClick={() => {
                                            if (filtered_stations.data?.totalPage > page) setPage(prev => prev + 1);
                                        }}
                                    />
                                    <CgPushChevronRight
                                        className={`cursor-pointer ${
                                            filtered_stations.data?.totalPage === page ? 'text-[#BDBDBD]' : 'text-[#1D1E26]'
                                        }`}
                                        onClick={() => setPage(filtered_stations.data?.totalPage)}
                                    />
                                </div>
                            </aside>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
