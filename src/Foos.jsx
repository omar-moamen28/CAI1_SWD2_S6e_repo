import {useState} from "react";

function StateFoo()
{
   const [a, setA] = useState(0);

   return (
      <div onClick={() =>
      {
         setA(prev => prev + 1)

         console.log(a)

      }}>State: {a}</div>
   )
}

function Foo()
{
   let a = 0;

   return (
      <div onClick={() =>
      {
         a = a + 1

         console.log(a)

      }}>{a}</div>
   )
}

export {StateFoo, Foo}