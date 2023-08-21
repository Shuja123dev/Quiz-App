import React from 'react'
import Options from './Option/Options'
import './Question.css'

const Qustion = ({ question, questionIndex }) => {
    const renderQuestions = question.map((ques, index) => {
        return (
            <div className='question' key={index}>
                <h4>{ques.question}</h4>
                <Options question={ques} quesId={ques.id} />
            </div>
        )
    })
    return (
        <>
            <div className="question-container">
                <div className='questions-box' style={{ transform: `translateX(-${questionIndex * 100}%)` }}>
                    {renderQuestions}
                </div>
            </div>
        </>
    )
}

export default Qustion
