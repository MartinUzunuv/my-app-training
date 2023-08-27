import React from 'react'

const SubmitButton = ({arr, text, setArr, setText}) => {

    const addText = () => {
        let tempArr = arr
        tempArr.push(text)
        setArr(tempArr)
        setText('')
    }

    return (
        <div>
            <button onClick={addText}>submit</button>
        </div>
    )
}

export default SubmitButton