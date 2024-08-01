
import UserInfo from '../UserInfo/UserInfo';
import avatarImg from '../../imgs/avatar.png';
import './Comment.css';
import Button from '../Button/Button';
import {useState} from 'react';

const Comment = () =>
{
   const [remove, setRemove] = useState(false)

   const removeHandler = () =>
   {
      setRemove(!remove);
   }

   return (
      !remove &&
      <div className='Comment'>

         <UserInfo name="Mario" src={avatarImg} />

         <div className="Comment-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit
         </div>
         <div className="Comment-date">25 Jul, 2024</div>

         <Button
            className="fw-bold"
            color='red'
            variant="#ffe5e5"
            onClick={removeHandler}
         >
            Remove
         </Button>
      </div>

      // remove === false ?
      //    <div className='Comment'>

      //       <UserInfo name="Mario" src={avatarImg} />

      //       <div className="Comment-text">
      //          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit
      //       </div>
      //       <div className="Comment-date">25 Jul, 2024</div>

      //       <Button color='red' variant="#444" onClick={removeHandler}>Remove</Button>
      //    </div>
      //    : null
   )
}

export default Comment;
