import { useEffect, useState } from 'react';
import { getDataFromLocalStorage } from '../utils/localStorage';

const useLocalData = () => {
    const [localData, setLocalData] = useState([]);
    useEffect(() => {
        setLocalData(getDataFromLocalStorage);
    }, []);
    return { localData };
};

export default useLocalData;
