import React from 'react';
import useInventories from '../../../Hooks/useInventories';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories, setInventories] = useInventories([]);
    return (
        <div className='container'>
            <h1 className='text-center text-primary my-4'>Inventory: {inventories.length}</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
                {
                    inventories.slice(0, 6).map(inventory => <Inventory
                        key={inventory.id}
                        inventory={inventory}
                    ></Inventory>)
                }


            </div>
        </div>
    );
};

export default Inventories;