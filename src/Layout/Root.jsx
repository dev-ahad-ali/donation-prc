import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const Root = () => {
    return (
        <>
            <NavBar />
            <Outlet></Outlet>
        </>
    );
};

export default Root;
