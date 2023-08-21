import React, { useContext } from 'react'
import '../Question/Question.css'
import OptionsRO from './OptionsRO'
import { QuestionContext } from '../../context/QuestionData'

const QuestionRO = ({ question, questionIndex }) => {

    const { setStatusBG } = useContext(QuestionContext)

    const renderQuestions = question.map((ques, index) => {

        let statement = '';
        let optionNo = '';
        let correctOptionIndex = '';
        let background = 'yellow';

        const optionStatus = ques.options.map((option) => {
            return option.status
        })


        const questionStatus = optionStatus.filter((option) => {
            if (option === true)
                return option;
            return option;
        })

        ques.options.map((option, index) => {
            if (option.value === ques.correctAnswer) {
                correctOptionIndex = index + 1
            }
            if (questionStatus[0] === true) {
                if (option.status === true) {
                    if (ques.correctAnswer === option.value) {
                        statement = 'You Choosed Correct Option';
                        optionNo = `Option ${index + 1}`
                        background = '#489fff';
                    }
                    else if (ques.correctAnswer !== option.value) {
                        statement = `You Choosed Wrong Option. Correct Answer is ${ques.correctAnswer}.`;
                        optionNo = `Option ${correctOptionIndex}`
                        background = '#ff3e3e'
                    }
                }
            }
            else {
                statement = `You Skipped this Question. Correct Answer is ${ques.correctAnswer}.`;
                optionNo = `Option ${correctOptionIndex}`
                background = '#f6ee00'
            }
        })


        return (
            <div className='question' key={index}>
                <h4>{ques.question}</h4>
                <div className="option-box">
                    <OptionsRO question={ques} quesId={ques.id} />
                    <div className="status-box" style={{ background: background }}>
                        <p>{statement}</p>
                        <p>{optionNo}</p>
                    </div>
                </div>
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

export default QuestionRO