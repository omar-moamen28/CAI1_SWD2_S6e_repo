import Avatar from '../Avatar/Avatar';
import './UserInfo.css';


const UserInfo = ({src, name}) =>
{

   return (
      <div className="UserInfo">
         <Avatar src={src} />
         <div className="UserInfo-name">{name}</div>
      </div>
   )
}

export default UserInfo
