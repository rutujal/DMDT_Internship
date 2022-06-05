import React from 'react';
import "../write/Write.css";
import { useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';
import { Link } from 'react-router-dom';
import PDF from '../../components/PDF/print';

export default function Write() {
  let postSubmitted = false;

 
  const [fullName, setfullName] = useState("");
  const [PName, setPName] = useState("");
  const [address, setAddr] = useState("");
  
  const [caste, setCaste] = useState("");
  const [dob, setDOB] = useState("");
  


  const [ap, setAp] = useState("")
  const [ap1, setAP1] = useState("")
 
  const [vy, setVY] = useState("")

  const [rashan, setR] = useState("")
  const [adhar, setAdhar] = useState("")
  const [vote, setV] = useState("")
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newForm7 = {
      username: user.username,
     
      fullName,
      PName,
      address,
      caste,
      dob,
     ap,ap1,vy,rashan,adhar,vote


    };

    try {
      console.log("hello");
      const res = await axios.post("/form8", newForm7);
      console.log(res);
      postSubmitted = true;
      //console.log(postSubmitted);
      // console.log(name);

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





            <div className="col-md-4">
              <label for="inputPassword4" className="form-label">अर्जदाराचे नाव </label>
              <input type="text" className="input form control" onChange={e => setfullName(e.target.value)} />
            </div>

            
            
           
            <div className="col-md-4">
              <label for="inputCity" className="form-label">संपूर्ण पत्ता</label>
              <input className="input " type="text" name="occupation" onChange={e => setAddr(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputAddress" className="form-label">वार्षिक उत्पन्न  </label>
              <input className="input" type="text" name="father" placeholder="" onChange={e => setPName(e.target.value)} />
            </div>
           
            <div className="col-md-4">
              <label for="inputState" className="form-label">जात</label>
              <input className="input " type="text" name="caste" onChange={e => setCaste(e.target.value)} />

            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">जन्म तारीख </label>
              <input className="input " type="text" name="dob" onChange={e => setDOB(e.target.value)} />

            </div>
            
        
           

            <div className="col-md-4">
              <label for="inputState" className="form-label" ><div className="col-md-4">
                <label for="inputState" className="form-label" >अपंग आहे </label>

                <select className="input" name="s1" onChange={e => setAp(e.target.value)}>

                  <option>होय</option>
                  <option>नाही</option>

                </select>
              </div> </label>
              </div>
              <div className="col-md-4">
                <label for="inputCity" className="form-label">अपंगत्वाचे प्रमाण </label>
                <input className="input" type="number" name="pincode" onChange={e => setAP1(e.target.value)} />
              </div>
              

              
            <div className="col-md-4">
              <label for="inputState" className="form-label" >पती मयत असल्यास मयत दाखला	 जोडला आहे का ?  </label>

              <select className="input" name="s1" onChange={e => setVY(e.target.value)}>

                <option>होय</option>
                <option>नाही</option>

              </select>
            </div>
            
           

            <div className="col-md-4">
              <label for="inputCity" className="form-label">रेशन कार्ड नं.</label>
              <input className="input" type="number" name="pincode" onChange={e => setR(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">मतदान ओळखपत्र  क्र.</label>
              <input className="input" type="number" name="pincode" onChange={e => setV(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">आधार कार्ड क्रमांक</label>
              <input className="input" type="number" name="pincode" onChange={e => setAdhar(e.target.value)} />
            </div>
           
            

            <button style={{ backgroundColor: "#000080", color: "white", fontWeight: "40px", height: "40px" }} type="submit">Submit</button>
          </form>

        </div>) :
        <PDF  fullName={fullName}  />
      }
      <PDF fullName={fullName}  />
    </>

  );
}