import './App.css';
// import './Style.css'
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("home");
  let content = null;
  let modevar = "home";
  if(modevar === "home") {
    content = <div>반갑습니다</div>
  }else if(modevar === "page") {
    content = <div>페이지 입니다.</div>
  }
  // lists 배열안에 객체들이 담김
  const lists = [
    {
      id: 1,
      title: 'menu1'
    },
    {
      id: 2,
      title: 'menu2'
    },
    {
      id: 3,
      title: 'menu3'
    },
    {
      id: 4,
      title: 'menu4'
    }
  ]
  return (
    <div className="App">
      {content}
      <button onClick={() => {
        modevar="page"
        console.log(modevar)
        }}>모드 변경</button>
      <Header lists={lists}/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App;
