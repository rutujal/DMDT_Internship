import React, { useRef } from 'react';
import "./Write.css";
import { useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';
import { Link ,useHistory} from 'react-router-dom';
import PDF from '../../components/PDF/print';
import Webcam from "react-webcam";



export default function Write() {
  let postSubmitted = false;

  const [age, setAge] = useState("");
  const [s1, setS1] = useState("");
  const [s2, setS2] = useState("");
  const [fullName, setfullName] = useState("");
  const [fatherName, setfName] = useState("");
  const [occupation, setOcc] = useState("");
  const [village, setVil] = useState("");
  const [img,setImg]=useState("");
  const [taluka,setTaluka]=useState("");
  const [state,setState]=useState("");
  const [district,setDistrict]=useState("");
  const [pincode,setPincode]=useState("");
  const [daridra,setDaridra]=useState("");
  const [daridrano,setDaridrano]=useState("");
  const [daridra1,setDaridra1]=useState("");
  const [arthikyr,setArthikyr]=useState("");
  const [utpan,setUtpan]=useState("");
  const [mule,setMule]=useState("");
  const [gun,setGun]=useState("");
  const [muleno,setMuleno]=useState("");
  const [lagn,setLagn]=useState("");
  const [vibhakta,setVibhkta]=useState("");
  const [sonmarriage,setSon]=useState("");
  const [vibhakta1,setVibhkta1]=useState("");
  const [Nokri,setNokri]=useState("");
  const [Nokriaddr,setNPlace]=useState("");
  const [tarik,setDate]=useState("");
  const [s_Nokri,setIsjob]=useState("");
  const [ageproof,setAgeproof]=useState("");
  const [ageproof1,setAgeproof1]=useState("");
  const [lc,setLc]=useState("");
  const [s3,setS3]=useState("");
  const [fullname2,setFullname2]=useState("");
  const [village1,setVillage1]=useState();
  const [taluka1,setTaluka1]=useState("");
  const [state1,setState1]=useState("");
  const [district1,setDistrict1]=useState("");
  const [pincode1,setPincode1]=useState("");
  const [sign,setSign]=useState("");
  
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      age,s1,fullName,s2,fatherName,occupation,village,img,taluka,state,
      district,pincode,daridra,daridrano,gun,daridra1,utpan,mule,arthikyr,muleno,
     lagn,vibhakta,sonmarriage,vibhakta1,Nokri,Nokriaddr,ageproof,
ageproof1,s_Nokri,tarik,lc,s3,fullname2,village1,taluka1,pincode1,state1,district1,img,sign

    };

    try {
      console.log("hello");
      const res = await axios.post("/posts", newPost);
      console.log(res);
      postSubmitted = true;
      console.log(postSubmitted);
      // console.log(name);
      
      // <PDF name={name} age={age}/>
      //window.location.replace("/pdf");
//<PDF age={age} fullName={fullName} s1={s1} s2={s2} occupation={occupation} village={village} img={img} fatherName={fatherName}/>

      //<Webcam ref={webRef}/>

    } catch (err) {
      console.log(err);
    }

  };

  
  const webRef=useRef(null);
  let im=null;
    const ShowImage=()=>{
      
        im=webRef.current.getScreenshot();
        setImg(im);
  };
 console.log(img);
console.log(sign);
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
              <input className="input" type="text" name="fatherName" placeholder="" onChange={e => setfName(e.target.value)} />
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
              <input className="input" type="text" name="village" placeholder="" onChange={e => setVil(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Taluka</label>
              <input className="input" type="text" name="taluka" placeholder="" onChange={e => setTaluka(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">State</label>
              <input className="input" type="text" name="state" placeholder="" onChange={e => setState(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">District</label>
              <input className="input" type="text" name="district" placeholder="" onChange={e => setDistrict(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Pincode</label>
              <input className="input" type="number" name="pincode"  placeholder="" onChange={e => setPincode(e.target.value)} />
            </div>
            <br/>
            <br/>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Daridra Reshe Khali Kutumb Ahe Ka?</label>
              <select className="input" name="daridra" onChange={e => setDaridra(e.target.value)}>
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Daridra Reshetil Sr. No</label>
              <input className="input " type="number" name="daridrano" onChange={e => setDaridrano(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Ekun Gun</label>
              <input className="input " type="number" name="gun" onChange={e => setGun(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Daridra Reshe Khali Kutumb Ahe Ka?</label>
              <select className="input" name="daridra1" onChange={e => setDaridra1(e.target.value)}>
                
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Arthik Year</label>
              <input className="input" type="number" name="arthikyr" onChange={e => setArthikyr(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Varshik Utpann</label>
              <input className="input" type="number" name="utpan" onChange={e => setUtpan(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Arjdarala Mule/Muli Ahe Ka?</label>
              <select className="input" name="mule" onChange={e => setMule(e.target.value)} >
 
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Mule/Muli</label>
              <input className="input" type="number" name="muleno" onChange={e => setMuleno(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Mulanche Lagn zale ahe ka?</label>
              <select className="input" name="lagn" onChange={e => setLagn(e.target.value)} >
               
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Tumchya Pasun Vibhakta Rahtat Ka?</label>
              <select className="input" name="vibhakta" onChange={e => setVibhkta(e.target.value)} >
                
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Mulanche Lagn zale ahe kaAhe Ka?</label>
              <select className="input" name="sonmarriage" onChange={e => setSon(e.target.value)}>
                
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Tumchya Pasun Vibhakta Rahtat Ka?</label>
              <select className="input" name="vibhakta1" onChange={e => setVibhkta1(e.target.value)}>
               
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Mule/Muli Nokrila Ahe Ka?</label>
              <select className="input" name="Nokri" onChange={e => setNokri(e.target.value)}>
                
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputZip" className="form-label">Nokriche Thikan</label>
              <input className="input" type="text" name="Nokriaddr" onChange={e => setNPlace(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputZip" className="form-label">Date</label>
              <input className="input" type="date" name="tarikh" onChange={e => setDate(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Mule/Muli Nokrila Ahe Ka?</label>
              <select className="input" name="s_Nokri" onChange={e => setIsjob(e.target.value)}>
               
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Vayacha Purava</label>
              <select className="input" name="ageproof" onChange={e => setAgeproof(e.target.value)}>
  
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
              <select className="input" name="lc" onChange={e => setLc(e.target.value)}>
   
                <option>No</option>
                <option>Yes</option>
              </select>
              
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">vayacha purava</label>
              <select className="input" name="ageproof1" onChange={e => setAgeproof1(e.target.value)} >
               
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
              <input className="input " type="text" name="fullname2" onChange={e => setFullname2(e.target.value)}/>
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
              <input className="input" name="state1" onChange={e => setState1(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">District</label>
              <input className="input" name="district1" onChange={e => setDistrict1(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Pincode</label>
              <input className="input " type="number" name="pincode1"  onChange={e => setPincode1(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputCity" className="form-label">Signature</label>
              <input className="input " type="file" name="sign"  onChange={e => setSign(e.target.files[0].name)}/>
            </div>
            
            <Webcam ref={webRef} style={{width:"250px",height:"250px"}}/>
   
   <button className='bclass' style={{width:"70px",height:"30px",marginTop: "250px",
    marginLeft: "-150px"}} onClick={()=>{
         ShowImage()
       }}>Click</button>
            <button style={{backgroundColor:"#000080",color:"white",fontWeight:"40px",height:"40px"}} type="submit">Submit</button>
          </form>

        </div>) :
        <PDF age={age} fullName={fullName} s1={s1} img={img}/>
        
      }
      
      <PDF age={age} fullName={fullName} s1={s1} s2={s2} occupation={occupation} village={village} img={img} fatherName={fatherName}
        taluka={taluka} state={state} district={district} pincode={pincode} daridra={daridra} daridrano={daridrano} daridra1={daridra1}
        gun={gun}  utpan={utpan} mule={mule} arthikyr={arthikyr} muleno={muleno}
     lagn={lagn} vibhakta={vibhakta} sonmarriage={sonmarriage} vibhakta1={vibhakta1} Nokri={Nokri} Nokriaddr={Nokriaddr} ageproof={ageproof}
ageproof1={ageproof} s_Nokri={s_Nokri} tarik={tarik} lc={lc} s3={s3} fullname2={fullname2} village1={village1} taluka1={taluka1} pincode1={pincode1} state1={state1} district1={district1}  sign={sign}

      />
    </>
   
  );
  
}
