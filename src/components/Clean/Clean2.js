import React , {useContext}from 'react'
import { FirstContext } from '../..'


function Clean2() {
  return (
     
    <div>
          {useContext(FirstContext)}    
    </div>
  )
}

export default Clean2
