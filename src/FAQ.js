import './Faq.css';
import { faqData } from "./FaqData";
import { useState } from 'react';

function Faq() {

  let intervalId;
  const data = faqData;
  const [answerData, setAnswerData] = useState({
    question : data[0].question,
    answer : data[0].answer,
    activeIndex : 0
  })
  
  function renderAnswer(index) {
    setAnswerData({
      question : data[index].question,
      answer : data[index].answer,
      activeIndex : index
    })
    if (index != 0) {
      intervalId = setInterval(() => {
        if (data.length - 1 === answerData.activeIndex + 1) {
          clearInterval(intervalId);
        }
        renderAnswer(answerData.activeIndex + 1)
      },5000)
    } else {
      clearInterval(intervalId);
    }
  }

  return (
      <div className="faq-container">
        <h1 className="title">Frequently Asked Questions</h1>

        <div className="questions-answer">
          <div className='questions-box'>
            <div className="questions">
              {
                data.map((item, index) => {
                  return (
                    <div className={ index === answerData.activeIndex  ? 'question active' : 'question' } onClick={() => renderAnswer(index)} >
                      <div className='circle-box'>
                        <div className='circle'></div>
                      </div>
                      <div className='question-box'>
                        { item?.question }
                      </div>
                      <div className='right-arrow-box'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 4L16 12L8 20" stroke="#5D5FEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>

                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>

          <div className='answer-box'>
            <h3>{ answerData.question }</h3>
            <p>{ answerData.answer }</p>
          </div>
        </div>
      </div>

  );
}

export default Faq;