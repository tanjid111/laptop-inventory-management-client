import { useEffect, useState } from 'react';

const useInventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('https://gentle-shelf-57774.herokuapp.com/laptop')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return [inventories, setInventories];

};

export default useInventories;