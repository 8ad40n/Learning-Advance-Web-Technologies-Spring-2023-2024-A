import './App.css';
import Test from './test';

function App() {
  // const [count, setCount] = useState(0)
  const a = [];
  for (let i = 1; i <= 5; i++) {
    a.push(<Test/>);
  }


  return (
    <>
      {/* {
        ()=>{
          let a=[];
          for(let i=0;i<5;i++)
          {
            a.push(<Test/>);
          }        
          return a;  
        }
      } */}
      {a}
      
    </>
  )
}

export default App
