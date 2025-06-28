import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { MdPhoneAndroid } from "react-icons/md";




function Header() {
    return(
        <header>
            <h1 className='nav_title'>SPAOnline</h1>

            <nav>
                <Link to='/' className='navlink'><MdHome /></Link>
                <Link to='/reservation' className='navlink'><MdPhoneAndroid /></Link>
            </nav>
        </header>
    )
}

export default Header;