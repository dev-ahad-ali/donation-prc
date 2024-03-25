import { toast } from 'react-toastify';

const saveToLocalStorage = (data) => {
    const savedData = JSON.parse(localStorage.getItem('donation')) || [];
    const exists = savedData.find((item) => item.id == data.id);
    if (!exists) {
        savedData.push(data);
        localStorage.setItem('donation', JSON.stringify(savedData));
        toast.success('Added to donation');
    } else {
        toast.error('Already added to donation');
    }
};
const getDataFromLocalStorage = () => {
    const localData = JSON.parse(localStorage.getItem('donation')) || [];
    return localData;
};

export { saveToLocalStorage, getDataFromLocalStorage };
