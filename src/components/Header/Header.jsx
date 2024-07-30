import Avatar from '../Avatar/Avatar';
import './Header.css';

const Header = () =>
{

   return (
      <header>
         <ul className='navLinks'>
            <li className='navLink active'>Home</li>
            <li className='navLink'>About</li>
            <li className='navLink'>Services</li>
            <li className='navLink'>Contacts</li>
         </ul>
         <Avatar />
      </header>
   )
}

export default Header;
