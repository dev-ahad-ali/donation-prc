import { Button } from '@material-tailwind/react';
import useLocalData from '../../Hooks/useLocalData';
import DonationCard from '../../components/Card/DonationCard';
import { useState } from 'react';

const Donation = () => {
    const { localData } = useLocalData();
    const [showAll, setShowAll] = useState(false);
    const handleShow = () => {
        setShowAll(!showAll);
    };
    if (localData.length === 0) {
        return <p className='text-center'>No data found</p>;
    }
    return (
        <div className='py-12'>
            <div className='grid grid-cols-2 gap-4 max-w-7xl mx-auto px-5'>
                {localData
                    .slice(0, showAll ? localData.length : 4)
                    .map((data) => (
                        <DonationCard key={data.id} data={data}></DonationCard>
                    ))}
            </div>
            {localData.length > 4 && (
                <div className='text-center mt-6'>
                    <Button onClick={handleShow} size='lg' color='green'>
                        {showAll ? 'Show Less' : 'Show All'}
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Donation;
