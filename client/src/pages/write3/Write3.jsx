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
  const [s2, setS2] = useState("");
  const [s3, setS3] = useState("");
  const [fullName, setfullName] = useState("");
  const [fatherName, setfName] = useState("");
  const [occupation, setOcc] = useState("");
  const [village, setVil] = useState("");
  const [taluka, setTal] = useState("");
  const [state, setStat] = useState("");
  const [district, setDist] = useState("");
  const [pincode, setPin] = useState("");
  const [daridra, setD] = useState("");
  const [daridrano, setDno] = useState("");
  const [gun, setGun] = useState("");
  const [dariresh, setDr] = useState("");
  const [arthikyr, setAy] = useState("");
  const [utpann, setUt] = useState("");
  const [dob, setDob] = useState("");
  const [vaypurava, setvayp] = useState("");
  const [shiksh, setShiksh] = useState("");
  const [karan, setKaran] = useState("");


  const [fullname1, setfullName1] = useState("");
  const [village1, setVil1] = useState("");
  const [taluka1, setTal1] = useState("");
  const [state1, setStat1] = useState("");
  const [district1, setDist1] = useState("");
  const [pincode1, setPin1] = useState("");

  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newIncome = {
      username: user.username,
      age,s1,fullName,s2,fatherName,occupation,village,taluka,state,district,pincode,
      daridra,daridrano,dariresh,gun,arthikyr,utpann,dob,vaypurava,shiksh,karan,
      s3,fullname1,village1,state1,district1,taluka1,pincode1
    };

    try {
      console.log("hello");
      const res = await axios.post("/income", newIncome);
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
              <label for="inputState" className="form-label">Daridra Reshe Khali Kutumb Ahe Ka?</label>
              <select className="input" name="daridra" onChange={e => setD(e.target.value)}>
                <option selected></option>
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Daridra Reshetil Sr. No</label>
              <input className="input " type="number" name="daridrano" onChange={e => setDno(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Ekun Gun</label>
              <input className="input " type="number" name="gun" onChange={e => setGun(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Daridra Reshe Khali Kutumb Ahe Ka?</label>
              <select className="input" name="dariresh"onChange={e => setDr(e.target.value)}>
                <option selected></option>
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Arthik Year</label>
              <input className="input" type="number" name="arthikyr" onChange={e => setAy(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Varshik Utpann</label>
              <input className="input" type="number" name="utpann" onChange={e => setUt(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Date Of Birth</label>
              <input className="input" type="Date" name="dob" onChange={e => setDob(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Vayacha Purava</label>
              <select className="input" name="vaypurava" onChange={e => setvayp(e.target.value)}>
                <option selected></option>
                <option>Shala Sodlyacha Dakhala</option>
                <option>Aadhar Card</option>
                <option>Matdan Card</option>
                <option>Vaidyakiy Adhikari Yancha Vyacha Dakhla</option>
                <option>Vayababat Swaghoshna Patra</option>
                <option>Mothya Mulacha Shala Sodlyacha dakhala</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Arjadar Shikshit Ahe ka?</label>
              <select className="input" name="shiksh"onChange={e => setShiksh(e.target.value)}>
                <option selected></option>
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Pratidnya Patrache Karan</label>
              <select className="input" name="karan"onChange={e => setKaran(e.target.value)}>
                <option selected></option>
                <option>Shravan Bal Seva Rajya Nivruttivetan Yojana</option>
                <option>Indira Gandhi Rashtriya Vrudhapakal Nivruttivetan Yojana</option>
              </select>
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
              <input className="input " type="text" name="fullname1" onChange={e => setfullName1(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Village</label>
              <input className="input " type="text" name="village1" onChange={e => setVil1(e.target.value)} />
             
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Taluka</label>
              <input className="input " type="text" name="taluka1" onChange={e => setTal1(e.target.value)} />
            
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">State</label>
              <input className="input " type="text" name="state1" onChange={e => setStat1(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">District</label>
              <input className="input " type="text" name="district1" onChange={e => setDist1(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Pincode</label>
              <input className="input " type="number" name="pincode1" onChange={e => setPin1(e.target.value)}/>
            </div>


            <button style={{backgroundColor:"#000080",color:"white",fontWeight:"40px",height:"40px"}} type="submit">Submit</button>
          </form>

        </div>) :
        <PDF age={age} fullName={fullName} s1={s1} />
      }
      <PDF age={age} fullName={fullName} s1={s1} s2={s2} occupation={occupation} village={village} fatherName={fatherName} />
    </>

  );
}
