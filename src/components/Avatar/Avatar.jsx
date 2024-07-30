import avatarImg from '../../imgs/avatar.png';
import './Avatar.css';

const Avatar = ({src = avatarImg}) =>
{
   return (
      // <img className="Avatar" src={src ? src : avatarImg} alt='user-avatar' />
      <img className="Avatar bg-black" src={src} alt='user-avatar' />
   )
}

export default Avatar
