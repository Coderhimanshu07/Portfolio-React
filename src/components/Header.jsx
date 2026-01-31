import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';

// importing the react router items
import { Link, Routes, Route } from 'react-router-dom';

function Header() {

    return (
        <>
            <Navbar />
        </>
    );
}

export default Header;