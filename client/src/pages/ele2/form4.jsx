import React from 'react';
import "../write/Write.css";
import { useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';
import { Link } from 'react-router-dom';
import PDF from '../../components/PDF/print';

export default function Write() {
  let postSubmitted = false;

  const [efor,setEfor ] = useState("");
  const [org1, setOrg1] = useState("");
  const [edate,setEdate ] = useState("");
  const [ndate,setNdate ] = useState("");
  const [s, setS] = useState("");
  const [cname,setCname ] = useState("");
  const [earea,setEarea ] = useState("");
  const [caste,setCaste ] = useState("");
  const [org2, setOrg2] = useState("");
  
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newForm4= {
      username: user.username,
     efor,org1,edate,ndate,s,cname,earea,caste,org2
     
    };

    try {
      console.log("hello");
      const res = await axios.post("/form4", newForm4);
      console.log(res);
      postSubmitted = true;
      console.log(postSubmitted);
      // console.log(name);
     // console.log(age);
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
                <select className="input" name="inputState">
                  <option selected className="sinput">Eduacation</option>
                  <option className="sinput">Election</option>
                  <option className="sinput">Service</option>
                 
                </select>
                <div className="col-md-3">
                <select className="input" name="inputState">
                  <option selected className="sinput">Form17</option>
                  <option className="sinput">Form-3[1]</option>
                  
                 
                </select>
              </div>
              </div>
            </div>
            <nav className="navbar navbar-light" style={{ backgroundColor: "#000080", height: "80px" }}>
              <div className="container-fluid">

                <Link style={{ color: "white" }} className="navbar-brand" >

                  FORM-3[1]</Link>
              </div>
            </nav>

            <div className="col-md-4">
              <label for="inputState" className="form-label" >Election For</label>
              <select className="input" name="efor" onChange={e => setEfor(e.target.value)}>
                <option selected>Grampanchayat</option>
                <option>Municipal Council</option>
                <option>Muncipality</option>
                <option>Municipal Corporation</option>
                <option>Panchayat Samiti</option>
                <option>Zilla Parishad</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputPassword4" className="form-label">Organization</label>
              <input type="text" className="input form control" onChange={e => setOrg1(e.target.value)} />
            </div>
           
            <div className="col-md-4">
              <label for="inputAddress" className="form-label">Election Held On Date</label>
              <input className="input" type="date" placeholder="" onChange={e => setEdate(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputAddress2" className="form-label">Notice Published Date</label>
              <input className="input" type="date"  placeholder="" onChange={e => setNdate(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label" >Salutation</label>
              <select className="input" name="s1" onChange={e => setS(e.target.value)}>
                <option selected></option>
                <option>Shri</option>
                <option>Miss</option>
                <option>Shrimati</option>
                <option>Kumari</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Contestant Name</label>
              <input className="input " type="text"  onChange={e => setCname(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Elected Area</label>
              <input className="input " type="text" onChange={e => setEarea(e.target.value)} />
            
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Caste</label>
              <input className="input " type="text" onChange={e => setCaste(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Organization</label>
              <input className="input " type="text"  onChange={e => setOrg2(e.target.value)} />
            </div>
            


            <button style={{backgroundColor:"#000080",color:"white",fontWeight:"40px",height:"40px"}} type="submit">Submit</button>
          </form>

        </div>) :
        <PDF  />
      }
      <PDF />
    </>

  );
}