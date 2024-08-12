import { Carousel } from "bootstrap";
import React, { useEffect, useState } from "react";

const Api = () =>{

     const [Car,setCars] = useState({
          id:"",
          car_model:"",
          color:""
     });
     

     useEffect(()=>{
          fetch("https://myfakeapi.com/api/cars")
          .then((data)=> data.json())
          .then((fetchedData)=> {
               setCars(fetchedData.cars[0])
          })
     },[])     

     console.log(Car)

     return(
          <div>
               <div>id: {Car.id}</div>
               <div>car :{Car.car_model}</div>
               <div>car :{Car.car}</div>
          </div>
     )
}

export default Api;