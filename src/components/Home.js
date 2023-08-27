import '../App.css';
import { useState } from 'react'
import TextsDisplay from './TextsDisplay'
import SubmitButton from './SubmitButton';
import TextInput from './TextInput';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const [arr,setArr] = useState([])
  const [text,setText] = useState('')

  const onClick = () => {
    navigate('/page2')
  }

  return (
    <div className="App">
      <button onClick={onClick}>Page 2</button>
        <TextInput text={text} setText={setText} />
        <SubmitButton arr={arr} text={text} setArr={setArr} setText={setText} />
        <br /><br />
        <TextsDisplay arr={arr} />
    </div>
  );
}

export default Home;
