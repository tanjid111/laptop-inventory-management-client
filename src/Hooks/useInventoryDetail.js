import React, { useEffect, useState } from 'react';

const useInventoryDetail = (inventoryId) => {
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/laptop/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [inventoryId])
    return [inventory, setInventory]
};

export default useInventoryDetail;