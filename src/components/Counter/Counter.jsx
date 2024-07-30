import {useState} from "react";

//! Wrong Declaration
//! const [isActive, setIsActive] = useState(true);

const Counter = () =>
{
   const [count, setCount] = useState(0);

   // const clickHandler = (e) =>   // f1 f2 f3
   // {
   //    let countEl = document.querySelector('.Counter h2 span');
   //    countEl.innerHTML++;
   // };

   const counterHandler = () => setCount(prev => prev += 1);

   console.log('rendered');

   return (
      <div className="Counter">
         <h2>Counter: {count}</h2>
         <button onClick={counterHandler}
         >
            increment
         </button>

         {/* <h2>Counter: <span>0</span></h2>
         <button onClick={() => clickHandler("ss")}
         >
            increment
         </button> */}
      </div>
   )
}

export default Counter
