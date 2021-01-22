import React from 'react';

const Result = (props) => {

    let result = props.result;
    let process = props.process;

    return (
        <div>
            <div className="result">
                <p>{result}</p>
            </div>

            <div className="result">
                <p>{process}</p>
            </div>

        </div>

    )
}

export default Result;