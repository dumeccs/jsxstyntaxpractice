
import React from "react"
import jersey from "./bryant.jpg"

/*
<div style={{border:solid 1px black;max-width:100vw}}>

 <h1 className="title red">Your name here</h1>

 <br >

 <img src="/imageInSrc.jpg" >

 <br >

 <img src="/imageInPublic.jpg" >

</div>

<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" >

</video>
*/

function Jsx(){
    return (
           <>
            <div style={{border:"solid 1px black,max-width:100vw"}}>
            <h1 className="title red">Fancy things</h1>
            <br />
            
            <img src={jersey}  alt="jersey" className="img" />

            <br />
            <img src="/garden.jpg" alt="garden" className="img"/>
            </div>
           </> 
           

    )
}

export default Jsx;