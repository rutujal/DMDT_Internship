import React from 'react';
import "../write/Write.css";
import { useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';
import { Link } from 'react-router-dom';
import PDF from '../../components/PDF/print';

export default function Write() {
  let postSubmitted = false;

  const [age, setAge] = useState("");
  const [s1, setS1] = useState("");
  const [fullName, setfullName] = useState("");
  const [fatherName, setfName] = useState("");
  const [occupation, setOcc] = useState("");
  const [village, setVil] = useState("");
  const [taluka, setTal] = useState("");
  const [state, setStat] = useState("");
  const [district, setDist] = useState("");
  const [pincode, setPin] = useState("")
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newForm1 = {
      username: user.username,
      age,
      s1,
      fullName,
      fatherName,
      occupation,
      village,
      taluka,
      state,
      district,
      pincode,

    };

    try {
      console.log("hello");
      const res = await axios.post("/form1", newForm1);
      console.log(res);
      postSubmitted = true;
      console.log(postSubmitted);
      // console.log(name);
      console.log(age);
      // <PDF name={name} age={age}/>
      //window.location.replace("/pdf");


    } catch (err) {
      console.log(err);
    }

  };

  return (

    <>
      {!postSubmitted ?

        (<div>

          <form className="writeForm row g-3" onSubmit={handleSubmit} >
            <nav style={{ backgroundColor: "#000080" }} className="navbar navbar-light" >
              <div className="container-fluid">
                <Link className="navbar-brand link">MAHA<span className="ocolor">DIGITAL</span>PORTAL</Link>

                <div className="d-flex">
                  <button className="bclass">View Balance</button>

                  <input className="me-2" type="search" placeholder="Search" aria-label="Search" />

                </div>
              </div>

            </nav>
            <div className="row g-3">
              <div className="col-md-4">
                <div className="heading2">
                  <h3>DEPARTMENT OF VALIDITY</h3>
                </div>
              </div>
              <div className="col-md-3">
               
                <button className="button" style={{marginTop:"10px"}}>
                  <Link to="/form2" className='link'>Education(Form-3[1])</Link></button>

                <button className="button" style={{marginTop:"10px",marginLeft:"10px"}}>
                  <Link to="/form1" className='link'>Education(Form 17)</Link></button>
                  <button className="button" style={{marginTop:"10px"}}>
                  <Link to="/form6" className='link'>Service(Form 31)</Link></button>
              </div>  
              <div className="col-md-3" >
              <button className="button" style={{marginTop:"10px"}}>
                  <Link to="/form3" className='link'>Election(Form3[1])</Link></button>
              
                <button className="button" style={{marginTop:"10px",marginLeft:"10px"}}>
                  <Link to="/form4" className='link'>Election(Form 15)</Link></button>
                <button className="button" style={{marginTop:"10px"}}> 
                  <Link to="/form21" className='link'>Election(Form 21)</Link></button>
               


              </div>


            </div>
            <nav className="navbar navbar-light" style={{ backgroundColor: "#000080", height: "80px" }}>
              <div className="container-fluid">

                <Link style={{ color: "white" }} className="navbar-brand" >

                  FORM-3[1]</Link>
              </div>
            </nav>

            <div className="col-md-4">
              <label for="inputState" className="form-label" >Salutation</label>
              <select className="input" name="s1" onChange={e => setS1(e.target.value)}>
                <option selected></option>
                <option>Shri</option>
                <option>Miss</option>
                <option>Shrimati</option>
                <option>Kumari</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputPassword4" className="form-label">Full Name</label>
              <input type="text" className="input form control" onChange={e => setfullName(e.target.value)} />
            </div>

            <div className="col-md-4">
              <label for="inputAddress" className="form-label">Father Name</label>
              <input className="input" type="text" name="father" placeholder="" onChange={e => setfName(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputAddress2" className="form-label">Age</label>
              <input className="input" type="number" name="age" placeholder="" onChange={e => setAge(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Occupation</label>
              <input className="input " type="text" name="occupation" onChange={e => setOcc(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Village</label>
              <input className="input " type="text" name="village" onChange={e => setVil(e.target.value)} />

            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Taluka</label>
              <input className="input " type="text" name="taluka" onChange={e => setTal(e.target.value)} />

            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">State</label>
              <input className="input " type="text" name="state" onChange={e => setStat(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">District</label>
              <input className="input " type="text" name="district" onChange={e => setDist(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Pincode</label>
              <input className="input" type="number" name="pincode" onChange={e => setPin(e.target.value)} />
            </div>



            <button style={{backgroundColor:"#000080",color:"white",fontWeight:"40px",height:"40px"}} type="submit">Submit</button>
          </form>

        </div>) :
        <PDF age={age} fullName={fullName} s1={s1} />
      }
      <PDF age={age} fullName={fullName} s1={s1} occupation={occupation} village={village} fatherName={fatherName} />
    </>

  );
}