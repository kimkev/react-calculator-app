import React from 'react';

const KeyPad = (props) => {

    const buttons = ['(', ')', 'C', 'CLR', '1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '=', '/'];

    // logic for each button pressed
    const buttonHandler = (e) => {
        try {
            if (e.target.value === 'CLR') {
                clearButton();
            }
            else if (e.target.value === 'C') {
                backButton();
            }
            else if (e.target.value === '=') {
                calculateButton();
            }
            else {
                props.setProcess(props.process + e.target.value)
            }
        } catch (e) {
            props.setResult("error");
        }
    }
    //Clear button: clear state
    const clearButton = () => {
        props.setResult(0);
        props.setProcess('');
    }
    //Back button: remove last element in the process string
    const backButton = () => {
        if (props.process.length > 0) {
            let newString = props.process.slice(0, -1);
            props.setProcess(newString);
        }
    }
    // equal button: operate and set result
    const calculateButton = () => {
        let preResult = '';
        if (props.process.includes('--')) {
            preResult = props.process.replace('--', '+')
        }
        else {
            preResult = props.process
        }
        // eval alternative
        props.setResult(new Function('return ' + preResult))

    }

    // map the basic calculator symbols with the above created arrays
    const mapButton = (param) => {
        return (
            param.map((element) => (
                <button key={element} value={element} onClick={buttonHandler}>{element}</button>
            ))
        )
    }


    return (
        <div>
            <div className="button">
                {mapButton(buttons)}
            </div>
        </div>
    )
}

export default KeyPad;