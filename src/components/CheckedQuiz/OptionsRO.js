import React, { useContext, useEffect, useState } from 'react'

const OptionsRO = ({ question, quesId }) => {


    const handleChange = () => {
        alert('You cannot Edit Now')
    }

    let checkerIcon = ''
    // let checker2 = ''

    const optionStatus = question.options.map((option) => {
        return option.status
    })


    const questionStatus = optionStatus.filter((option) => {
        if (option === true)
            return option;
        return option;
    })


    const renderOptions = question.options.map((option, index) => {
        if (questionStatus[0] === true) {
            if (option.status === true) {
                if (question.correctAnswer !== option.value) {
                    checkerIcon = <span class="material-symbols-outlined" style={{ color: 'red' }}>close</span>;
                }
                else if (question.correctAnswer === option.value) {
                    checkerIcon = <span class="material-symbols-outlined" style={{ color: 'green' }}>done</span>;
                }
                else {
                    checkerIcon = ''
                }
            }
            // if (option.status === false) {
            //     if (question.correctAnswer === option.value) {
            //         checkerIcon = <span class="material-symbols-outlined" style={{ color: 'green' }}>done</span>;
            //     }
            //     else {
            //         checkerIcon = ''
            //     }
            // }
            else {
                if (question.correctAnswer === option.value) {
                    checkerIcon = <span class="material-symbols-outlined" style={{ color: 'green' }}>done</span>;
                }
                else {
                    checkerIcon = ''
                }
            }
        }
        else {
            if (option.value === question.correctAnswer) {
                checkerIcon = <span class="material-symbols-outlined" style={{ color: 'green' }}>done</span>;
            }
            else {
                checkerIcon = ''
            }
        }

        // if (option.status === true) {
        //     if (question.correctAnswer !== option.value) {
        //         checker2 = ' cross';
        //     }
        //     else {
        //         checker2 = ''
        //     }
        // }
        // else {
        //     checker2 = ''
        // }
        return (
            <div className='optionRO' key={index}>
                <div>
                    <input type='radio' value={option.value} id={option.id} name={`question${quesId}`} checked={option.status} onChange={handleChange} />
                    <label htmlFor={option.id}>{option.value}</label>
                </div>
                {checkerIcon}
            </div>
        )
    })
    return (
        <>
            <div>
                {renderOptions}
            </div>

        </>
    )
}

export default OptionsRO