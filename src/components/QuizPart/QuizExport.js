import React, { useContext, useEffect, useState } from 'react'
import './QuizExport.css'
import Qustion from '../Question/Qustion'
import { QuestionContext } from '../../context/QuestionData';
import Button from '../Button';
import { Link } from 'react-router-dom'

const QuizExport = () => {

    const { questionsArray, questionIndex, setQuestionIndex } = useContext(QuestionContext);

    const [disableBtn1, setDisableBtn1] = useState('')
    const [disableBtn2, setDisableBtn2] = useState('');

    const handleDisable = () => {
        if (questionIndex === 0) {
            setDisableBtn1('btn-disable')
            setDisableBtn2('')
        }

        else if (questionIndex + 1 === questionsArray.length) {
            setDisableBtn2('btn-disable')
            setDisableBtn1('')
        }
        else {
            setDisableBtn1('')
            setDisableBtn2('')
        }
    }

    useEffect(() => {
        handleDisable();
    }, [questionIndex])

    const nextQuestion = () => {
        if (questionIndex < questionsArray.length - 1) {
            setQuestionIndex(questionIndex + 1);
        }
        // handleDisable();
    }
    const previousQuestion = () => {
        if (questionIndex > 0) {
            setQuestionIndex(questionIndex - 1);
        }
        // handleDisable();
    }

    const goToQestion = (index) => {
        setQuestionIndex(index)
    }

    const renderSmallBtns = questionsArray.map((object, index) => {
        let activeClass = '';

        let checkClass = '';
        if (index === questionIndex) {
            activeClass = 'active-btn'
        }
        object.options.map((option) => {
            if (option.status === true) {
                checkClass = ' attemped-question'
            }
        })
        return <button key={index} className={activeClass + checkClass} onClick={() => goToQestion(index)}>{index + 1}</button>
    })

    return (
        <div className='quizContainer'>
            <p>{questionIndex + 1} / {questionsArray.length}</p>
            <div className="quizBody">
                <Qustion question={questionsArray} questionIndex={questionIndex} />
                <div className="buttons">
                    <Button disable={disableBtn1} handleClick={previousQuestion} icon='arrow_back_ios'>
                        <span className="material-symbols-outlined">arrow_back_ios</span>
                        Previous Question
                    </Button>
                    <Button disable={disableBtn2} handleClick={nextQuestion} icon='arrow_forward_ios'>
                        Next Question
                        <span className="material-symbols-outlined">arrow_forward_ios</span>
                    </Button>
                </div>
            </div>
            <div className="submit-section">
                <div className="question-btns">
                    {renderSmallBtns}
                </div>
                <Link to='/result'>
                    <Button>Submit</Button>
                </Link>
            </div>
        </div>
    )
}

export default QuizExport
