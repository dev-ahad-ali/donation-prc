import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import DonationDetails from '../Pages/DonationDetails/DonationDetails';
import Donation from '../Pages/Donation/Donation';
import Statistics from '../Pages/Statistics/Statistics';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/donation',
                element: <Donation />,
            },
            {
                path: '/statistics',
                element: <Statistics />,
            },
            {
                path: '/donation-details/:id',
                element: <DonationDetails />,
            },
        ],
    },
]);
export default router;
