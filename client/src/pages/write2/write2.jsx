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
  const [s2, setS2] = useState("");
  const [fullName, setfullName] = useState("");
  const [fatherName, setfName] = useState("");
  const [occupation, setOcc] = useState("");
  const [village, setVil] = useState("");
  const [taluka, setTaluka] = useState("");
  const [state, setState] = useState("");
  const [district, setDist] = useState("");
  const [pincode, setPin] = useState("");
  const [school, setSchool] = useState("");
  const [standard, setStandard] = useState("");
  const [exam, setExam] = useState("");
  const [result, setResult] = useState("");
  const [gapF, setGapf] = useState("");
  const [gapT, setGapt] = useState("");
  const [s3,setS3]=useState("");
  const [fullname2,setfullName1]=useState("");
  const [village1,setVillage1]=useState("");
  const [taluka1,setTaluka1]=useState("");
  const [district1,setDist1]=useState("");
  const [state1,setState1]=useState("");
  const [pincode1,setPin1]=useState("")
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      age,
      s1,
      fullName,
      s2,
      fatherName,
      occupation,
      village,
      taluka,
      state,
      district,
      pincode,
      school,
      standard,
      exam,
      result,
      gapF,
      gapT,
      s3,state1,village1,district1,fullname2,pincode1,taluka1

    };

    try {
     
      const res = await axios.post("/gap", newPost);
      console.log(res);
      postSubmitted = true;
     
    
    } catch (err) {
      console.log(err);
    }

  };


  
  const history = useHistory();
   
  
  const AffidativePage = () => {
    history.push("Write")
}
const GapPage = () => {
  history.push("Write2")
}

  
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
                  <h3>GENERAL AFFIDAVIT</h3>
                </div>
              </div>
              <div className="col-md-3">
              <button className="button" onClick={GapPage}>Gap Certificate</button>
          
              <button className="button" onClick={AffidativePage}>Gharatle Koni Nokrila Nhi Affidavit</button>
          
              <button  className="button">
                    <Link  to="/write1">Maratha Caste Affidavit</Link></button>
        
            
              <button  className="button">
                    <Link  to="/write3">sarv marganni milnare utpannache affidavit</Link></button>
              
              </div>
              
            </div>
            <nav className="navbar navbar-light" style={{ backgroundColor: "#000080", height: "80px" }}>
              <div className="container-fluid">

                <Link style={{ color: "white" }} className="navbar-brand" >

                  GAP CERTIFICATE</Link>
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
              <label for="inputState" className="form-label" >Salutation</label>
              <select className="input" name="s2" onChange={e => setS2(e.target.value)}>
                <option selected></option>
                <option>Shri</option>
                <option>Miss</option>
                <option>Shrimati</option>
                <option>Kumari</option>
              </select>
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
              <input className="input" name="village" onChange={e => setVil(e.target.value)} />
               
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
              <label for="inputCity" className="form-label">Pincode</label>
              <input className="input" type="number" name="pincode" onChange={e => setPin(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Last Attended School/College</label>
              <input className="input" type="text" name="school" onChange={e => setSchool(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Standard</label>
              <input className="input " type="text" name="standard" onChange={e => setStandard(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Examination Year</label>
              <input className="input " type="number" name="examyear" onChange={e => setExam(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Result</label>
              <select className="input" name="result" onChange={e => setResult(e.target.value)}>
              <option>ATKT</option>
                <option>Pass</option>
                <option>Fail</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Gap Duration From</label>
              <input className="input" type="date" name="gapF" onChange={e => setGapf(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Gap Duration To</label>
              <input className="input" type="date" name="gapT" onChange={e => setGapt(e.target.value)}/>
            </div>
            
        
        
            <br />
            <div className="heading2 col-md-12" >
              <h3>WITNESS</h3>
            </div>

            <div className="col-md-4">
              <label for="inputState" className="form-label">Salutation</label>
              <select className="input" name="s3" onChange={e => setS3(e.target.value)}>
                <option selected></option>
                <option>Shri</option>
                <option>Miss</option>
                <option>Shrimati</option>
                <option>Kumari</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputPassword4" className="form-label">Full Name</label>
              <input className="input " type="text" name="fullname2" onChange={e => setfullName1(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Village</label>
              <input className="input" name="village1" onChange={e => setVillage1(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Taluka</label>
              <input className="input" name="taluka1" onChange={e => setTaluka1(e.target.value)}/>
               
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">State</label>
              <input className="input" name="state1" onChange={e => setState1(e.target.value)} />
               
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">District</label>
              <input className="input" name="district1" onChange={e => setDist1(e.target.value)}/ >
               
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Pincode</label>
              <input className="input " type="number" name="pincode1" onChange={e => setPin1(e.target.value)} />
            </div>


            <button classNameName="writeSubmit" type="submit">Publish</button>
          </form>

        </div>) :
        <PDF age={age} fullName={fullName} s1={s1} />
      }
      <PDF age={age} fullName={fullName} s1={s1} s2={s2} occupation={occupation} village={village} fatherName={fatherName} />
    </>

  );
}
