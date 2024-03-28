import { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import CategoryList from '../../components/CategoryList/CategoryList';
import useDonationData from '../../Hooks/useDonationData';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const [value, setValue] = useState('');
    const { data, loading } = useDonationData();
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        setFilteredData(data);
    }, [data]);
    const handleSearch = () => {
        if (value.trim() != '') {
            const filtered = data.filter(
                (item) => item.category.toLowerCase() == value.toLowerCase()
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    };
    return (
        <div>
            <Helmet>
                <title>Donation Prc | Home</title>
            </Helmet>
            <Banner
                setValue={setValue}
                handleSearch={handleSearch}
                value={value}
            />
            <CategoryList filteredData={filteredData} loading={loading} />
        </div>
    );
};

export default Home;
