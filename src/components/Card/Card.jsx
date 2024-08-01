import UserInfo from "../UserInfo/UserInfo";
import Button from '../Button/Button';
import './Card.css';


const Card = ({id, name, age, gender, deleteFunc}) =>
{

   return (
      <div key={id} className={`Card text-white fw-bold text-start bg-primary ${gender === "female" && "bg-danger"}`}>
         <UserInfo name={name} />
         <div>Age: {age}</div>
         <div>Gender: {gender}</div>
         <Button
            className="py-0 fw-bold px-2 text-danger d-block w-auto ms-auto"
            variant="#ffe5e5"
            onClick={() => deleteFunc(id)}
         >
            delete

         </Button>
      </div>

   )
}

export default Card
