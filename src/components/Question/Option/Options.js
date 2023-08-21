import React, { useContext } from 'react'
import './Options.css'
import { QuestionContext } from '../../../context/QuestionData'

const Options = ({ question, quesId }) => {

    const { questionsArray, setQuestionArray, questionIndex, correctQuestions, setCorrectQuestions } = useContext(QuestionContext);

    const handleChange = (id, checkedValue) => {
        const updatedArr = questionsArray.map((question, qIndex) => {
            if (question.correctAnswer === checkedValue && questionIndex === qIndex) {
                const questionCorrector = [...correctQuestions, {
                    id: `correctQ${qIndex}`,
                    answer: checkedValue,
                    qNumber: qIndex
                }]
                setCorrectQuestions(questionCorrector)
            }
            const updateOptions = question.options.map((option) => {
                if (quesId === question.id) {
                    if (option.id === id) {
                        return { ...option, status: true };
                    }
                    return { ...option, status: false };
                }
                return option
            })
            return { ...question, options: updateOptions }
        })
        setQuestionArray(updatedArr);
    }
    const renderOptions = question.options.map((option, index) => {
        return (
            <div className='option' key={index}>
                <input type='radio' value={option.value} id={option.id} name={`question${quesId}`} checked={option.status} onChange={() => handleChange(option.id, option.value)} />
                <label htmlFor={option.id}>{option.value}</label>
            </div>
        )
    })
    return (
        <>
            {/* {question.correctAnswer} */}
            {renderOptions}
        </>
    )
}

export default Options
