import { useParams } from 'react-router-dom';
import useDonationData from '../../Hooks/useDonationData';
import { useEffect, useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from '@material-tailwind/react';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveToLocalStorage } from '../../utils/localStorage';

const DonationDetails = () => {
    const { id } = useParams();
    const { data, loading } = useDonationData();
    const [singleData, setSingleData] = useState({});
    const { title, image, description, price, textColor } = singleData || {}; // if no data found won't give any error.

    useEffect(() => {
        if (data) {
            const singleData = data.find((item) => item.id == +id); // (+) changes any string number to number.
            setSingleData(singleData);
        }
    }, [data, id]);

    const handleDonate = () => {
        saveToLocalStorage(singleData);
    };

    return (
        <>
            <Card className='w-full shadow-none lg:px-20 mt-12 overflow-hidden'>
                <CardHeader
                    floated={false}
                    shadow={false}
                    color='transparent'
                    className='m-0 rounded-md relative'
                >
                    <img className='w-full h-[700px]' src={image} />
                    <div className='absolute bottom-0 w-full py-6 ps-6 bg-black bg-opacity-40'>
                        <Button
                            onClick={handleDonate}
                            style={{
                                backgroundColor: textColor,
                                color: 'white',
                            }}
                            size='lg'
                        >
                            Donate ${price}
                        </Button>
                    </div>
                </CardHeader>
                <CardBody>
                    <Typography variant='h2' color='blue-gray'>
                        {title}
                    </Typography>
                    <Typography
                        variant='lead'
                        color='gray'
                        className='mt-3 font-normal'
                    >
                        {description}
                    </Typography>
                </CardBody>
            </Card>
            <ToastContainer
                position='top-center'
                transition={Zoom}
            ></ToastContainer>
        </>
    );
};

export default DonationDetails;
