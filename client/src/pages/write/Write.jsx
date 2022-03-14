import React from 'react';
import "./Write.css";
import { useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';
import { Link } from 'react-router-dom';
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
      village
    };

    try {
      console.log("hello");
      const res = await axios.post("/posts", newPost);
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
                <select className="input" name="inputState">
                  <option selected className="sinput">Gap Certificate</option>
                  <option className="sinput">Maratha Caste Affidative</option>
                  <option className="sinput"></option>
                  <option className="sinput">A</option>
                </select>
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
              <select className="input" name="village" onChange={e => setVil(e.target.value)} >
                <option selected></option>
                <option>Shri</option>
                <option>Miss</option>
                <option>Shrimati</option>
                <option>Kumari</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Taluka</label>
              <select className="input" name="taluka">
                <option selected></option>
                <option>Shri</option>
                <option>Miss</option>
                <option>Shrimati</option>
                <option>Kumari</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">State</label>
              <select className="input" name="state">
                <option selected></option>
                <option>Shri</option>
                <option>Miss</option>
                <option>Shrimati</option>
                <option>Kumari</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">District</label>
              <select className="input" name="district">
                <option selected></option>
                <option>Shri</option>
                <option>Miss</option>
                <option>Shrimati</option>
                <option>Kumari</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Pincode</label>
              <input className="input" type="number" name="pincode" />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Daridra Reshe Khali Kutumb Ahe Ka?</label>
              <select className="input" name="daridra" >
                <option selected></option>
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Daridra Reshetil Sr. No</label>
              <input className="input " type="number" name="daridrano" />
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Ekun Gun</label>
              <input className="input " type="number" name="gun" />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Daridra Reshe Khali Kutumb Ahe Ka?</label>
              <select className="input" name="dariresh">
                <option selected></option>
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Arthik Year</label>
              <input className="input" type="number" name="arthikyr" />
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Varshik Utpann</label>
              <input className="input" type="number" name="utpann" />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Arjdarala Mule/Muli Ahe Ka?</label>
              <select className="input" name="mule" >
                <option selected></option>
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Mule/Muli</label>
              <input className="input" type="number" name="muleno" />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Mulanche Lagn zale ahe kaAhe Ka?</label>
              <select className="input" name="Lagn" >
                <option selected></option>
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Tumchya Pasun Vibhakta Rahtat Ka?</label>
              <select className="input" name="vibhakta" >
                <option selected></option>
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Mulanche Lagn zale ahe kaAhe Ka?</label>
              <select className="input" name="sonmarriage" >
                <option selected></option>
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Tumchya Pasun Vibhakta Rahtat Ka?</label>
              <select className="input" name="vibhakta1" >
                <option selected></option>
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Mule/Muli Nokrila Ahe Ka?</label>
              <select className="input" name="Nokri" >
                <option selected></option>
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputZip" className="form-label">Nokriche Thikan</label>
              <input className="input" type="text" name="Nokriaddr" />
            </div>
            <div className="col-md-4">
              <label for="inputZip" className="form-label">Date</label>
              <input className="input" type="date" name="tarikh" />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Mule/Muli Nokrila Ahe Ka?</label>
              <select className="input" name="s_Nokri">
                <option selected></option>
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Vayacha Purava</label>
              <select className="input" name="ageproof">
                <option selected></option>
                <option>Shala Sodlyacha Dakhla</option>
                <option>Aadhar Card</option>
                <option>Matdan Card</option>
                <option>Aadhar Card</option>
                <option>Aadhar Card</option>
                <option>Aadhar Card</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Shala Sodlyacha Dakhla</label>
              <select className="input" name="lc" >
                <option selected></option>
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <br />
            <div className="heading2 col-md-12" >
              <h3>WITNESS</h3>
            </div>

            <div className="col-md-4">
              <label for="inputState" className="form-label">Salutation</label>
              <select className="input" name="s3">
                <option selected></option>
                <option>Shri</option>
                <option>Miss</option>
                <option>Shrimati</option>
                <option>Kumari</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputPassword4" className="form-label">Full Name</label>
              <input className="input " type="text" name="fullname2" />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Village</label>
              <select className="input" name="village1" >
                <option selected></option>
                <option>Shri</option>
                <option>Miss</option>
                <option>Shrimati</option>
                <option>Kumari</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Taluka</label>
              <select className="input" name="taluka1" >
                <option selected></option>
                <option>Shri</option>
                <option>Miss</option>
                <option>Shrimati</option>
                <option>Kumari</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">State</label>
              <select className="input" name="state1" >
                <option selected></option>
                <option>Shri</option>
                <option>Miss</option>
                <option>Shrimati</option>
                <option>Kumari</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">District</label>
              <select className="input" name="district1" >
                <option selected></option>
                <option>Shri</option>
                <option>Miss</option>
                <option>Shrimati</option>
                <option>Kumari</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Pincode</label>
              <input className="input " type="number" name="pincode1" />
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
