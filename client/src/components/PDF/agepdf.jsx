import React from 'react';
import Pdf from "react-to-pdf";
const ref=React.createRef()
const PDF=(props)=>{
    return(
        <>
            <div  ref={ref}>
            <ul>

<h3> महाराष्ट्र शासन<br/>
(शासनननर्णय क्रमाांक :- आर .टी.एस.२०१८/प्र.क्र.१४५/आस्था.५)
नद .11/02/2022.
Annexure वयाबाबत स्वयांघोषर्ापत्र ( मराठी)
</h3>

            <p>मी , {props.s1} {props.fullName} श्री. नवठ्ठल दयाराम पाटील , याांची पत्नी , वय {props.age},
             धांदा. {props.occupation}, रा. {props.village} बु. , ता . {props.taluka}, जि . {props.district}
              घोजित करतो की , वरील सवव माजिती माझ्या व्यजिगत माजिती व समिुतीनुसार खरी आिे . सदर माजिती खोटी 
              आढळून आल्यास , भारतीय दांड सांजित १९६० कलम १९९ कलम व २०० व अन्य / सांबांजधत कायद्यानुसार 
              माझ्यावर खटला भरला िाईल व त्यानुसार 
              मी जिक्षेस पात्र राजिन याांची मला पूणव िाणीव आिे . </p>
             
              
                {props.fatherName?<li>Father Name: {props.s2} {props.fatherName}</li>:null}
    


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