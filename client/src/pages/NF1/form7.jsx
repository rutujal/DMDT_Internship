import React from 'react';
import "../write/Write.css";
import { useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';
import { Link } from 'react-router-dom';
import PDF from '../../components/PDF/print';

export default function Write() {
  let postSubmitted = false;

  const [nName, setNName] = useState("");
  const [fullName, setfullName] = useState("");
  const [PName, setPName] = useState("");
  const [address, setAddr] = useState("");
  const [vmahiti, setV] = useState("");
  const [caste, setCaste] = useState("");
  const [dob, setDOB] = useState("");
  const [ad, setAD] = useState("");
  const [ageP, setAgeP] = useState("")

  const [rp, setRP] = useState("")
  const [dt, setDT] = useState("")
  const [sy, setSY] = useState("")
  const [dn,setDN] = useState("")
  const [dg, setDG] = useState("")

  const [id, setID] = useState("")
  const [ap, setAp] = useState("")
  const [ap1, setAP1] = useState("")
  const [ap2, setAP2] = useState("")
  const [vy, setVY] = useState("")

  const [fam, setFam] = useState("")
  const [v2y, setV2Y] = useState("")
  const [v3y, setV3Y] = useState("")
  const [mp, setM] = useState("")
  const [res, setRes] = useState("")
  const [vote, setVote] = useState("")
  const [aadhar, setAadhar] = useState("")
  
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newForm7 = {
      username: user.username,
      nName,
      vmahiti,
      fullName,
      PName,
      address,
      caste,
      dob,
      ad,
      ageP,
      rp,
      dt,
      sy,
      dn,dg,id,ap,ap1,ap2,vy,fam,v2y,v3y,mp,res,
      vote,aadhar


    };

    try {
      console.log("hello");
      const res = await axios.post("/form7", newForm7);
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
              <label for="inputAddress" className="form-label">पतीचे नाव </label>
              <input className="input" type="text" name="father" placeholder="" onChange={e => setPName(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputAddress2" className="form-label">नामदर्शित व्यक्तीचे नाव </label>
              <input className="input" type="number" name="age" placeholder="" onChange={e => setNName(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">संपूर्ण पत्ता</label>
              <input className="input " type="text" name="occupation" onChange={e => setAddr(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label" >वैयक्तिक माहिती </label>
              <label for="inputState" className="form-label" >लिंग </label>
              <select className="input" name="s1" onChange={e => setV(e.target.value)}>

                <option>पुरुष</option>
                <option>स्त्री</option>
                <option>तृतीयपंथी</option>

              </select>
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
              <label for="inputState" className="form-label">अर्जाच्या दिनांकास अर्जदाराचे वय </label>
              <input className="input " type="text" name="state" onChange={e => setAD(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">वयाबाबतीत दिलेला पुरावा </label>
              <input className="input " type="text" name="district" onChange={e => setAgeP(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">रहिवास पुरावा</label>
              <input className="input" type="number" name="pincode" onChange={e => setRP(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">दारिद्र्य रेषेखालील तपशील </label>
              <input className="input" type="number" name="pincode" onChange={e => setDT(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">बी.पी.एल. सर्व्ह वर्ष -२००२-२००७</label>
              <input className="input" type="number" name="pincode" onChange={e => setSY(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">दारिद्र्यरेषाखालील कुटुंब यादीतील अ.नं.</label>
              <input className="input" type="number" name="pincode" onChange={e => setDN(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">दारिद्र्य रेषा यादीतील गुण</label>
              <input className="input" type="number" name="pincode" onChange={e => setDG(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">बिपीएल कुटुंब आय.डी.	</label>
              <input className="input" type="number" name="pincode" onChange={e => setID(e.target.value)} />
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
                <label for="inputCity" className="form-label">अपंगत्वाचा प्रकार </label>
                <input className="input" type="number" name="pincode" onChange={e => setAP2(e.target.value)} />
              </div>

              
            <div className="col-md-4">
              <label for="inputState" className="form-label" >अर्जदार विधवा आहे काय </label>

              <select className="input" name="s1" onChange={e => setVY(e.target.value)}>

                <option>होय</option>
                <option>नाही</option>

              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label" >) विधवा असल्यास पतीच्या मृत्याचा दाखला	:-  </label>

              <select className="input" name="s1" onChange={e => setV2Y(e.target.value)}>

                <option>होय</option>
                <option>नाही</option>

              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label" > यापूर्वी लाभ घेत असल्यास योजनेचे नाव </label>

              <select className="input" name="s1" onChange={e => setV3Y(e.target.value)}>

                <option>होय</option>
                <option>नाही</option>

              </select>
            </div>

            <div className="col-md-4">
              <label for="inputCity" className="form-label">कुटुंबाची माहिती</label>
              <input className="input" type="number" name="pincode" onChange={e => setFam(e.target.value)} />
            </div>

            <div className="heading2 col-md-12" >
              <h3>मंडळ अधिकारी / तलाठी यांचा तपासणी अहवाल</h3>
            </div>
            <div className="col-md-4">
              <label for="inputPassword4" className="form-label">अर्जदाराचे नाव </label>
              <input type="text" className="input form control" onChange={e => setfullName(e.target.value)} />
            </div>

            <div className="col-md-4">
              <label for="inputCity" className="form-label">संपूर्ण पत्ता</label>
              <input className="input " type="text" name="occupation" onChange={e => setAddr(e.target.value)} />
            </div>

            <div className="col-md-4">
              <label for="inputCity" className="form-label">दारिद्र्य रेषेखालील तपशील </label>
              <input className="input" type="number" name="pincode" onChange={e => setDT(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">बी.पी.एल. सर्व्ह वर्ष -२००२-२००७</label>
              <input className="input" type="number" name="pincode" onChange={e => setSY(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">दारिद्र्यरेषाखालील कुटुंब यादीतील अ.नं.</label>
              <input className="input" type="number" name="pincode" onChange={e => setDN(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">दारिद्र्य रेषा यादीतील गुण</label>
              <input className="input" type="number" name="pincode" onChange={e => setDG(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">बिपीएल कुटुंब आय.डी.	</label>
              <input className="input" type="number" name="pincode" onChange={e => setID(e.target.value)} />
            </div>

           
            <div className="col-md-4">
              <label for="inputState" className="form-label">जन्म तारीख </label>
              <input className="input " type="text" name="taluka" onChange={e => setDOB(e.target.value)} />

            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">जात / प्रवर्ग </label>
              <input className="input " type="text" name="taluka" onChange={e => setCaste(e.target.value)} />

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
              <label for="inputState" className="form-label" ><div className="col-md-4">
                <label for="inputState" className="form-label" >पती मयत असल्यास मयत दाखला	 जोडला आहे का ? </label>

                <select className="input" name="s1" onChange={e => setM(e.target.value)}>

                  <option>होय</option>
                  <option>नाही</option>

                </select>
              </div> </label>

            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">रेशन कार्ड नं.</label>
              <input className="input " type="text" name="taluka" onChange={e => setRes(e.target.value)} />

            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">मतदान ओळखपत्र  क्र.</label>
              <input className="input " type="text" name="taluka" onChange={e => setVote(e.target.value)} />

            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">आधार कार्ड </label>
              <input className="input " type="text" name="taluka" onChange={e => setAadhar(e.target.value)} />

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