import './App.css';
import ChildComponent from './child.js';

function App() {
  const text = "팝샵 여러분 화이팅!";
  const sayHello = function(){
    return <h3>이 인테리어 너무 좋아 </h3>
  };
  const sayHello2 = function(){
    alert('안녕하세요');
  }
  return (
  <div> 
    <h1>안녕하세요!</h1> 
    <h2>{text}</h2>
    {sayHello()}
    <div onClick={sayHello2}>클릭해주세요</div>
    <ChildComponent name="팝샵" age={30}/>
    <ChildComponent name="스페이스" age={20}/>
    <ChildComponent name="황샘" age={40}/>
    <ChildComponent name="정샘" age={30}/>
    </div>
  );
}

export default App;
