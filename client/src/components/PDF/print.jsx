import React from 'react';
import Pdf from "react-to-pdf";
const ref=React.createRef()
const PDF=(props)=>{
    return(
        <>
            <div  ref={ref}>
            <ul>
                
               
            <li>Captured Image:<img src={props.img} alt="pic"/></li>
              {props.fullName?<li>Full Name:{props.s1} {props.fullName}</li>:null}
              {props.age?<li>Age:{props.age}</li>:null}
                {props.fatherName?<li>Father Name: {props.s2} {props.fatherName}</li>:null}
                {props.Occupation?<li>Occupation:{props.occupatio}</li>:null}
                
                {props.village?<li>Village:{props.village}</li>:null}
                {props.taluka?<li>Taluka:{props.taluka}</li>:null}
                {props.district?<li>district:{props.district}</li>:null}
                {props.state?<li >state:{props.state}</li>:null}
                
                {props.daridra?<li>Daridra Reshe Khali Kutumb Ahe Ka?:{props.daridra}</li>:null}
                {props.daridrano?<li>Daridra Reshetil Sr. No{props.daridrano}</li>:null}
                {props.gun?<li>Ekun Gun:{props.gun}</li>:null}
                {props.dadidra1?<li>Daridra Reshe Khali Kutumb Ahe Ka?:{props.dadidra1}</li>:null}
                {props.arthikyr?<li>Arthik Year:{props.arthikyr}</li>:null}
                {props.utpan?<li>Varshik Utpann:{props.utpan}</li>:null}
                {props.mule?<li>Arjdarala Mule/Muli Ahe Ka?:{props.mule}</li>:null}
                {props.muleno?<li>Mule/Muli:{props.muleno}</li>:null}
                {props.lagn?<li>Mulanche Lagn zale ahe Ka?:{props.lagn}</li>:null}
                {props.vibhakta?<li>Tumchya Pasun Vibhakta Rahtat Ka?:{props.vibhakta}</li>:null}
                {props.Nokri?<li>Mule/Muli Nokrila Ahe Ka?:{props.Nokri}</li>:null}
                {props.Nokriaddr?<li>Nokriche Thikan:{props.Nokriaddr}</li>:null}
                {props.ageproof?<li>Vayacha Purava:{props.ageproof}</li>:null}
                {props.lc?<li>Shala Sodlyacha Dakhla?:{props.lc}</li>:null}

                {props.ageproof1?<li>vayacha purava?:{props.ageproof1}</li>:null}
                

                {props.fullName1?<li>Full Name:{props.s3} {props.fullName1}</li>:null}
                {props.village1?<li>Village:{props.village1}</li>:null}
                {props.taluka1?<li>Taluka:{props.taluka1}</li>:null}
                {props.district1?<li>district:{props.district1}</li>:null}
                {props.state1?<li >state:{props.state1}</li>:null}


                <li></li>
            </ul>
              
              
            
            </div>


            <Pdf targetRef={ref} filename='post.pdf'>
                {({ toPdf })=><button onClick={toPdf} style={{backgroundColor:"#000080",color:"white"}}>Capture as PDF</button>}

            </Pdf>
        </>
    )
}
export default PDF;