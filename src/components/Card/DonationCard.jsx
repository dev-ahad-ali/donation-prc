import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
const DonationCard = ({ data }) => {
    const { id, title, category, image, cardBg, textColor, categoryBg, price } =
        data || {};
    return (
        <Card style={{ backgroundColor: cardBg }} className='w-full flex-row'>
            <CardHeader
                shadow={false}
                floated={false}
                className='m-0 w-2/5 shrink-0 rounded-r-none'
            >
                <img
                    src={image}
                    alt='card-image'
                    className='h-full w-full object-cover'
                />
            </CardHeader>
            <CardBody>
                <Button
                    style={{ backgroundColor: categoryBg, color: textColor }}
                    size='sm'
                >
                    {category}
                </Button>
                <Typography
                    style={{ color: textColor }}
                    className='font-bold
                '
                >
                    ${price}
                </Typography>
                <Typography variant='h5' color='blue-gray' className='mb-2'>
                    {title}
                </Typography>
                <Link to={`/donation-details/${id}`}>
                    <Button style={{ backgroundColor: textColor }} size='md'>
                        View Details
                    </Button>
                </Link>
            </CardBody>
        </Card>
    );
};

export default DonationCard;
