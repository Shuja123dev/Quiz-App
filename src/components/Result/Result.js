import React, { useContext } from 'react'
import { QuestionContext } from '../../context/QuestionData';
import ProgressCircle from '../Progress Circle/ProgressCircle';
import { NavLink } from 'react-router-dom';
import Button from '../Button';

const Result = () => {
    const { questionsArray, correctQuestions } = useContext(QuestionContext);
    const renderOptions = questionsArray.map((question) => {
        const checkOptions = question.options.filter((option) => {
            if (option.status === true) {
                return option.status
            }
            return null
        })
        return checkOptions;
    }).flat();

    const percentage = correctQuestions.length / questionsArray.length * 100;

    return (
        <div>
            Result
            <p>Total Question: {questionsArray.length}</p>
            <p>Questions Attempted: {renderOptions.length}</p>
            <p>Skipped Questions: {questionsArray.length - renderOptions.length}</p>
            <p>Correct Answers: {correctQuestions.length}</p>
            <p>Percentage: {percentage}%</p>
            <p>Wrong Answers: {renderOptions.length - correctQuestions.length}</p>
            <ProgressCircle percentage={percentage}>
                <h3>{percentage}%</h3>
                <p>Marks Percentage</p>
            </ProgressCircle>
            <NavLink to='/checked-quiz'>
                <Button>
                    View Checked Quiz
                </Button>
            </NavLink>
        </div>
    )
}

export default Result
