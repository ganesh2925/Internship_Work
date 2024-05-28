import './FAQ.css';
import { faqData } from "./faqData";
import { BiChevronRight } from "react-icons/bi";

function FAQ() {

  const data = faqData;
  const len = data.length;

  function printAnwser(getIndexNumber) {
    if (getIndexNumber >= 0) {
      for (let i = getIndexNumber; i < len; i++) {
        setTimeout(() => {
          return (
            <div className="Anwser-box">
              <h4>{data[i].question}</h4>
              <p>{data[i].answer}</p>
            </div>
          );
        }, 3000);
      }
    } else {
      return (
        <div className="Anwser-box">
          <h4>{data[0].question}</h4>
          <p>{data[0].answer}</p>
        </div>
      );
    }
  }

  return (
    <>
      <div className="FAQ-container">
        <div className="FAQ-title-box">
            <h1 className="FAQ-title">Frequently Asked Questions</h1>
        </div>

        <div className="FAQ-Questions-Anwsers-box">

          <div className="FAQ-Questions-box">

            <div className="FAQ-Questions-box-1 FAQ-Questions-boxs" onClick={() => printAnwser(0)}>
              <div className='cricle-content'>
                <div className='at-container'>
                    <div className='at-item' ></div>
                </div>
                <div className='h4-question-container' >
                  <h4>What is a Payment Gateway?</h4>
                </div>
              </div>
                <div className='icon-container'>
                  <BiChevronRight className='icon' />
                </div>
            </div>

            <div className="FAQ-Questions-box-2 FAQ-Questions-boxs" onClick={() => printAnwser(1)}>
              <div className='cricle-content'>
                <div className='at-container'>
                  <div className='at-item' ></div>
                </div>
                <div className='h4-question-container'>
                  <h4>Do I need to pay to Instapay even when there is no transaction going on in my business?</h4>
                </div>
              </div>
              <div className='icon-container'>
                  <BiChevronRight className='icon' />
                </div>
            </div>

            <div className="FAQ-Questions-box-3 FAQ-Questions-boxs" onClick={() => printAnwser(2)}>
              <div className='cricle-content'>
              <div className='at-container'>
                <div className='at-item' ></div>
              </div>
              <div className='h4-question-container'>
                <h4>What platforms does Instapay payment gateway support?</h4>
              </div>
              </div>
                <div className='icon-container'>
                  <BiChevronRight className='icon' />
                </div>
            </div>

            <div className="FAQ-Questions-box-4 FAQ-Questions-boxs" onClick={() => printAnwser(3)}>
              <div className='cricle-content'>
                <div className='at-container'>
                  <div className='at-item' ></div>
                </div>
                <div className='h4-question-container'>
                  <h4>Does Instapay provide international payments support?</h4>
                </div>
              </div>
                <div className='icon-container'>
                  <BiChevronRight className='icon' />
                </div>
            </div>

            <div className="FAQ-Questions-box-5 FAQ-Questions-boxs" onClick={() => printAnwser(4)}>
              <div className='cricle-content'>
                <div className='at-container'>
                  <div className='at-item' ></div>
                </div>
                <div className='h4-question-container'>
                  <h4>Is there any setup fee or annual maintainance fee that I need to pay regularly?</h4>
                </div>
              </div>
                <div className='icon-container'>
                  <BiChevronRight className='icon' />
                </div>
            </div>

          </div>

          {/* <div className='Anwser-box-container'>
            <div className="FAQ-Anwsers-box">
              {data.map((item, index) => {
                const isSelected = index === getIndex;
                return (
                  <div className={`Anwser-box ${isSelected ? 'selected' : ''}`}>
                    <h4>{item.question}</h4>
                    <p>{item.answer}</p>
                  </div>
                );
              })}
            </div>
          </div> */}
        
        {/* 
          <div className='Anwser-box-container'>
            <div className="FAQ-Anwsers-box">
            { () => {
                for (let i = getIndexValue; i < len + 1; i++) {
                  setTimeout(() => {
                    return (
                      <div className="Anwser-box">
                        <h4>{data[i].question}</h4>
                        <p>{data[i].answer}</p>
                      </div>
                    )
                  }, 3000);
                }
              }
            }
              </div>
            </div> */}

          {/* <div className='Anwser-box-container'>
            <div className="FAQ-Anwsers-box">
              <div className="Anwser-box">
                <h4>{data[0].question}</h4>
                <p>{data[0].answer}</p>
              </div>
            </div>
          </div> */}

          <div className="Anwser-box-container">
            <div className="FAQ-Anwsers-box">
              {printAnwser()}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default FAQ;