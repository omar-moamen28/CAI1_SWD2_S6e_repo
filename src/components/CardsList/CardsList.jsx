import Card from '../Card/Card';
import './CardsList.css';


const CardsList = ({data, deleteFunc}) =>
{


   const users = data.map((user) => (
      <Card key={user.id} {...user} deleteFunc={deleteFunc} />
   ))

   return (
      <div className="CardsList d-grid mt-5">
         {users}
      </div>
   )
}

export default CardsList
