import Avatar from '../Avatar/Avatar';
import './Header.css';
import {Link} from "react-router-dom"
const Header = () =>
{

   return (
      <header>
         <ul className='navLinks'>
            <Link to="/" className='navLink'>Home</Link>
            <li className='navLink'>AddUser</li>
            <li className='navLink'>Services</li>
            <li className='navLink'>Contacts</li>
         </ul>
         <Avatar />
      </header>
   )
}


export default Header;
