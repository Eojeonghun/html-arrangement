import './App.css';
import { useState } from 'react';   //state가 변경될 때마다 html을 자동으로 랜더링 하기위해 import
import { Modal } from '@mui/material';

function App() {
  let [modal, setModal] = useState(false);
  let [name, setName] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);               //배열 형태의 state 선언과 할당

  return (
    
    <div className="App">
     <header className = "App-header">ReactBlog</header> 
     <button onClick={()=> setName(copyName)}>
        버튼 1</button>
     <div className = "App-div">
      <h3>{name[0]}</h3>
      2월 17일 발행
      <hr></hr>
      <h3>{name[1]}</h3>
      2월 17일 발행
      <hr></hr>
      <h3>{name[2]}</h3>
      2월 17일 발행
      <hr></hr>
      <button onClick={ ()=> { setModal(!modal) } }>{글제목[0]}</button>
    {
      modal == true ? <Modal></Modal> : null
    }
     </div>
    </div>    //변수 사용 시 {변수} 처럼 사용
  );
}

export default App;
