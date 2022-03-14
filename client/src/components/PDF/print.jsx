import React from 'react';
import Pdf from "react-to-pdf";
const ref=React.createRef()
const PDF=(props)=>{
    return(
        <>
            <div  ref={ref}>
            <h3>hello</h3>
              <h2>{props.name}</h2>
              <h3>{props.age}</h3>
              <h3>{props.s1}</h3>
              <h3>{props.fullName}</h3>
             <p>
                 {props.s2} {props.fatherName}
                   {props.occupation}
             </p>
            </div>

            <Pdf targetRef={ref} filename='post.pdf'>
                {({ toPdf })=><button onClick={toPdf}>Capture as PDF</button>}

            </Pdf>
        </>
    )
}
export default PDF;