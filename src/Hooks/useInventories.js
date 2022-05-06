import React, { useEffect, useState } from 'react';

const useInventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('inventory.json')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return [inventories, setInventories];

};

export default useInventories;