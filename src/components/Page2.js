import '../App.css'
import React, { useState, useEffect } from 'react'


const Page2 = () => {
  const [questions, setQuestions] = useState([
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
  ])

  useEffect(() => {
    let oldQuestions = localStorage.getItem('questions')
    setQuestions(JSON.parse(oldQuestions))
  },[])

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

  // const [questionNumber,setQuestionNumber] = useState(0)
  
  // const nextQuestion = () => {
  //   setQuestionNumber(questionNumber+1)
  // }

  // const previousQuestion = () => {
  //   setQuestionNumber(questionNumber-1)
  // }

  const [inputQuestion,setInputQuestion] = useState(false)
  
  const switchModes = () => {
    setInputQuestion(!inputQuestion)
  }

  const onNewQuestion = (event) => {
    event.preventDefault()
    const newQuestion = {
      text: event.target[0].value,
      a: event.target[1].value,
      b: event.target[2].value,
      c: event.target[3].value,
      d: event.target[4].value,
      correctAnswer: event.target[5].value
    }
    console.log(newQuestion)
    setQuestions([...questions,newQuestion])
    let tempArr = [...questions,newQuestion]
    localStorage.setItem('questions',JSON.stringify(tempArr))
    // console.log(JSON.parse(localStorage.getItem('questions')))
  }

  return (
    <div >
      <button onClick={switchModes}>{ inputQuestion ? <>answer questions</> : <>input question</>}</button>
      {
        !inputQuestion ? 
      <>
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
              borderRadius: '10px',
              width: '250px',
              height: '130px',
              padding: '10px',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between'
          }}>
              Yay you won
              <button style={{
                color: 'red',
                backgroundColor: 'white',
                border: 'none',
                cursor: 'pointer'
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
        // <div style={{
        //       backgroundColor: "gray",
        //       margin: "20px",
        //       borderRadius: "10px",
        //       padding: "10px"
        //     }}>
        //       <>{questions[questionNumber].text}</>
        //       <br />
        //       <input id="a" onChange={onChange} type='radio' name={questionNumber} />
        //       <>{questions[questionNumber].a}</>
        //       <br />
        //       <input id="b" onChange={onChange} type='radio' name={questionNumber} />
        //       <>{questions[questionNumber].b}</>
        //       <br />
        //       <input id="c" onChange={onChange} type='radio' name={questionNumber} />
        //       <>{questions[questionNumber].c}</>
        //       <br />
        //       <input id="d" onChange={onChange} type='radio' name={questionNumber} />
        //       <>{questions[questionNumber].d}</>
        //   <br />
        //     </div>
      }

{/* {questionNumber > 0 && <button style={{
        backgroundColor: "cyan",
        padding: "10px",
        margin: "20px",
        borderRadius: "5px",
      }} onClick={previousQuestion}>Previouse</button>}

                {questionNumber < questions.length-1 && <button style={{
        backgroundColor: "cyan",
        padding: "10px",
        margin: "20px",
        borderRadius: "5px",
      }} onClick={nextQuestion}>Next</button>}
<br/> */}
      <button style={{
        backgroundColor: "cyan",
        padding: "10px",
        margin: "20px",
        borderRadius: "5px",
      }} onClick={onSubmit} >Submit</button>
          </> : <>
          <br/>
            <form onSubmit={onNewQuestion} style={{
              margin: '30px'
            }}>
            <br /><br />
              <input required placeholder='question' />
              <br /><br />
              <input required placeholder='answer a' />
              <br /><br />
              <input required placeholder='answer b' />
              <br /><br />
              <input required placeholder='answer c' />
              <br /><br />
              <input required placeholder='answer d' />
              <br /><br />
              <input required placeholder='true answer(as a letter)' />
              <br /><br />
              <input type='submit'/>
          </form>
          </>
    }
    </div>
  )
}

export default Page2