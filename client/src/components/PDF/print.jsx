import React from 'react';
import Pdf from "react-to-pdf";
const ref=React.createRef()
const PDF=(props)=>{
    return(
        <>
            <div  ref={ref}>
            <ol>
                <li>Name:{props.name}</li>
                <li>Age:{props.age}</li>
                <li>Full Name:{props.fullName}</li>
                <li>Father Name: {props.s2} {props.fatherName}</li>
                <li>Occupation:{props.occupatio}</li>
                <li><img src={props.img} alt="pic"/></li>
                <li></li>
                <li></li>
            </ol>
              
              
            
            </div>


            <Pdf targetRef={ref} filename='post.pdf'>
                {({ toPdf })=><button onClick={toPdf}>Capture as PDF</button>}

            </Pdf>
        </>
    )
}
export default PDF;