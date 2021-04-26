import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from 'react-select';

const ComposeTeam = (props) => {

  // const [err,setErr] = useState(false)
  // const regexp = /^[0-9\b]+$/
  // const text = /^(?:[A-Za-z]+|\d+)$/

  const options =[
    {value: "Point_Guard" , label:"Point_Guard"},
    {value: "Shooting_Gurad" , label:"Shooting_Gurad"},
    {value: "Small_Guard", label:"Small_Guard"},
    {value: "Power_Forward", label:"Power_Forward"},
    {value: "The_Center", label:"The_Center"}
  ]

  console.log(props, "propssss")

  const handleChange = (e) => {

    const { name, value } = e.target;
    var letters = /^[A-Za-z]+$/;
    if(value==="" || value.match(letters)){
    props.setData({ ...props.data, [name]: value});}
  
  }

  const handleSubmit = (e) => {
    e.preventDefault();    
  }
  const Click = () => {
    if (props.data.fname != "" && props.data.lanme != "" && props.data.height != "" && props.data.position != "") {
      errorShow();
      if(props.data.height>=162 && props.data.height<=300)
      {
        props.PlayerData.push(props.data)
        let obj = { fname: "", lname: "", height: "", position: "" };
        props.setData(obj)
      }
      else{
      errorShow();
      }
    }
    else
    {
      
    }
 
    console.log("playerData", props.PlayerData)


  }
 
  const errorShow = () => {

    let errors = {};

    if (!props.data.fname) {
      errors.fname = "Enter First Name"
    }
    if (!props.data.lname) {
      errors.lname = "Enetr Last Name"
    }
    if (props.data.height==="") {
      errors.height = "Enter The height"
    }
    if (props.data.height != "" && (props.data.height < 162 || props.data.height > 304)) {
      errors.height = "Height Should be Between 162cms to 304cms"
  }
    if (!props.data.position) {
      errors.position = "Enetr the Position"
    }
       
    return (props.setErrors(errors))
  }

  const handleSelect =(e)=>{

         const data ={...props.data}
         console.log(e)
         data.position= e
         props.setData(data)
  }

  function hnadleHeight(e){
    var numbers = /^[-+]?[0-9]+$/;
    const { name, value } = e.target;
    if(value =="" || value.match(numbers)){
    props.setData({ ...props.data, [name]: value });}
    console.log(props.data, "dataaaaaa")
  }
  return (
    <>
      <div className="form">
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            label="FirstName"
            type="text"
            className="inputField"
            value={props.data.fname}
            name="fname"
            onChange={handleChange}
          />
          {props.errors.fname && <p style={{color:"red"}}>{props.errors.fname}</p>}
          <br></br>
          <TextField
            label="LastName"
            type="text"
            className="inputField"
            value={props.data.lname}
            name="lname"
            onChange={handleChange}
          />
          {props.errors.lname && <p style={{color:"red"}}>{props.errors.lname}</p>}
          <br></br>
          <TextField
            label="Height"
            type="text"
            name="height"
            className="inputField"
            InputProps={{ inputProps: { min: 152, max: 305 } }}
            placeholder="Enter Height (in cms)"

            value={props.data.height}
            onChange={hnadleHeight}
          />
          {props.errors.height && <p className="error" style={{color:"red"}}>{props.errors.height}</p>}
          <br></br> 
            <Select
             className="selectBox"
              options ={options}
              value ={props.data.position}
              name="position"
              onChange={(e)=>handleSelect(e)}
              placeholder="Select Position"
              isMulti
            />

          {props.errors.position && <p style= {{color:"red"}}>{props.errors.position}</p>}
          {props.PlayerData.length > 0 && <lable className="cong" style={{color:"green"}}>!Congrats {props.PlayerData.length} Playes has been added</lable>}

           <Button type="submit" onClick={() => Click()} variant="contained" color="primary" id="SubmitButton">
            Save
    </Button> 
        </form>
      </div>
    </>
  )

}

export default ComposeTeam;