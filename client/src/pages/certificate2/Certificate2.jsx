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
  const [pincode, setPin] = useState("");
  const [ic,setIc ] = useState("");
  const [ai,setAi ] = useState("");
  const [ic1,setIc1 ] = useState("");
  const [ai1,setAi1 ] = useState("");
  const [relation,setR ] = useState("");
  const [bname, setBname] = useState("");
  const [purpose,setP ] = useState("");
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCert2 = {
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
      ic,ai,ic1,ai1,relation,bname,purpose
    };

    try {
      console.log("hello");
      const res = await axios.post("/cert2", newCert2);
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
                  <h3>GENERAL AFFIDAVIT</h3>
                </div>
              </div>
              <div className="col-md-3">
              <button className="button"><Link  to="/cert1">APENDIX C/D HEIGHT CHEST CERTIFICATE</Link></button>
          
              <button className="button" ><Link  to="/cert2">Income Certificate</Link></button>
          
              
              </div>
            </div>
            <nav className="navbar navbar-light" style={{ backgroundColor: "#000080", height: "80px" }}>
              <div className="container-fluid">

                <Link style={{ color: "white" }} className="navbar-brand" >

                  NOKRILA NASLYABABAT CHE AFFIDAVIT</Link>
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
              <input className="input" type="number" name="pincode" onChange={e => setPin(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Income Certificate</label>
              <select className="input" name="ic"onChange={e => setIc(e.target.value)}>
                <option selected></option>
                <option>1 year Certifiacte</option>
                <option>3 year Certicate</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputPassword4" className="form-label">Annual Income</label>
              <input className="input " type="text" name="ai" onChange={e => setAi(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Income Certificate</label>
              <select className="input" name="ic1"onChange={e => setIc1(e.target.value)}>
                <option selected></option>
                <option>1 year Certifiacte</option>
                <option>3 year Certicate</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputPassword4" className="form-label">Annual Income</label>
              <input className="input " type="text" name="ai2" onChange={e => setAi1(e.target.value)}/>
            </div>
            
            <br />
            <div className="heading2 col-md-12" >
              <h3>Beneficiary Details</h3>
            </div>

            <div className="col-md-4">
              <label for="inputState" className="form-label">Relation With Applicant</label>
              <select className="input" name="relation" onChange={e => setR(e.target.value)}>
                <option selected></option>
                <option>Son</option>
                <option>Daughter</option>
                <option>Wife</option>
                <option>Father</option>
                <option>Nephew</option>
                <option>Sister</option>
                <option>Brother</option>
                <option>Mother</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputPassword4" className="form-label">Beneficiary Name</label>
              <input className="input " type="text" name="bname" onChange={e => setBname(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Purpose Of Certificate</label>
              <input className="input " type="text" name="purpose" onChange={e => setP(e.target.value)} />
             
            </div>
            


            <button style={{backgroundColor:"#000080",color:"white",fontWeight:"40px",height:"40px"}} type="submit">Submit</button>
          </form>

        </div>) :
        <PDF age={age} fullName={fullName} s1={s1} />
      }
      <PDF age={age} fullName={fullName} s1={s1}  occupation={occupation} village={village} fatherName={fatherName} />
    </>

  );
}
