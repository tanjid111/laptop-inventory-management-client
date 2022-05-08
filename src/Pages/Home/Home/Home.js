import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import { Map, Marker } from "pigeon-maps"
import HeatMap from '@uiw/react-heat-map';
import Calculator from "awesome-react-calculator";



const Home = () => {
    const value = [
        { date: '2022/01/11', count: 2 },
        { date: '2022/01/12', count: 20 },
        { date: '2022/01/13', count: 10 },
        ...[...Array(17)].map((_, idx) => ({ date: `2016/02/${idx + 10}`, count: idx, content: '' })),
        { date: '2022/04/11', count: 2 },
        { date: '2022/05/01', count: 5 },
        { date: '2022/05/02', count: 5 },
        { date: '2022/05/04', count: 11 },
    ];

    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <div className='text-center'>
                <Link to={'manage'} >
                    <button className='btn btn-primary'>Manage All Inventory</button>
                </Link>
            </div>
            <div className='my-5 container'>
                <h1 className='text-center text-primary'> Our Location </h1>
                <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                    <Marker width={50} anchor={[50.879, 4.6997]} />
                </Map>

                <div className='d-flex justify-content-center mx-auto'>
                    <div className='w-25 text-center my-5 mx-5'>
                        <h1 className='text-center text-primary'>Heat Map</h1>
                        <HeatMap value={value} startDate={new Date('2022/01/01')} />
                    </div>
                    <div className='calculator-demo' style={{ height: '24rem', width: '15rem' }}>
                        <h1 className='text-center text-primary'>Calculator</h1>
                        <Calculator />
                    </div>
                </div>
            </div>


        </div >
    );
};

export default Home;