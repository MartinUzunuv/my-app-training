import '../App.css'
import React, { useState } from 'react'


const Page2 = () => {
  const questions = [
    {
      text: "do cats fly",
      a: "no",
      b: "sometimes",
      c: "yes",
      d: "ewfhewqfoqewfou",
      correctAnswer: "a"
    },
    {
      text: "1+10 = ?",
      a: "0",
      b: "12",
      c: "11",
      d: "110",
      correctAnswer: "c"
    },
    {
      text: "do i exist",
      a: "no",
      b: "sometimes",
      c: "i think therefore i am",
      d: "i don't think therefore i am not",
      correctAnswer: "c"
    },
    {
      text: "cars have ___ wheels",
      a: "2",
      b: "1",
      c: "yes",
      d: "4",
      correctAnswer: "d"
    }
  ]

  const [answers, setAnswers] = useState([])

  const onSubmit = () => {
    let points = 0
    for (let i = 0; i < questions.length; i++){
      if (answers[i] === true) {
        points++
      }
    }
    console.log(points)
    if (points === questions.length) {
      console.log("Ieeee ti specheli")
      setOpenPopup(true)
    } else {
      console.log("Tupak zagubi")
    }
  }

  const onChange = (event) => {
    if (questions[event.target.name].correctAnswer === event.target.id) {
      let tempAnswers = [...answers]
      tempAnswers[event.target.name] = true
      setAnswers(tempAnswers)
    } else {
      let tempAnswers = [...answers]
      tempAnswers[event.target.name] = false
      setAnswers(tempAnswers)
    }
  }

  const [openPopup,setOpenPopup] = useState(false)
  
  const onClickPopup = () => {
    setOpenPopup(!openPopup)
  }

  return (
    <div >
      {
        openPopup && 
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            width: '100%',
            height: '110%',
            marginTop: '-50px',
            backgroundColor: 'rgba(30,30,30,0.8)'
        }}>
          <div style={{
            backgroundColor: 'white',
              padding: '50px',
            borderRadius: '10px'
          }}>
              Yay you won
              <button style={{
                color: 'red'
              }} onClick={onClickPopup}>X</button>
          </div>
        </div>
      }
      {
        questions.map((question,i) => {
          return <div key={i} style={{
            backgroundColor: "gray",
            margin: "20px",
            borderRadius: "10px",
            padding: "10px"
          }}>
            <>{question.text}</>
            <br />
            <input id="a" onChange={onChange} type='radio' name={i} />
            <>{question.a}</>
            <br />
            <input id="b" onChange={onChange} type='radio' name={i} />
            <>{question.b}</>
            <br />
            <input id="c" onChange={onChange} type='radio' name={i} />
            <>{question.c}</>
            <br />
            <input id="d" onChange={onChange} type='radio' name={i} />
            <>{question.d}</>
            <br />
          </div>
        })
      }
      <button style={{
        backgroundColor: "cyan",
        padding: "10px",
        margin: "20px",
        borderRadius: "5px",
      }} onClick={onSubmit} >Submit</button>
    </div>
  )
}

export default Page2