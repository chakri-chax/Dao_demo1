import React, { useState } from 'react'
import { setGlobalState, useGlobalState } from '../store'
import {performContribute} from '../Blockchain'


const Banner = () => {
    const[balance]= useGlobalState('balance')
    const[mybalance]=useGlobalState("mybalance")

    const[amount,setAmount] = useState('0')
    const onContribute = async()=>{
        await performContribute(amount);
        setGlobalState("balance",amount)
        console.log("Contribution success");
    }
  return (
    <>
        <div>
            <p> Balance : {balance}</p>
            <p> MyBalance : {mybalance}</p>
        </div>

        <div>
            <input type='number' placeholder='Amount' onChange={(e)=>setAmount(e.target.value)} value={amount} required></input>
            <button onClick={onContribute} >Contribute</button>
            
        </div>

        
    </>
  )
}

export default Banner