import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <div className='text-center'>
                <Link to={'manage'} >
                    <button className='btn btn-primary'>Manage All Inventory</button>
                </Link>
            </div>

        </div >
    );
};

export default Home;