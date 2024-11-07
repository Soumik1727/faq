import React, { useState } from 'react'
import { questions } from './Data/faqQuestions';

export default function Faqs() {

    let [currId, setCurrId]=useState(questions[0].id);
    let items = questions.map( (item, i)=>{

        let itemsDetails = {
            item,
            currId,
            setCurrId
        }
        return(
            <FaqItems itemsDetails={itemsDetails} key={i}/>     /* Calling the FaqItems functions defind in the last*/
        )
    })

  return (
    <div>
        <h1>FAQs using PROPS Drilling!</h1>
        <div className='faqOuter'>
            {items}
        </div>
    </div>
  )
}

function FaqItems({itemsDetails}){      

    let {item, currId, setCurrId} = itemsDetails;                       // Destructuring item details


    return(
        <div className='faqItems '>
            <h2 onClick={()=>setCurrId(item.id)}>{item.question}</h2>   {/* Props drilling || child is send item.id to it's parent*/}
            <p className={ currId==item.id ? 'activeAns': ''} >{item.answer}</p>
        </div>
    )
}
