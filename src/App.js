/*eslint-disable*/  //  js 파일 최상단에 추가해주면 eslint(warning 메시지) 잠시 끄기

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0); 
  let [modal, setModal] = useState(false);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      {/* <div className='list'>
        <h4>{글제목[0]} <span onClick={ () => { 따봉변경(따봉 + 1) }}>👍</span> {따봉}</h4>
        <p>2월 17일 발행</p>
      </div>   
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>  
      <div className='list'>
        <h4 onClick={() => { {setModal(!modal)} }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>   */}

      {/* 중괄호 안에 반복문 for은 못 씀... 대신 map() 사용 */}
      {
        글제목.map(function(a, i){  // 글제목 스테이트 개수만큼 생성해줘  // 파라미터는 array 안에 있던 데이터
          return(
          <div className='list'>
            <h4>{ a }</h4>
            <p>2월 17일 발행</p>
         </div> 
          )
        })
      }
   
      {
        modal == true ? <Modal></Modal> : null
      }



      
    </div>
  );
}


function Modal(){
  return(
    <div className='modal'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
     </div> 
  )
}



export default App;
