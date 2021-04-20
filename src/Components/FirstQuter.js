import React, { useState, useEffect } from 'react';


const FirstQuter = (props) => {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState();
    const [input3, setInput3] = useState();
    const [input4, setInput4] = useState();
    const [input5, setInput5] = useState();
    const [verfie ,setVerifie] = useState([]);
    console.log(verfie.position1,"verfie name")
    console.log(verfie.name2,"verfie.name2")
    // const [error, setError] = useState({});
  //const [show1, setShow1] = useState(false);




    const handleChange = (e) => {
        const { name, value } = e.target;
        props.setPlayer({ ...props.Player, [name]: value })

         const index = props.PlayerData.findIndex((value1) => { return (value.includes(value1.fname) && value.includes(value1.lname) && value.includes(value1.position)) })

        let arr = { ...props.Player }
        let array = { ...verfie}

        if (name == "name1") {

            arr.name1 = value;
            array.name1 = value;
            arr.position1 ="defualt"
            setVerifie(array)
            props.setPlayer(arr)
             setInput1(index)
        }
        if (name == "name2") {

            arr.name2 = value;
            array.name2 = value;
            arr.position2 ="defualt"
            setVerifie(array)
            props.setPlayer(arr)
             setInput2(index)
        }

        if (name == "name3") {

            arr.name3 = value;
            array.name3 = value;
            arr.position3 ="defualt"
            setVerifie(array)
            props.setPlayer(arr)
             setInput3(index)
        }

        if (name == "name4") {

            arr.name4 = value;
            array.name4 = value;
            arr.position4 ="defualt"
            setVerifie(array)
            props.setPlayer(arr)
             setInput4(index)
        }

        if (name == "name5") {

            arr.name5 = value;
            array.name5 = value;
            arr.position5 ="defualt"
            setVerifie(array)
            props.setPlayer(arr)
             setInput5(index)
        }


    }



    const handleChange1 = (e) => {
        const { name, value } = e.target;
        props.setPlayer({ ...props.Player, [name]: value });

        let array = { ...verfie}


        if (name == "position1") {
            array.position1 = value;
            setVerifie(array);
        
        };
        if (name == "position2") {

            array.position2 = value;
            setVerifie(array);
        };
        if (name == "position3") {
            array.position3 = value;
            setVerifie(array);
        };
        if (name == "position4") {

            array.position4 = value;
            setVerifie(array);

        }
        if (name == "position5") {

            array.position5 = value;
            setVerifie(array)
        }
    }

    useEffect(() => {
        let arr = {
            name1: "",
            name2: "",
            name3: "",
            name4: "",
            name5: "",
            position1: "defualt",
            position2: "defualt",
            position3: "defualt",
            position4: "defualt",
            position5: "defualt"
        }
        props.setPlayer(arr)
        console.log(arr,"Player Data name")
    }, [])


    // let Select = props.PlayerData.map((value) => {
    //     { return value.position }
    // })



    let condition = (props.Player.name1 && props.Player.name2 && props.Player.name2 == props.Player.name1 ||
        props.Player.name3 && props.Player.name1 && props.Player.name3 == props.Player.name1 ||
        props.Player.name1 && props.Player.name4 && props.Player.name4 == props.Player.name1 ||
        props.Player.name1 && props.Player.name5 && props.Player.name5 == props.Player.name1 ||
        props.Player.name3 && props.Player.name2 && props.Player.name3 == props.Player.name2 ||
        props.Player.name4 && props.Player.name2 && props.Player.name4 == props.Player.name2 ||
        props.Player.name3 && props.Player.name4 && props.Player.name4 == props.Player.name3 ||
        props.Player.name4 && props.Player.name5 && props.Player.name4 == props.Player.name5 ||
        props.Player.name5 && props.Player.name2 && props.Player.name5 == props.Player.name2 ||
        props.Player.name3 && props.Player.name5 && props.Player.name5 == props.Player.name3)


console.log("props.Player.position1 ",props.Player.position1)


    let condition1 = ((props.Player.position1 != "" && props.Player.position2 != "" && props.Player.position2 == props.Player.position1) ||
    (props.Player.position3 != "" && props.Player.position1 != "" && props.Player.position3 == props.Player.position1) ||
    (props.Player.position1 != "" && props.Player.position4 != "" && props.Player.position4 == props.Player.position1) ||
    (props.Player.position1 != "" && props.Player.position5 != "" && props.Player.position5 == props.Player.position1) ||
    (props.Player.position3 != "" && props.Player.position2 != "" && props.Player.position3 == props.Player.position2) ||
    (props.Player.position4 != "" && props.Player.position2 != "" && props.Player.position4 == props.Player.position2) ||
    (props.Player.position3 != "" && props.Player.position4 != "" && props.Player.position4 == props.Player.position3) ||
    (props.Player.position4 != "" && props.Player.position5 != "" && props.Player.position4 == props.Player.position5) ||
    (props.Player.position5 != "" && props.Player.position2 != "" && props.Player.position5 == props.Player.position2) ||
    (props.Player.position3 != "" && props.Player.position5 != "" && props.Player.position5 == props.Player.position3))

    console.log("props.Player.position1 ",condition1)


    // let condition1 =((props.Player.position == props.Player.position1 && props.Player.position == props.Player.position2 && props.Player.position == props.Player.position3 && props.Player.position == props.Player.position4 && props.Player.position == props.Player.position5 ||
    //     props.Player.position2 == props.Player.position && props.Player.position2 == props.Player.position3 && props.Player.position2 == props.Player.position4 && props.Player.position2 == props.Player.position5 ||
    //     props.Player.position3 == props.Player.position && props.Player.position3  == props.Player.position2 && props.Player.position3 == props.Player.position4 && props.Player.position3 == props.Player.position5 ||
    //     props.Player.position4 == props.Player.position && props.Player.position4 == props.Player.position2 && props.Player.position4 == props.Player.position3 && props.Player.position4 == props.Player.position5 ||
    //     props.Player.position5 == props.Player.position && props.Player.position5 == props.Player.position2 && props.Player.position5 == props.Player.position3 && props.Player.position5 == props.Player.position4))


console.log(props.PlayerData,"playerdataaaaaaaaaaaaaaaaaaaaaaaaaaaa")

    return (

        <>
            <form>
                <div>
                    <select 
                        className ={((verfie.name1 && (verfie.name1 == verfie.name2 || verfie.name1 == verfie.name3 || verfie.name1 == verfie.name4 || verfie.name1 == verfie.name5))),"selectValue"}
                        onChange={handleChange}
                        label="name"
                        name="name1"
                        placeholder="Select Player">
                        <option value="" disabled hidden selected>Select Player</option>
                        {props.PlayerData.map((value) => { return  (

                            
                            <option value={`${value.fname}${value.lname} ${value.position}`} > {value.fname} {value.lname}</option>) })
                            
                            }

                    </select>
                    
                    
                    <select
                         className={((verfie.position1) && (verfie.position1 == verfie.position2 || verfie.position1 == verfie.position3 || verfie.position1 == verfie.position4 || verfie.position1 == verfie.position5)),"selectValue"}
                       
                        
                        onChange={e => handleChange1(e)}
                        label="position"
                        name="position1"
                        value={props.PlayerData.position1}
                        placeholder="Select Position" >
                        <option value="defualt" disabled hidden selected>Select Position</option>

{/* {console.log('props.PlayerData.position',props.PlayerData[0].position)} */}
                       { props.PlayerData && props.PlayerData[0].position.map((val) => {  return <option>{val.value}</option> } )} 
                    {console.log(props.PlayerData[0].position,"Playerdtataaaa")}  

                    {/* {props.playerData[0].position.map((val,index)=>{if(index == input1){return <option>{val.value}</option>}})} */}
 

                    </select>

                </div>
                <div>
                    <select
                         className={((verfie.name2 && (verfie.name2 == verfie.name1 || verfie.name2 == verfie.name3 || verfie.name2 == verfie.name4 || verfie.name2 == verfie.name5))),"selectValue"}
                           
                        onChange={handleChange}
                        label="name"
                        name="name2"
                        placeholder="Select Player">
                        <option value="" disabled hidden selected>Select Player</option>
                        {props.PlayerData.map((value) => { return (<option value={`${value.fname}${value.lname} ${value.position}`} > {value.fname} {value.lname}</option>) })}

                    </select>
                    <select
                         className={(verfie.position2 && (verfie.position2 == verfie.position1 || verfie.position2 == verfie.position3 || verfie.position2 == verfie.position4 || verfie.position2 == verfie.position5)),"selectValue"}

                        onChange={e => handleChange1(e)}
                        label="position"
                        name="position2"
                        value={props.PlayerData.position2}
                        placeholder="Select Position" >
                        <option value="" disabled hidden selected>Select Position</option>


                        {/* {props.PlayerData.map((value, index) => { if (index == input2) { return <option>{value.position2}</option> } })} */}
                    
                    
                         { props.PlayerData && props.PlayerData[0].position.map((val) => {  return <option>{val.value}</option> } )}  
                     

                        {/* {props.playerData[0].position.map((val,index)=>{if(val == input2){return <option>{val.value}</option>}})} */}
                    
                    </select>

                </div>
                <div>
                    <select
                         className={((verfie.name3 && (verfie.name3 == verfie.name1 || verfie.name3 == verfie.name4 || verfie.name3 == verfie.name5 || verfie.name3 == verfie.name2))),"selectValue"}
                       
                        
                        onChange={handleChange}
                        label="name"
                        name="name3"
                        placeholder="Select Player">
                        <option value="" disabled hidden selected>Select Player</option>
                        {props.PlayerData.map((value) => { return (<option value={`${value.fname}${value.lname} ${value.position}`} > {value.fname} {value.lname}</option>) })}

                    </select>
                    <select
                         className={(verfie.position3 && (verfie.position3 == verfie.position1 || verfie.position3 == verfie.position2 || verfie.position3 == verfie.position4 || verfie.position3 == verfie.position5)),"selectValue"}

                        onChange={e => handleChange1(e)}
                        label="position"
                        name="position3"
                        value={props.PlayerData.position3}
                        placeholder="Select Position" >
                        <option value="" disabled hidden selected>Select Position</option>

                        {/* {props.PlayerData.map((value, index) => { if (index == input3) { return <option>{value.position3}</option> } })} */}
                   
                   
                         { props.PlayerData && props.PlayerData[0].position.map((val) => {  return <option>{val.value}</option> } )}  
                      

                        {/* {props.playerData[0].position.map((val,index)=>{if(val == input3){return <option>{val.value}</option>}})} */}
                    </select>

                </div>
                <div>
                    <select
                        
                       
                        className ={((verfie.name4 && (verfie.name4 == verfie.name1 || verfie.name4 == verfie.name2 || verfie.name4 == verfie.name3 || verfie.name4 == verfie.name5))),"selectValue"}
                        onChange={handleChange}
                        label="name"
                        name="name4"
                        placeholder="Select Player">
                        <option value="" disabled hidden selected>Select Player</option>
                        {props.PlayerData.map((value) => { return (<option value={`${value.fname}${value.lname}${value.position}`} > {value.fname} {value.lname}</option>) })}

                    </select>
                    <select
                         className={(verfie.position4 && (verfie.position4 == verfie.position1 || verfie.position4 == verfie.position2 || verfie.position4 == verfie.position3 || verfie.position4 == verfie.position5)),"selectValue"}
                         value={props.PlayerData.position4}
                        onChange={e => handleChange1(e)}
                        label="position"
                        name="position4"

                        placeholder="Select Position" >
                        <option value="" disabled hidden selected>Select Position</option>


                        {/* {props.PlayerData.map((value, index) => { if (index == input4) { return <option>{value.position4}</option> } })} */}
                   
                         { props.PlayerData && props.PlayerData[0].position.map((val) => {  return <option>{val.value}</option> } )}  
                    
                    
                        {/* {props.playerData[0].position.map((val,index)=>{if(val == input4){return <option>{val.value}</option>}})} */}
                    
                    </select>

                </div>
                <div>
                    <select
                    
                        
                         className ={((verfie.name5 && (verfie.name5 == verfie.name1 || verfie.name5 == verfie.name2 || verfie.name5 == verfie.name3 || verfie.name5 == verfie.name4))),"selectValue"}
                        onChange={handleChange}
                        label="name"
                        name="name5"
                        placeholder="Select Player">
                        <option value="" disabled hidden selected>Select Player</option>
                        {props.PlayerData.map((value) => { return (<option value={`${value.fname}${value.lname} ${value.position}`} > {value.fname} {value.lname}</option>) })}

                    </select>
                    <select
                         className={(verfie.position5 && (verfie.position5 == verfie.position1 || verfie.position5 == verfie.position2 || verfie.position5 == verfie.position3 || verfie.position5 == verfie.position4)),"selectValue"}
                        onChange={e => handleChange1(e)}
                        label="position"
                        name="position5"
                        value={props.PlayerData.position5}
                        placeholder="Select Position" >
                        <option value="default" disabled hidden selected>Select Position</option>


                        {/* {props.PlayerData.map((value, index) => { if (index == input5) { return <option>{value.position5}</option> } })} */}
                   
                        { props.PlayerData && props.PlayerData[0].position.map((val) => {  return <option>{val.value}</option> } )}  
                   
                        {/* {props.playerData[0].position.map((val,index)=>{if(val == input5){return <option>{val.value}</option>}})}
                    */}
                    </select>

                </div>
                 <div className="p2error"> <div className="div1"> {condition && <p className="error" style={{color:"red"}}>**This User Already Exit</p>}
                </div>
                     <div className="div2"> {
                        condition1 && <p className="error" style={{color:"red"}}>**Cannot Add Same Player for Multiple Position</p>} </div>  
                        </div>

                {/* {error.name && <p className="error">{error.name}</p>} */}
                {/* {(show1 && !condition3 && !condition && !condition2) && <p className="submit ">Players has been selected for First Quarter</p>}
                {(show1 && condition3) && <p className="error ">**Must have to select 5 player for the First Quarter</p>}  */}

            </form>
        </>
    )

}
export default FirstQuter;