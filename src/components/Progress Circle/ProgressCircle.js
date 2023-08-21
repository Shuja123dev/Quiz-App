import React, { useState } from 'react'
import './ProgressCircle.css'

const ProgressCircle = ({ children, percentage }) => {
    let fillBg = '#d46f86';
    let decrementer = 50;
    const [percent, setPercent] = useState(percentage);
    if (percent < 50) {
        fillBg = '#dddddd'
        decrementer = 0;
    }
    return (
        <div className='circle'>
            <div className="before" style={{ background: fillBg, transform: `rotate(${(percent - decrementer) * 0.01}turn)` }}></div>
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default ProgressCircle
