import logo from './logo.svg';
import './App.css';
import { questions } from './Data/faqQuestions';
import { useState } from 'react';
import Faqs from './Faqs';

function App() {

  let [showAns,setShowAns] = useState(questions[0].id);   // keep the answer of the first questions

  return (
    <div className="App">
                  {/* FAQ Questions using State Management! */}
                  {/* FAQ Questions using State Management! */}
                  {/* FAQ Questions using State Management! */}
                  {/* FAQ Questions using State Management! */}
        <div>
            <h1>FAQs using State Management!</h1>
            <div className='faqOuter'>
                {questions.map((faqItem, i)=>{
                    return (
                      <div className='faqItems ' key={faqItem.id}>  {/* key gives a unique id to identify a unique question */}
                      <h2 onClick={()=>setShowAns(faqItem.id)}>{faqItem.question}</h2>
                      <p className={showAns==faqItem.id ? 'activeAns': ''}>{faqItem.answer}</p>
                  </div>
                    )
                })}
                 
            </div>
        </div>

                  {/* Creating FAQs using PROPS Drilling // Better Approach  */}
                  {/* Creating FAQs using PROPS Drilling // Better Approach  */}
                  {/* Creating FAQs using PROPS Drilling // Better Approach  */}
                  {/* Creating FAQs using PROPS Drilling // Better Approach  */}

                          <Faqs/>
                  
    </div>
  );
}

export default App;
