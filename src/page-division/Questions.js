import { useState } from 'react';

import '../styles/questions.css';

import ImgArrow from '../images/icon-arrow.svg';

function Questions() {
    const [questionActive, setQuestionActive] = useState(0);

    function changeQuestionActive(item) {
        if(questionActive === item){
            setQuestionActive(0);
        }else{
            setQuestionActive(item);
        }
    }

    return (
        <div className="questionsContainer">
            <h2>Frequently Asked Questions</h2>
            <p>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
            <div className="questions">
                <div className="question" onClick={() => changeQuestionActive(1)}>
                    <span>What is Bookmark?</span>
                    <img src={ImgArrow} alt="" className={questionActive === 1 ? 'arrowActive' : ''}/>
                </div>
                {questionActive === 1 && (
                    <div className="answer">
                        A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly.
                    </div>
                )}
                <div className="question" onClick={() => changeQuestionActive(2)}>
                    <span>How can I request a new browser?</span>
                    <img src={ImgArrow} alt="" className={questionActive === 2 ? 'arrowActive' : ''}/>
                </div>
                {questionActive === 2 && (
                    <div className="answer">
                        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                    </div>
                )}
                <div className="question" onClick={() => changeQuestionActive(3)}>
                    <span>Is there a mobile app?</span>
                    <img src={ImgArrow} alt="" className={questionActive === 3 ? 'arrowActive' : ''}/>
                </div>
                {questionActive === 3 && (
                    <div className="answer">
                        Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                        urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                        sollicitudin ex et ultricies bibendum.
                    </div>
                )}
                <div className="question" onClick={() => changeQuestionActive(4)}>
                    <span>What about other Chromium browsers?</span>
                    <img src={ImgArrow} alt="" className={questionActive === 4 ? 'arrowActive' : ''}/>
                </div>
                {questionActive === 4 && (
                    <div className="answer">
                        Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                        vitae neque eget nisl gravida pellentesque non ut velit.
                    </div>
                )}
            </div>
            <button>
                More Info
            </button>
        </div>
    );
}

export default Questions;