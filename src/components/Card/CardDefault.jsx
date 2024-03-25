import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
const CardDefault = ({ item }) => {
    // console.log(item);
    const { id, title, category, image, cardBg, textColor, categoryBg } =
        item || {}; // (|| {} = empty object) if an item is missing it will not give and error.
    return (
        <Link to={`/donation-details/${id}`}>
            <Card
                style={{ backgroundColor: cardBg }}
                className='overflow-hidden cursor-pointer'
            >
                <CardHeader
                    color='blue-gray'
                    className='shadow-none m-0 rounded-none'
                >
                    <img src={image} alt='card-image' />
                </CardHeader>
                <CardBody>
                    <Button
                        style={{
                            backgroundColor: categoryBg,
                            color: textColor,
                        }}
                        size='sm'
                    >
                        {category}
                    </Button>
                    <Typography
                        style={{ color: textColor }}
                        variant='h5'
                        className='my-2'
                    >
                        {title}
                    </Typography>
                </CardBody>
            </Card>
        </Link>
    );
};

export default CardDefault;
