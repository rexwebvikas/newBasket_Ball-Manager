import React, {useState} from 'react'
import ComposeTeam from './Components/ComposeTeam'
import FirstQuter from './Components/FirstQuter'
import './App.css';

function App() {

  const [show,setShow]= useState(0);
   const [errors,setErrors]= useState({});
  const [data,setData] = useState({
    fname:"",
    lname:"",
    height:"",
    position:"",
  })
   const [PlayerData, setPlayerData] = useState([])
   
  const [Player, setPlayer] = useState([]);
  // let props= {data,Player}
  return (
   
    <>
     <div className="App">
      <h1 style ={{backgroundColor:"black", color:"white"}}>BasketBall-Mannger</h1>
      <navbar id="navbar">

        {/* <div onClick ={()=>setShow(0)} className ="d1">Compose-Team</div> */}

        <div className="d1"><button onClick={()=>setShow(0)} className="d1">Compose-Team</button></div>
         <div className ="d1"><button disabled={PlayerData.length<=4} onClick={()=>setShow(1)}  className ="d1">First-Quter</button></div> 

        
      </navbar>

      {show == 0 && <ComposeTeam setShow ={setShow} data={data} setData={setData} PlayerData={PlayerData} setPlayerData={setPlayerData} errors={errors} setErrors={setErrors}/>}
      {show == 1 && <FirstQuter setShow ={setShow} data={data} setData={setData} PlayerData={PlayerData} setPlayerData={setPlayerData} Player={Player} setPlayer={setPlayer}/>}
    
     
    </div>
    </>
  );
}

export default App;

