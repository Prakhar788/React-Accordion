import React, { useState } from 'react'
import { questions } from './api'
import "./accordian.css";
import MyAcc from "./MyAcc"

const Accordion = () => {
   const [data,setData]=useState(questions);
   
  return (
    <>
    <section className='main-div'>
        <h1>React Questions</h1>
    {
        data.map((cur)=>{
            return <MyAcc key={cur.id} {...cur}/>
        })
    }
    </section>
    </>
  )
}

export default Accordion