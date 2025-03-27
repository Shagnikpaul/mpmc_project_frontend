import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currentCar, setCurrentCar] = useState("");
  const [history,setHistory]=useState([]);
  const carDataUpdate=async()=>{
    const backend=await fetch("");
    const data=await backend.json();
    setCurrentCar(data.currentCar);
    setHistory(data.history);
  }
  useEffect(()=>{
    carDataUpdate();
    const intervals=setInterval(carDataUpdate,500);
  },[]);
  const displayCurrentCar=()=>{
    if(currentCar){
      return currentCar;
    } else{
      return "No Car Detected";
    }
  }
  const carScanningHistory=()=>{
    if(history.length>0){
      return (
        <ul>{history.map((carno,index)=>(
          <li key={index}>{carno}</li>
        ))}
        </ul>
    );
  }
    else{
      return <p>No History</p>;
    }
  }
  return (
    <>
      <h2>Current Car Scanned</h2>
      <div id="current_car">{displayCurrentCar()}</div>
      <h2>Scanning History</h2>
      <div id="scanning_history">{carScanningHistory()}</div>

    </>
  )
}

export default App
