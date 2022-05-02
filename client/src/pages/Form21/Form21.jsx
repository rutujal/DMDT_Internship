import React, { useRef } from 'react';
import "../write/Write.css";
import { useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';
import { Link,useHistory } from 'react-router-dom';
import PDF from '../../components/PDF/print';




export default function Write() {
  let postSubmitted = false;

  const [age, setAge] = useState("");
  const [s1, setS1] = useState("");
  const [fullName, setfullName] = useState("");
  const [occupation, setOcc] = useState("");
  const [village, setVil] = useState("");
  const [taluka, setTaluka] = useState("");
  const [state, setState] = useState("");
  const [district, setDist] = useState("");
  const [date, setDate] = useState("");
  const [election, setElection] = useState("");
  const [organization, setOrganization] = useState("");
  const [caste, setCaste] = useState("");
  const [pincode, setPin] = useState("");
  const [certificate ,setCertificate] = useState("");
  const [s2, sets2] = useState("");
  const [cdate, setCdate] = useState("");
  const [area, setArea] = useState("");
  const [autho, setAutho] = useState("");
  const [authoDate, setAdate] = useState("");

  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      age,
      s1,
      fullName,
      occupation,
      village,
      taluka,
      state,
      district,
      pincode,
      caste,
      date,
      election,
      organization,
      certificate,
      cdate,
      area,
     autho,
     authoDate
    };

    try {
     
      const res = await axios.post("/form21", newPost);
      console.log(res);
      postSubmitted = true;
     
    
    } catch (err) {
      console.log(err);
    }

  };

  const history = useHistory();
   
  

  
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
                  <h3>CERTIFICATE</h3>
                </div>
              </div>
              
              
            </div>
            <nav className="navbar navbar-light" style={{ backgroundColor: "#000080", height: "80px" }}>
              <div className="container-fluid">

                <Link style={{ color: "white" }} className="navbar-brand" >

                  Form 21</Link>
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
              <input type="text" name="fullName" className="input form control" onChange={e => setfullName(e.target.value)} />
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
              <input className="input" name="village" onChange={e => setVil(e.target.value)}/ >
               
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Taluka</label>
              <input className="input" name="taluka" onChange={e => setTaluka(e.target.value)}/>
              
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">State</label>
              <input className="input" name="state" onChange={e => setState(e.target.value)}/>
               
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">District</label>
              <input className="input" type="text" name="district" onChange={e => setDist(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Date</label>
              <input className="input" type="date" name="date" onChange={e => setDate(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Pincode</label>
              <input className="input" type="number" name="pincode" onChange={e => setPin(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Election For-</label>
              <input className="input" type="text" name="election" onChange={e => setElection(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Organization</label>
              <input className="input" type="text" name="organization" onChange={e => setOrganization(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Caste Category</label>
              <input className="input" type="text" name="caste" onChange={e => setCaste(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Certificate Onward No.</label>
              <input className="input" type="text" name="certificate" onChange={e => setCertificate(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Salutation</label>
              <input className="input" type="text" name="s2" onChange={e => sets2(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Certificate Issue Date</label>
              <input className="input" type="date" name="cdate" onChange={e => setCdate(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Elected Area</label>
              <input className="input" type="text" name="area" onChange={e => setArea(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Issuing Authority</label>
              <input className="input" type="text" name="autho" onChange={e => setAutho(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Issuing Authority Division</label>
              <input className="input" type="text" name="authoDate" onChange={e => setAdate(e.target.value)}/>
            </div>

            <button style={{backgroundColor:"#000080",color:"white",fontWeight:"40px",height:"40px"}} type="submit">Submit</button>
          </form>

        </div>) :
        <PDF age={age} fullName={fullName} s1={s1} />
      }
      <PDF age={age} fullName={fullName} s1={s1} s2={s2} occupation={occupation} village={village}  />
    </>

  );
}
