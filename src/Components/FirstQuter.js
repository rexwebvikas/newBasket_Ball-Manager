
import React ,{useState}from 'react';
import Button from '@material-ui/core/Button';

const FirstQuter =(props)=>{

    const[input1 , setInput1] = useState(0)
    const[input2 , setInput2] = useState(0)
    const[input3 , setInput3] = useState(0)
    const[input4 , setInput4] = useState(0)
    const[input5 , setInput5] = useState(0)  
    const [finalPlayer, setfinalPlayer] = useState({
        name1: "", name2: "", name3: "", name4: "", name5: "", position1: "", position2: "", position3: "", position4: "", position5: ""
    })

    const handleChange =(e) =>{

        const filter = props.PlayerData.findIndex((i)=>{return(e.target.value.includes(i.fname)&& e.target.value.includes(i.lname) && e.target.value.includes(i.id))})
        console.log("filter",filter)

        setInput1(filter)
        setfinalPlayer((datas)=>({...datas, [e.target.name]: e.target.value}))
    
    
    }

    const handleChange1 =(e) =>{

        setfinalPlayer((datas)=>({...datas, [e.target.name]: e.target.value}))

        const filter = props.PlayerData.findIndex((i)=>{return(e.target.value.includes(i.fname)&& e.target.value.includes(i.lname) && e.target.value.includes(i.id))})
        console.log("filter",filter)

        setInput2(filter)

    }

    const handleChange2 =(e) =>{

        setfinalPlayer((datas)=>({...datas, [e.target.name]: e.target.value}))
        const filter = props.PlayerData.findIndex((i)=>{return(e.target.value.includes(i.fname)&& e.target.value.includes(i.lname) && e.target.value.includes(i.lname) && e.target.value.includes(i.id))})
        console.log("filter",filter)
        setInput3(filter)
    }

    const handleChange3 =(e) =>{

        setfinalPlayer((datas)=>({...datas, [e.target.name]: e.target.value}))
        const filter = props.PlayerData.findIndex((i)=>{return(e.target.value.includes(i.fname)&& e.target.value.includes(i.lname)  && e.target.value.includes(i.lname) && e.target.value.includes(i.id))})
        console.log("filter",filter)
        setInput4(filter)
    }

    const handleChange4 =(e) =>{

        setfinalPlayer((datas)=>({...datas, [e.target.name]: e.target.value}))
        const filter = props.PlayerData.findIndex((i)=>{return(e.target.value.includes(i.fname)&& e.target.value.includes(i.lname) && e.target.value.includes(i.id))})
        console.log("filter",filter)
        setInput5(filter)
    }


      const HandleChangeSelect =(e)=>{

        setfinalPlayer((datas)=>({...datas,[e.target.name]: e.target.value}))
      }
    let error1 = "", error2 ="",error3="",error4="",error5 ="",error6="",error7="",error8="",error9="",error10=""

    let condition =""
    condition = error1 || error2 || error3 || error4 || error5 

    let condition1 =""
    
    condition1 = error6 || error7 || error8 || error9 || error10


    if(finalPlayer.name1){

        error1 = finalPlayer.name1 == finalPlayer.name2 ||
              finalPlayer.name1 == finalPlayer.name3 || 
              finalPlayer.name1 == finalPlayer.name4 ||
              finalPlayer.name1 == finalPlayer.name5
    }
    if(finalPlayer.name2){

        error2 = finalPlayer.name2 == finalPlayer.name1 ||
           finalPlayer.name2 == finalPlayer.name3 ||
           finalPlayer.name2 == finalPlayer.name4 ||
           finalPlayer.name2 == finalPlayer.name5
    }
    if(finalPlayer.name3){

        error3 =finalPlayer.name3 == finalPlayer.name1 ||
        finalPlayer.name3 == finalPlayer.name2 ||
        finalPlayer.name3 == finalPlayer.name4 ||
        finalPlayer.name == finalPlayer.name5
    }
    if(finalPlayer.name4){

        error4 = finalPlayer.name4 == finalPlayer.name1 ||
         finalPlayer.name4 == finalPlayer.name2 ||
         finalPlayer.name4 == finalPlayer.name3 ||
          finalPlayer.name4 == finalPlayer.name5
    }

    if(finalPlayer.name5){

        error5 = finalPlayer.name5 == finalPlayer.name1 ||
        finalPlayer.name5 == finalPlayer.name2 ||
        finalPlayer.name5 == finalPlayer.name3 || 
        finalPlayer.name5 == finalPlayer.name4 
    }

    if(finalPlayer.position1){

        error6 = finalPlayer.position1 == finalPlayer.position2 ||
        finalPlayer.position1 == finalPlayer.position3 ||
        finalPlayer.position1 == finalPlayer.position4 ||
        finalPlayer.position1  == finalPlayer.postion5
    }

    if(finalPlayer.position2){

        error7 = finalPlayer.position2 == finalPlayer.position1 ||
        finalPlayer.position2 == finalPlayer.position3 ||
        finalPlayer.position2 == finalPlayer.position4 ||
        finalPlayer.position2  == finalPlayer.postion5
    }
    
    if(finalPlayer.position3){

        error8 = finalPlayer.position3 == finalPlayer.position1 ||
        finalPlayer.position3 == finalPlayer.position2 ||
        finalPlayer.position3 == finalPlayer.position4 ||
        finalPlayer.position3  == finalPlayer.postion5
    }
    if(finalPlayer.position4){

        error9 = finalPlayer.position4 == finalPlayer.position1 ||
        finalPlayer.position4 == finalPlayer.position2 ||
        finalPlayer.position4 == finalPlayer.position3 ||
        finalPlayer.position4  == finalPlayer.postion5
    }
    if(finalPlayer.position5){

        error10 = finalPlayer.position5 == finalPlayer.position1 ||
        finalPlayer.position5 == finalPlayer.position2 ||
        finalPlayer.position5 == finalPlayer.position4 ||
        finalPlayer.position5  == finalPlayer.postion3
    }
    return(

        <>
            <div className="Form">
                <div>
                    <select
                   
                    className ={error1 ? "selError" : "sel"}
                     name="name1" 
                     onChange={handleChange} >
                    <option value="Select..." disabled hidden selected>Select...</option>
                    {props.PlayerData.length > 0 ? props.PlayerData.map((i) => { return <option value={`${i.fname}${i.lname}${i.id}`}>{i.fname} {i.lname}</option> }) : null}
                    </select>
                    <select
                     name="name2"
                    className ={error2 ? "selError" : "sel"}
                    onChange={handleChange1} 
                       >
                        <option value="Select..." disabled hidden selected>Select...</option>
                        {props.PlayerData.length > 0 ? props.PlayerData.map((i) => { return <option value={`${i.fname}${i.lname}${i.id}`}>{i.fname} {i.lname}</option> }) : null}
                    </select>
                    <select
                     name="name3"
                    className ={error3 ? "selError" : "sel"}
                        onChange={handleChange2}
                         >
                        <option value="Select..." disabled hidden selected>Select...</option>
                        {props.PlayerData.length > 0 ? props.PlayerData.map((i) => { return <option value={`${i.fname}${i.lname}${i.id}`}>{i.fname} {i.lname}</option> }) : null}
                    </select>
                    <select
                     name="name4" 
                    className ={error4 ? "selError" : "sel"}
                        onChange={handleChange3}
                         >
                        <option value="Select..." disabled hidden selected>Select...</option>
                        {props.PlayerData.length > 0 ? props.PlayerData.map((i) => { return <option value={`${i.fname}${i.lname}${i.id}`}>{i.fname} {i.lname}</option> }) : null}
                    </select>
                    <select
                     name="name5"
                    className ={error5 ? "selError" : "sel"}
                       onChange={handleChange4}
                        >
                        <option value="Select..." disabled hidden selected>Select...</option>
                        {props.PlayerData.length > 0 ? props.PlayerData.map((i) => { return <option value={`${i.fname}${i.lname}${i.id}`}>{i.fname} {i.lname}</option> }) : null}
                    </select>

                    
 
                     { console.log(condition,"condition11111") && condition ? <p className="error">[**Player Already Selected]</p> : null} 
                    {console.log("props.PlayerData", props.PlayerData)}
                </div>


                <div className="Position" style={{ borderLeft: "2px black solid", width: "50%", }}>
                    <select 
                     name="position1" 
                    className ={error6 ? "selError" : "sel"}
                        onChange={HandleChangeSelect}
                     
                         >
                        <option  value={props.PlayerData.position1} selected disabled hidden>Select...</option>
                        {props.PlayerData.length > 0 ? props.PlayerData[input1].position.map((i) => { return <option>{i.value}</option> }) : null}
                   
                    </select>
                    <select
                     name="position2" 
                    className ={error7 ? "selError" : "sel"}
                        onChange={HandleChangeSelect}
                         >
                        <option  value={props.PlayerData.position2} selected disabled hidden>Select...</option>
                        {props.PlayerData.length > 0 ? props.PlayerData[input2].position.map((i) => { return <option>{i.value}</option> }) : null}
                   
                    </select>
                    <select
                     name="position3"
                     className ={error8 ? "selError" : "sel"}
                       onChange={HandleChangeSelect}
                        >
                        <option  value={props.PlayerData.position3}selected disabled hidden>Select...</option>
                        {props.PlayerData.length > 0 ? props.PlayerData[input3].position.map((i) => { return <option>{i.value}</option> }) : null}
                     
                     </select>
                    <select
                     name="position4"
                    className ={error9 ? "selError" : "sel"}
                       onChange={HandleChangeSelect}
                        >
                        <option  value={props.PlayerData.position2} selected disabled hidden>Select...</option>
                        {props.PlayerData.length > 0 ? props.PlayerData[input4].position.map((i) => { return <option>{i.value}</option> }) : null}
                    
                    </select>
                    <select 
                    name="position5"
                    className ={error10 ? "selError" : "sel"}
                      onChange={HandleChangeSelect}
                       >
                        <option  value={props.PlayerData.position1} selected disabled hidden>Select...</option>
                        {props.PlayerData.length > 0 ? props.PlayerData[input5].position.map((i) => { return <option>{i.value}</option> }) : null}
                   
                    </select>
                    {/* {condition1 && <p className="error">[**Multiple players can't can play at Same Position]</p>} */}


                    <div className="p2error"> <div className="div1"> {condition && <p className="error">**Input feilds are same</p>}
                </div>
                    <div className="div2"> {
                        condition1 && <p className="error">**Cannot Add Same Player for Multiple Position</p>} </div></div>









                </div>
                
            <div>
                 <Button className="Next" variant="contained" color="primary">Save</Button>
            </div>
        </div>

        </>
    )
}


export default FirstQuter 