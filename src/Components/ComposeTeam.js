import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from 'react-select';
import { requirePropFactory } from '@material-ui/core';




const ComposeTeam = (props) => {

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

    props.setData({ ...props.data, [name]: value })
    console.log("data", props.data)
    // errorShow();



  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // errorShow();


  }
  const Click = () => {

    if (props.data.fname != "" && props.data.lanme != "" && props.data.height != "" && props.data.position != "") {

      props.PlayerData.push(props.data)
      let obj = { fname: "", lname: "", height: "", position: "" };
      props.setData(obj)

    }
    errorShow();
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
    if (!props.data.height) {
      errors.height = "Enter The height"
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
            value={props.data.height}
            onChange={handleChange}
          />
          {props.errors.height && <p style={{color:"red"}}>{props.errors.height}</p>}
          <br></br>
          {/* <select

            className="selectValue"
            value={props.data.position}
            name="position"
            onChange={handleChange}
            placeholder="Select-Position"
          >
            <option value="default" disabled select hidden>Select-Position</option>
            <option value="Point_Guard">Point Guard</option>
            <option value="Shooting_Gurad">Shooting Guard</option>
            <option value="Small_Guard">Small Guard</option>
            <option value="Power_Forward">Power Forward</option>
            <option value="The_Center">The Center</option>
          </select> */}
            
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



          <Button type="submit" onClick={() => Click()} variant="contained" color="primary" id="SubmitButton">
            Save
    </Button>

        </form>


      </div>

    </>
  )

}

export default ComposeTeam;