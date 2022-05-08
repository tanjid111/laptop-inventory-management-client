import { useEffect, useState } from 'react';

const useInventoryDetail = (inventoryId) => {
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `https://gentle-shelf-57774.herokuapp.com/laptop/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [inventoryId])
    return [inventory, setInventory]
};

export default useInventoryDetail;