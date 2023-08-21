import { createContext, useState } from 'react'

const QuestionContext = createContext();

const QuestionData = ({ children }) => {

    const [questionIndex, setQuestionIndex] = useState(0);
    const [questionsArray, setQuestionArray] = useState(
        [
            {
                id: 1,
                question: 'What is the colour of sky?',
                options: [
                    { id: 'q1Opt1', value: 'Red', status: false },
                    { id: 'q1Opt2', value: 'Green', status: false },
                    { id: 'q1Opt3', value: 'Blue', status: false },
                    { id: 'q1Opt4', value: 'Yellow', status: false }
                ],
                correctAnswer: 'Blue'
            },
            {
                id: 2,
                question: 'What is the colour of Moon?',
                options: [
                    { id: 'q2Opt1', value: 'White', status: false },
                    { id: 'q2Opt2', value: 'Green', status: false },
                    { id: 'q2Opt3', value: 'Blue', status: false },
                    { id: 'q2Opt4', value: 'Yellow', status: false }
                ],
                correctAnswer: 'White'
            },
            {
                id: 3,
                question: 'What is the colour of Sun?',
                options: [
                    { id: 'q3Opt1', value: 'Blue', status: false },
                    { id: 'q3Opt2', value: 'White', status: false },
                    { id: 'q3Opt3', value: 'Red', status: false },
                    { id: 'q3Opt4', value: 'Yellow', status: false }
                ],
                correctAnswer: 'Red'
            },
            {
                id: 4,
                question: 'What is the colour of Hairs?',
                options: [
                    { id: 'q4Opt1', value: 'Red', status: false },
                    { id: 'q4Opt2', value: 'Green', status: false },
                    { id: 'q4Opt3', value: 'Black', status: false },
                    { id: 'q4Opt4', value: 'Yellow', status: false }
                ],
                correctAnswer: 'Black'
            },
            {
                id: 5,
                question: 'What is the colour of Wood?',
                options: [
                    { id: 'q5Opt1', value: 'Red', status: false },
                    { id: 'q5Opt2', value: 'Green', status: false },
                    { id: 'q5Opt3', value: 'Black', status: false },
                    { id: 'q5Opt4', value: 'Brown', status: false }
                ],
                correctAnswer: 'Brown'
            }
        ]
    )
    const [correctQuestions, setCorrectQuestions] = useState([]);

    const [statusBG, setStatusBG] = useState([]);

    return (
        <QuestionContext.Provider value={{ statusBG, setStatusBG, questionsArray, setQuestionArray, questionIndex, setQuestionIndex, correctQuestions, setCorrectQuestions }}>
            {children}
        </QuestionContext.Provider>
    )
}

export default QuestionData
export { QuestionContext }
